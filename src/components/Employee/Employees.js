import React, {Component} from "react";
import employees from "../../employees.json";
import Search from "../Search/Search"

//looking into Object.values
//
class ShowEmployees extends Component {

    state = {
        employees: employees,
        filteredEmployees: employees,
        order: "descend"
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        // event.preventDefault();
        const searchVal = event.target.value
        const filter = this.state.employees.filter(data => {
            console.log(data)
            const valCheck = Object.values(data)
            .join("").toLowerCase()
            console.log(valCheck)
           
            return valCheck.indexOf(searchVal.toLowerCase() ) !== -1
          })
          this.setState({filteredEmployees:filter})

      }

      handleSort = heading => {
          if (this.state.order === "descend"){
              this.setState({order: "ascend"})
          } else {
          this.setState({order: "descend"})
          }
          const compare = (a,b) =>{
              if(this.state.order === "ascend"){
                  if(a[heading] === undefined){
                      return 1
                  } else if(b[heading] === undefined){
                      return -1
                  } else if (heading === "name"){
                      console.log("testing")
                      return a[heading].firstName.localeCompare(b[heading].firstName)
                  } else {
                      return a[heading] - b[heading]
                  }
              } else {
                if(a[heading] === undefined){
                    return 1
                } else if(b[heading] === undefined){
                    return -1
                } else if (heading === "name"){
                    return b[heading].firstName.localeCompare(a[heading].firstName)
                } else {
                    return b[heading] - a[heading]
                }
              }
          }
          const sortedEmployees = this.state.filteredEmployees.sort(compare)
          this.setState({filteredEmployees: sortedEmployees})
      }

     headings = [
         
        {name:"id", width:"20%"},{name:"Name", width:"20%"},{name:"Occupation", width:"20%"}
     ]

    

    render (){
    return (
        <>
        <h1 className="text-align-center">Bon Appétit Employee Directory</h1>

        <Search filterEmployees= {this.filterEmployees} handleFormSubmit = {this.handleFormSubmit}></Search>
        <br></br>
        <p>Click on the Category Heading to Sort Field</p>
        <br></br>
        <table  className="table table-bordered table-striped">
  <thead>
    <tr>
      {this.headings.map(({name,width})=>{
          return(
          <th key = {name} style = {{width}} onClick = {()=>{
              this.handleSort(name.toLowerCase())
          }}>{name} <span className = "arrow"></span></th>
          )
      })}
    </tr>
   </thead>
   <tbody>
     {this.state.filteredEmployees.map(data => {
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