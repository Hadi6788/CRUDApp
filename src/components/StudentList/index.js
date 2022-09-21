// import React from "react";
// const StudentList =()=>{
 
//   componentDidMount=()=> {
//     axios.get('http://localhost:4000/students/')
//       .then(res => {
//         this.setState({
//           students: res.data
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//   DataTable=()=> {
//     return this.state.students.map((res, i) => {
//       return <StudentTableRow obj={res} key={i} />;
//     });
//     return (
//       <div className="table-wrapper">
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Roll No</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.DataTable()}
//         </tbody>
//       </Table>
//     </div>
//     );
    

// }
// export default StudentList

import React, { useEffect} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from "../StudentTableRow";
import { useState } from "react";
const StudentList=()=> {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     students: []
  //   };
  // }

  // const [students, setStudents] =useState([]);
  const [data ,setData] = useState([]);
//   useEffect(()=>{
//     axios.get('http://localhost:4000/students/')
//       .then(res => {
//         setStudents({
//           students: res.data
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       })
// },[]);

useEffect(()=>{
  const fetchData = async ()=> {
          try{
              const res = await axios.get('http://localhost:4000/students/');
             
              setData(res.data);
              // setFilterd(res.data);
          }catch(err){
              throw new Error(err);
          }
           };
        fetchData(); 
},[]);

  // componentDidMount=()=> {
  //   axios.get('http://localhost:4000/students/')
  //     .then(res => {
  //       this.setState({
  //         students: res.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }
  // DataTable=()=> {
  //   return students.map((res, i) => {
  //     return <StudentTableRow obj={res} key={i} />;
  //   });
  // }


    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {DataTable()} */}
          {data.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    })
    }
        </tbody>
      </Table>
    </div>);
  
}

export default  StudentList;