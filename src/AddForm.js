import { useState } from "react";
import "./App.css";
import { db } from "./firebase";
import { ref, push } from "firebase/database";

/**
 * This component shows the acronym and definition fields. If both of these fields are filled in
 * and "save" is pressed, the state is updated back to the searchForm view.
 */
function AddForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // save acronym to the realtime database
  const saveAcronym = (event) => {
    let acro = searchTerm.trim();

    if (acro !== "" && definition.trim() !== "") {
      push(ref(db), {
        acronym: acro.toUpperCase(),
        definition: definition
      });

      // leave add acronym screen
      props.updateAppState(0);
      event.preventDefault();
    }
  }

  // return to searchForm screen
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
      <button type="submit" value="Submit" onClick={ saveAcronym }>Save</button>
      <button type="cancel" value="Cancel" onClick={ updateState }>Cancel</button>
    </div>
  </div>
  );
}
export default AddForm;