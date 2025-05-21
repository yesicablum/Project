import React, { useState } from "react";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const users = useStore((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setError("");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main className="register-container">
      <div className="register-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="tu@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn-filled">
            Ingresar
          </button>
        </form>
        <p className="login-link">
          ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
