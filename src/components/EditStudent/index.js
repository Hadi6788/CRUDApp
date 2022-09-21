import React, { useState,useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditStudent =(props)=> {
  // constructor(props) {
  //   super(props)

    // State
  //   this.state = {
  //     name: '',
  //     email: '',
  //     rollno: ''
  //   }
  // }
  // const { id } = useParams();
  let navigate = useNavigate();
  let { id } = useParams();
  const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [rollno , setRollno] = useState("");
// useEffect(()=>{
//     axios.get('http://localhost:4000/students/edit-student/${id}/' )
//       .then(res => {
     
//         setName('');
//         setEmail('');
//         setRollno('');
        
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//     },[id]);
// useEffect(() =>{
//   axios.get(`http://localhost:4000/students/edit-student/${id}`)
//     .then(res => {
//       setName('');
//               setEmail('');
//               setRollno('');
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// })
 
 const onSubmit=(e)=> {
    e.preventDefault()
    const studentObject = {
      name: name,
      email: email,
      rollno: rollno
    };
    axios.put('http://localhost:4000/students/update-student/' + id, studentObject)
    .then((res) => {
      console.log(res.data)
      
      
      console.log('Student successfully updated')
    }).catch((error) => {
      console.log(error)
    })
  // Redirect to Student List 
  // props.history.push('/student-list')
  navigate('/student-list');

  }

 
    return (<div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
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
          Update Student
        </Button>
      </Form>
    </div>);
  }


export default  EditStudent;