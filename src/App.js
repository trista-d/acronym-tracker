import { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import AddForm from './AddForm';
import { db } from "./firebase";
import { ref, get } from "firebase/database";

/**
 * This is the main component of the application that loads sub-components. It mains the overall
 * state of the application (to determine whether the Add or Search / List component should be visible).
 */
function App() {
  
  // Component state variables
  const [appState, setAppState] = useState(0);
  const [acroMap, setAcroMap] = useState(new Map());
  const [forceRender, setRender] = useState(true);

  // Functions used for passing to subcomponents in props so that they can update state
  const updateAppState = (updatedState) => {
    setAppState(updatedState);
  };
  
  // Updates or add key, value pair in map
  const updateAcroMap = (k, v) => {
    setAcroMap(acroMap.set(k.toUpperCase(), v));
  }

  // Gets acronyms from database and save them to state
  const updateAcronymsList = () => {
    // read from Firebase
    get(ref(db)).then((snapshot) => {
      let dbEntries = Object.entries(snapshot.val());
      
      // Get key-value pairs to put in map
      for (let i = 0; i < dbEntries.length; i++) {
        let keyAndVal = Object.values(dbEntries[i][1]);
        if (keyAndVal.length > 0) {
          updateAcroMap(keyAndVal[0], keyAndVal[1]);
        }
      }
      
      // Forces component to re-render
      // Needed because reading from database is asyncronous so we want to 
      // render component once we have the data we need for it
      setRender(!forceRender);
    });
  }

  // Render the SearchForm component or AddForm component depending on the appState
  return (
    <div className="App">
      { appState === 1 ? <AddForm acroMap={ acroMap } updateAcroMap={ updateAcroMap } appState={ appState } updateAppState={ updateAppState }/> : <SearchForm appState={ appState } acroMap={ acroMap } updateAcronymsList={ updateAcronymsList } updateAppState={ updateAppState }/> }
    </div>
  );
}
export default App;