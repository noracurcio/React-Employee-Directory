import React, {Component} from "react";
import employees from "../../employees.json";
import Search from "../Search/Search"

//looking into Object.values
//
class ShowEmployees extends Component {

    state = {
        employees: employees,
        filteredEmployees: employees
    }

    filterEmployees = (event) => {
        // event.preventDefault()
        const searchVal = event.target.value
        const filter = this.state.employees.filter(data => {
            console.log(data)
            const checkValues = Object.values(data)
            .join("").toLowerCase()
            console.log(checkValues)

            return checkValues.indexOf(searchVal.toLowerCase() !== -1)

            
        })
        this.setState({employees:filter})
    }

    render (){
    return (
        <>
        <Search filterEmployees= {this.filterEmployees}></Search>
        <table>
  <thead>
    <tr>
      <th>header1</th>
      <th>header2</th>
      <th>header3</th>
    </tr>
   </thead>
   <tbody>
     {employees.map(data => {
         return(
         <tr key={data.id}>
             <td className="align-middle">
                 {data.id}
             </td>
             <td className="align-middle">
                 {data.firstName} {data.lastName}
             </td>
             <td className="align-middle">
                 {data.occupation}
             </td>
         </tr>
     )

     })}
  </tbody>
</table>
</>
        
    )
}

}


export default ShowEmployees