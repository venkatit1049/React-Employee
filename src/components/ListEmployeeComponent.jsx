import React, { Component,useState,  } from 'react'
import EmployeeService from '../services/EmployeeService'
import AddEmp from "./AddEmpComponent.jsx";
//import UpdateEmp from "./UpdateEmp";
import axios from 'axios';


// react-bootstrap components
import {
    Button,
    Dropdown,
    Modal
  } from "react-bootstrap";


  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
               filter: "",
               EMPLOYEE_API_BASE_URL:"",
               showHideDemo1: false,
        }
         //this.onSort = this.onSort.bind(this);
         this.handleChange = this.handleChange.bind(this);
        // this.EMPLOYEE_API_BASE_URL = "https://example.com/api/items";

    }  

    // getEmployees(){
    //   return axios.get(EmployeeService.EMPLOYEE_API_BASE_URL);
    // }

    componentDidMount(){
      EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
 

    handleChange = event => {
        this.setState({ filter: event.target.value });
      };

      

      onSortNameAsc(event, sortKey) {
       
        const employees = this.state.employees;
        employees.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
        this.setState({ employees });
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    
      onSortNameDes(sortKey) {
       
        const employees = this.state.employees;
        employees.sort((a, b) => a[sortKey] > b[sortKey]).reverse();
        this.setState({ employees });
      }

      onSortSalaryAsc() {
        const employees = this.state.employees;
        employees.sort((a, b) => a.salary - b.salary);
        this.setState({ employees });
      }
      onSortSalaryDes() {
        const employees = this.state.employees;
        employees.sort((a, b) => b.salary - a.salary);
        this.setState({ employees });
      }

      onSortAgeAsc() {
        const employees = this.state.employees;
        employees.sort((a, b) => a.age - b.age);
        this.setState({ employees });
      }
      onSortAgeDes() {
        const employees = this.state.employees;
        employees.sort((a, b) => b.age - a.age);
        this.setState({ employees });
      }

      editEmployee(emp){
       // this.props.history.push(`/add-employee/${id}`);
        this.setState({ showHideUpdateEmp: !this.state.showHideUpdateEmp });
      }

    render() {
        const { filter, employees } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = employees.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(lowercasedFilter)
          );
          
        });
        const { showHideUpdateEmp} = this.state;

        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                     <div className="col-4"><AddEmp/>
                     </div>
                     <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
                     {/* <UpdateEmp />
                     <div className="col-4"> {showHideUpdateEmp && <UpdateEmp />}</div> */}

                     <div  className="col-4">
                     <input placeholder="Search Employee" className="searchBox form-control" value={filter} onChange={this.handleChange} />
                     </div>
                     <div  className="col-4">
   

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Sort By
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={(e) => this.onSortNameAsc(e, "name")}>Sort Name A-Z</Dropdown.Item>
    <Dropdown.Item  onClick={(e) => this.onSortNameDes(e, "name")}>Sort Name Z-A</Dropdown.Item>
    <Dropdown.Item  onClick={(e) => this.onSortSalaryAsc(e, "salary")}>Sort Salary Ascending </Dropdown.Item>
    <Dropdown.Item  onClick={(e) => this.onSortSalaryDes(e, "salary")}>Sort Salary Descending</Dropdown.Item>
    <Dropdown.Item  onClick={(e) => this.onSortAgeAsc(e, "age")}>Sort Age Ascending</Dropdown.Item>
    <Dropdown.Item  onClick={(e) => this.onSortAgeDes(e, "age")}>Sort Age Descending</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

                     {/* <Button onClick={(e) => this.onSortNameAsc(e, "name")}>Sort A-Z</Button>
                     <Button onClick={(e) => this.onSortNameDes(e, "name")}>Sort Sort Z-A</Button>
                     <Button onClick={(e) => this.onSortSalaryAsc(e, "salary")}>Sort Salary Ascending  </Button>
                     <Button onClick={(e) => this.onSortSalaryDes(e, "salary")}>Sort Salary Descending</Button>
                     <Button onClick={(e) => this.onSortAgeAsc(e, "salary")}>Sort Age Ascending  </Button>
                     <Button onClick={(e) => this.onSortAgeDes(e, "salary")}>Sort Age Descending</Button> */}
                     </div>
                     
                 </div>
                 <br></br>
                
                 {/* <div className = "row">

                 <div className="col-12 container">
                    <ul className="list-unstyled row">
                    {
                                   filteredData.map(
                                        employee => 
                    
                        <li className="list-item col-6 border-top border-bottom py-2">
                        
                        <div className="emp-details">
                        <div>  id:<span> { employee.id} </span></div>
                            <div>  Name:<span> { employee.name} </span></div>
                            <div>  Age:<span>{employee.age}</span></div>
                            <div>  Salary:<span> {employee.salary}</span></div>
                        </div>
                        </li>
                    )}
                     </ul>
                    </div>                 
                </div> */}


                
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Employee id</th>
                                    <th> Employee Name</th>
                                    <th> Employee Age</th>
                                    <th> Employee Salary</th>
                                    <th> Actions</th>


          
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   filteredData.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> { employee.id} </td>   
                                             <td> { employee.name} </td>   
                                             <td> {employee.age}</td>
                                             <td> {employee.salary}</td>
                                             <td>
                                             {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button> */}
                                             {/* <button onClick={ () => this.editEmployee(employee)} className="btn btn-info">Update </button> */}
                                             <UpdateEmp  dataFromParent = {employee}  />
                                                 <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                                            
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

function UpdateEmp(dataFromParent) {
  const [show, setShow] = useState(false);
console.log("dataFromParent = "+dataFromParent);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let dataFromParentVal = dataFromParent.dataFromParent;
localStorage.setItem('sessionName', dataFromParentVal.name);
let sessionName = localStorage.getItem('sessionName') || '';

  return (

    <>
      <Button variant="primary" onClick={handleShow}>
      Update       
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Employee Details {sessionName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
           <div className = "card-body">
                  <form>
                      <div className = "form-group">
                          <label> First Name: </label>
                          <input placeholder="First Name" name="FirstName" value={dataFromParentVal.name} className="form-control" 
                              />
                      </div>
                      <div className = "form-group">
                          <label> Age: </label>
                          <input placeholder="Age" name="Age"  value={dataFromParentVal.age} className="form-control" 
                              />
                      </div>
                      <div className = "form-group">
                              <label>Salary: </label>
                              <input placeholder="Salary" name="Salary"  value={dataFromParentVal.salary} className="form-control" 
                                  />
                          </div>

                          
                      </form>
              </div>
            
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default ListEmployeeComponent
