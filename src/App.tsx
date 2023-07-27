// import TodoHome from "./TodoHome";
// import TodoSignUp from "./TodoSignUp";
// import TodoLogin from "./TodoLogin";
import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginApp from "./LoginApp";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginApp" element={<LoginApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


