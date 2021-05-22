import React, {useState, useRef, useEffect} from "react";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
    Modal
  } from "react-bootstrap";

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
  

  export default UpdateEmp;
