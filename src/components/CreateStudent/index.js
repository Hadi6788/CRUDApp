import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from 'axios';
const CreateStudent =()=>{
const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [rollno , setRollno] = useState("");
const onSubmitData=(e)=> {
    e.preventDefault()
    const studentObject = {
      name: name,
      email: email,
      rollno: rollno
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));
   setName('')
   setEmail('')
   setRollno('')
   
  }
    return (
      
        <div class="form-wrapper">
        <Form onSubmit={onSubmitData}>
          <Form.Group controlId="Name" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" value={rollno} onChange={(e)=>setRollno(e.target.value)}/>
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>

       
      </div>
    );

}
export default CreateStudent