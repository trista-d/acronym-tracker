import { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import AddForm from './AddForm';

/**
 * This is the main component of the application that loads sub-components. It mains the overall
 * state of the application (to determine whether the Add or Search / List component should be visible).
 */
function App() {
  // Component state variables
  const [appState, setAppState] = useState(0);
  const [acroMap, setAcroMap] = useState(new Map());

  // Functions used for passing to subcomponents in props so that they can update state
  const updateAppState = (updatedState) => {
    console.log("in appState: " + appState);
    setAppState(updatedState);
    console.log("out appState: " + appState);
  };
  
  const updateAcroMap = (k, v) => {
    console.log("Updating acroMap: k=" + k + " v=" + v);
    setAcroMap(acroMap.set(k.toUpperCase(), v));
  }

  // Render the SearchForm component or AddForm component depending on the appState
  return (
    <div className="App">
      { appState === 1 ? <AddForm acroMap={ acroMap } updateAcroMap={ updateAcroMap } appState={ appState } updateAppState={ updateAppState }/> : <SearchForm appState={ appState } acroMap={ acroMap } updateAppState={ updateAppState }/> }
    </div>
  );
}
export default App;