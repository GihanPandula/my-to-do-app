import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginApp from "./LoginApp";
import SignUpPage from "./SignUpPage";
import AddTask from "./AddTask";
import { TodoWrapper } from "./Components/TodoWrapper";
import "./Todo.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginApp" element={<LoginApp />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/TodoWrapper" element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//<TodoWrapper  />
