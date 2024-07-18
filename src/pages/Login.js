import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import meeting from "../assets/meeting.png";
import { user } from "../mock/users";
import { Divider, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";

// <a href="https://www.freepik.com/free-vector/isometric-recruiting-icon-with-male-recruiter-communicating-with-two-job-candidates-round-office-table-3d-vector-illustration_23182633.htm#query=meeting%20png&position=1&from_view=keyword&track=ais_user&uuid=380dbd90-c442-4e82-87e2-482f7fc475a3">Image by macrovector</a> on Freepik

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === user.username && password === user.password) {
      toast.success("¡Inicio de sesión exitoso!");
    } else if (username === "" || password === "") {
      toast.error("Por favor, rellene todos los campos");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="bg-teal-dark w-screen h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-teal-light p-8 rounded-lg shadow-md flex items-center gap-2 w-8/12">
        <div className="flex flex-col justify-center items-center w-1/2">
          <img src={logo} alt="Logo" className="h-24" />
          <img src={meeting} alt="Meeting" className="h-72" />
        </div>
        <Divider type="vertical" className="bg-white h-96" />
        <form className="flex flex-col justify-center items-center gap-8 w-1/2">
          <p className="text-white text-4xl font-semibold">¡Bienvenido!</p>

          <Input
            size="large"
            placeholder="Usuario"
            className="my-2 w-10/12"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            size="large"
            placeholder="Contraseña"
            className="my-2 w-10/12 -mt-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => handleLogin(e)}
            className="bg-blue-dark text-white font-bold text-xl rounded-lg my-4 w-10/12 py-3"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
