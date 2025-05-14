function Header() {
    return (
        <header>
            <h1 className="logo">Booking Manager</h1>
            <div className="auth-buttons">
                <button className="btn-outline">Login</button>
                <button className="btn-filled">Register</button>
            </div>
        </header>
    );
}

export default Header;
