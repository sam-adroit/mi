import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Clients from "./pages/clients/Clients";
import ClientDetailsMb from "./pages/client-details-mb/ClientDetailsMb";
import Chats from "./pages/chats/Chats";
import ChatDetails from "./pages/chats-details-mb/ChatDetails";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/details" element={<ClientDetailsMb />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/chats/details" element={<ChatDetails />} />
    </Routes>
  );
}

export default App;
