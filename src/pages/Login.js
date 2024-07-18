import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import meeting2 from "../assets/meeting-alt.jpg";
import { user } from "../mock/users";
import { Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //Login success
    if (username === user.username && password === user.password) {
      localStorage.setItem("username", JSON.stringify(user));
      navigate("/mapa");
    } 
    //Fields empty
    else if (username === "" || password === "") {
      toast.error("Por favor, rellene todos los campos");
    } 
    //Incorrect user or password
    else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="bg-teal-light w-screen h-screen flex items-center justify-center">
      <ToastContainer />

      <div className="sm:flex lg:w-7/12 xl:w-8/12 md:w-1/2 w-full h-full absolute z-40 md:relative">
        <img src={meeting2} alt="Meeting" className="bg-cover h-full md:opacity-30 opacity-15" />
      </div>

      <div className="flex flex-col items-center justify-evenly lg:w-5/12 xl:w-4/12 md:w-1/2 w-full shadow-l h-full absolute z-50 md:relative">
        <div className="flex flex-col items-center justify-center gap-4 w-10/12">
          <img src={logo} alt="Logo" className="h-20 hidden sm:block" />
          <p className="text-white text-4xl font-semibold text-center">Inicio de sesión</p>
        </div>

        <form className="flex flex-col items-center justify-center gap-4 w-8/12">
          <Input
            placeholder="Usuario"
            className="my-2 w-full py-3 border-2 border-teal-dark"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="Contraseña"
            className="my-2 w-full py-3 border-2 border-teal-dark"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => handleLogin(e)}
            className="bg-blue-dark hover:bg-blue-950 text-white font-bold text-xl rounded-lg my-4 w-full py-3"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
