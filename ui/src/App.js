import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,  
} from "react-router-dom";
import Login from "./components/login/login";
import "./App.css";
import Register from "./components/register/register";
import Logout from "./components/home/logout/logout";
import Profile from "./components/home/profile/profile";
import Dashboard from "./components/home/menu/menu";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />   
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
