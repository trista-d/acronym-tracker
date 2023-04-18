import { useState } from "react";
import "./App.css";


function AddForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (event) => {
    if (searchTerm.trim() !== "" && definition.trim() !== "") {
      props.updateAcroMap(searchTerm.trim(), definition);
      props.updateAppState(0);
      event.preventDefault();
    }
  }

  const updateState = (event) => {
    props.updateAppState(0);
    event.preventDefault();
  }

  return (
    <div className="AddFormContainer">
    <div className="AddForm">
      <h1>Add Acronym</h1>
      <label>Enter acronym:</label>
      <input type="text" id="searchfield" onBlur={ (event) =>
          setSearchTerm(event.target.value) }/>
      <label>Enter Definition:</label>
      <input type="text" id="definitionfield" onBlur={ (event) =>
          setDefinition(event.target.value) }/>
      <br />
      <br />
      <button type="submit" value="Submit" onClick={ handleSubmit }>Save</button>
      <button type="cancel" value="Cancel" onClick={ updateState }>Cancel</button>
    </div>
  </div>
  );
}
export default AddForm;