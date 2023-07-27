import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginApp from "./LoginApp";
import SignUpPage from "./SignUpPage";
import AddTask from "./AddTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginApp" element={<LoginApp />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/AddTask" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
