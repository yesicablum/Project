import { Link } from "react-router-dom";
import "../App.css";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const currentUser = useStore((state) => state.currentUser);
  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCurrentUser();
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <header className="header">
      <Link to="/" className="logo">
        Booking Manager
      </Link>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            {currentUser?.role === "admin" ? (
              <>
                <Link to="/clientes" className="btn-outline">
                  Clientes
                </Link>
                <Link to="/adminservicios" className="btn-outline">
                  AdminServicios
                </Link>
                <Link to="/bookings" className="btn-outline">
                  Bookings
                </Link>
              </>
            ) : (
              <>
                <Link to="/bookings" className="btn-outline">
                  Bookings
                </Link>
                <Link to="/services" className="btn-outline">
                  Services
                </Link>
              </>
            )}
            <span className="btn-outline user-name">{currentUser?.name}</span>
            
            <button className="btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn-filled">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
