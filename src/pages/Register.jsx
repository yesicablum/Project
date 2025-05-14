import React from "react";
import "../App.css"; 

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Crear cuenta</h2>

                <form className="register-form">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Tu nombre" />

                    <label>Email</label>
                    <input type="email" placeholder="tu@email.com" />

                    <label>Contraseña</label>
                    <input type="password" placeholder="********" />

                    <label>Confirmar contraseña</label>
                    <input type="password" placeholder="********" />

                    <button type="submit" className="btn-filled">Registrarse</button>
                </form>

                <p className="login-link">
                    ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
