import React from 'react';
 import { useState } from 'react';
 import {Button, Form, Row, Col, Modal, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap';



const PersonalData = () => {
    const date = new Date ();
    const currentYear = date.getFullYear();
    
    const [NPM, setNPM] = useState(0);
    const [FirstName, setFirstName] = useState("");
    const [MiddleName, setMiddleName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Brithdate, setBrithdate] = useState("");
    const [show, setShow] = useState(false);
    const [Validated, setValidated] = useState(false);
    
    const handleClose = () => setShow (false);

    const handleSubmit = (a) => {
      const form = a.currentTarget;
      if (form.checkValidity() === false) {
        a.preventDefault();
        a.stopPropagation();
      } else {
        a.preventDefault();
        setShow(true);
      }
      setValidated(true);
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='mx-auto my-auto w-50 border rounded p-4'>
        <h1 className='text-center'>Personal Data</h1>
        <Form noValidate validated={Validated} onSubmit={handleSubmit}>
         <Form.Group className='mb-3' controlId='NPM'>
            <Form.Label>NPM</Form.Label>
            <Form.Control
            type='number'
            pattern='[0-9*]'
            placeholder='Enter NPM'
            onChange= {(a) => setNPM (a.target.value)}
            required
            maxLength={10}
            />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              NPM is a required field with a maximum of 10 numeric digits
            </Form.Control.Feedback>
            </Form.Group>

         <Row className="mb-3">
        <Form.Group as={Col} controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name"
          onChange={(a) => setFirstName(a.target.value)} 
          required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              First Name is a required field
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="middlename">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="MiddleName" 
          onChange={(a) => setMiddleName(a.target.value)} 
          required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Middle Name is a required field
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="LastName"
          onChange={(a) => setLastName(a.target.value)} 
          required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Last Name is a required field
            </Form.Control.Feedback>
        </Form.Group>
            </Row>

            <Form.Group className='mb-3 me-2' controlId='LName'>
            <Form.Label>Brithdate</Form.Label>
            <Form.Control
            type='text'
            placeholder='YYYY-MM-DD'
            onChange={(a) => setBrithdate(a.target.value)} 
          required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Brithdate is a required field
            </Form.Control.Feedback>
            </Form.Group>

          <Button variant="primary" className='mt-2' type='submit'>
        Submit
          </Button>
         </Form>
    
        </div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton >
                <Modal.Title>Biodata</Modal.Title>
            </Modal.Header>
        <ModalBody>
        <p>
            NPM : {NPM} <br/>
            Full Name : {FirstName} {MiddleName} {LastName} <br/>
            Age : {currentYear - parseInt(Brithdate.slice(0,4))}th
        </p>
        </ModalBody>
        </Modal>

        </div>
    );
}

export default PersonalData;
