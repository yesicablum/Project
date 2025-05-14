import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import "../App.css";

const Register = () => {
    return (
        <div className="container">
            <Header />

            <main className="register-container">
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
            </main>

            <Footer />
        </div>
    );
};

export default Register;