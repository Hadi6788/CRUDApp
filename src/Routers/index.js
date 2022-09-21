import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import CreateStudent from "../components/CreateStudent";
import StudentList from "../components/StudentList";

const Routers = () => {
  return (
    <div>
      <Router>
        <NAVBAR />
        <Routes>
          <Route exact path="/" element={<HOME/>}></Route>
          <Route exact path="/about" element={<ABOUT />}></Route>
        </Routes>

        <FOOTER />
      </Router>
    </div>
  );
};

export default Routers;