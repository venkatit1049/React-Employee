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

function AddEmp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Add Employee      
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Add Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
             <div className = "card-body">
                    <form>
                        <div className = "form-group">
                            <label> First Name: </label>
                            <input placeholder="First Name" name="FirstName" className="form-control" 
                                />
                        </div>
                        <div className = "form-group">
                            <label> Age: </label>
                            <input placeholder="Age" name="Age" className="form-control" 
                                />
                        </div>
                        <div className = "form-group">
                                <label>Salary: </label>
                                <input placeholder="Salary" name="Salary" className="form-control" 
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
  

  export default AddEmp;
