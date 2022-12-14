import axios from "axios";
import React, { useState } from "react";
import "../User/User.css";

const Login = () => {
  const [correo, setCorreo] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState("");

  const postLogin = async () => {
    const response = await axios.post(
      "https://c13-app-back.up.railway.app/api/auth/login"
    );
    setLogin(response.data.login);
  };

  

  return (
    <div className="forlo">
    <form className="formulario-login" onSubmit={postLogin}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="correo"
        onChange={(e) => setCorreo(e.target.value)}
        value={correo}
      />
      <input
        type="password"
        placeholder="contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <a href="/">Recuperar contraseña</a>
      <button type="submit">Ingresar</button>
    </form>
    </div>
  );
};

export default Login;
