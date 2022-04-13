import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/clients/Clients";
import Chats from "./pages/chats/Chats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}

export default App;
