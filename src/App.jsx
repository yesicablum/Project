import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bookings from "./pages/Bookings";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import AdminServices from "./pages/AdminServices";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/adminservicios" element={<AdminServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
