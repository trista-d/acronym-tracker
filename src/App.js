import { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import AddForm from './AddForm';
import { db } from "./firebase";
import { ref, get, remove } from "firebase/database";

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
    // Read from Firebase
    get(ref(db)).then((snapshot) => {
      if (snapshot.val() != null) {
        let dbEntries = Object.entries(snapshot.val());

        // Get key-value pairs to put in map
        for (let i = 0; i < dbEntries.length; i++) {
          let key = dbEntries[i][0];
          let val = Object.values(dbEntries[i][1]);
          if (key.length > 0) {
            updateAcroMap(key, val[0]);
          } 
        }
      }
      
      // Forces component to re-render
      // Needed because reading from database is asyncronous so we want to 
      // render component once we have the data we need for it
      setRender(!forceRender);
    });
  }

  // Deletes an acronym from database and state
  const deleteAcronym = (key) => {
    if (key.length > 0) {
      remove(ref(db, key));
      acroMap.delete(key);

      // Forces component to re-render
      // Needed to prevent error from searching for a deleted key 
      setRender(!forceRender);
    }
  }

  // Render the SearchForm component or AddForm component depending on the appState
  return (
    <div className="App">
      { appState === 1 ? <AddForm acroMap={ acroMap } updateAcroMap={ updateAcroMap } appState={ appState } updateAppState={ updateAppState }/> : <SearchForm appState={ appState } acroMap={ acroMap } updateAcronymsList={ updateAcronymsList } deleteAcronym={ deleteAcronym } updateAppState={ updateAppState }/> }
    </div>
  );
}
export default App;