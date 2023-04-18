import { useState } from "react";
import "./App.css";


/**
 * This component shows the search field and the search result if one is found. If a search has not
 * been executed yet, or if the user searched on an "empty" search term, it will list all of the
 * available acronyms.
 */
function SearchForm(props) {
  // Component state variables to store the entered search term and the search term that the last
  // search was executed for.
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Sets the search term and updates the state to 0 ("show search form and results")
  const handleSubmit = (event) => {
    if (searchTerm.trim() === "") {
      props.updateAppState(0);
      setSearchTerm(""); 
    } else {
      setResult(props.acroMap.has(searchTerm.trim().toUpperCase()) ? searchTerm.trim().toUpperCase() : "");
      props.updateAppState(2);
    }
    //event.preventDefault(); // Not necessary because it's not a "submit" so full refresh won't occur anyway
  }

  // Sets the state to 1 ("add") so that the AddForm component shows
  const setStateToAdd = (event) => {
    props.updateAppState(1);
    //event.preventDefault(); // Not necessary because it's not from a "submit" so full refresh won't occur anyway
  }

  // Creates the list of acronyms for display
  const showAcronyms = () => {
    let list = [<hr/>];
    let keys = [...props.acroMap.keys()];
    keys.sort();
    keys.map((k, i) =>
      list.push(<div key={ k } className="listItemContainer">
            <div className="acroList1">{ k }</div>
            <div className="acroList2">{ props.acroMap.get(k) }</div>
          </div>,
          <hr/>
      )
    );
    return list;
  }

  // Creates the search result message for display
  const showResult = () => {
    let msg;
    if (result.length > 0 && props.acroMap.has(result)) {
      msg = props.acroMap.get(result);
    } else {
      msg = "Not Found";
    }

    return (
      <div id="result">
        { msg.length === 0 || msg.localeCompare("Not Found") === 0 ? "" : <div className="acroResult">{result}</div> }
        <div className="acroResult">{ msg }</div>
      </div>
    )
  }

  // Determines whether to show search results or the list of acronyms based on the current state
  let info;
  if (props.appState === 2) {
    info = showResult();
  } else if (props.appState === 0) {
    info = showAcronyms();
  }

  return (
    <>
      <div className="main-search-div">
      <div className="searchFormContainer">
      <div className="searchForm">
        <h1>Welcome!</h1>
        <label>Enter acronym</label><br/>
        <input type="text" name="searchfield" onBlur={ (event) =>
            setSearchTerm(event.target.value) }/>

        <button type="submit" onClick={handleSubmit}>Search</button>
        <button type="submit" onClick={setStateToAdd}>New Acronym</button>
      </div>
      </div>
      <div className="acronym-subheading">
        Acronyms:
      </div>
      <div id="infodiv">
        {  info  }
      </div>
    </div>
  </>
  );
}
export default SearchForm;