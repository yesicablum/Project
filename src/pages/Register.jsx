import { useNavigate } from "react-router-dom";
import "../App.css";
import useStore from "../store/useStore";

const Register = () => {
  const addUser = useStore((state) => state.addUser);
  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: "client",
    };
    addUser(user);
    alert("Usuario registrado con éxito");
    navigate("/login");
  };
  return (
    <main className="register-container">
      <div className="register-card">
        <h2>Crear cuenta</h2>

        <form onSubmit={registerUser} className="register-form">
          <label>Nombre completo</label>
          <input type="text" name="name" placeholder="Tu nombre" required />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            required
          />

          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            required
          />

          <button type="submit" className="btn-filled">
            Registrarse
          </button>
        </form>

        <p className="login-link">
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </main>
  );
};

export default Register;
