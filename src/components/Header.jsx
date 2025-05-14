
import { Link } from 'react-router-dom';
import "../App.css"; 

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">Booking Manager</Link>
            <div className="auth-buttons">
                <Link to="/login" className="btn-outline">Login</Link>
                <Link to="/register" className="btn-filled">Register</Link>
            </div>
        </header>
    );
}

export default Header;
