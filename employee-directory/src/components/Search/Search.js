import React from "react"



SearchForm = ({filterEmployees}) => {
    return(
        <>
        <input type="text" onChange={e => filterEmployees(e)}>Search</input>
        </>
    )
}

export default SearchForm;
