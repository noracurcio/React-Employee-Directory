import React from "react";

function SearchForm(props) {
  
  return (
    <>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search for an Employee or Occupation</label>
        <input
          onChange={props.handleFormSubmit}
          value={props.value}
          name="search"
          type="input"
          className="form-control"
          placeholder=""
         
        />

        <br/>

        <button onClick= {props.handleFormSubmit} className= "btn btn-primary">
          Clear Search
        </button>

      </div>

    </form>
    </>
  );
}

export default SearchForm;