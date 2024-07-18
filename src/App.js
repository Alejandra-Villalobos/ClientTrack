import { Route, Routes } from "react-router-dom";
import Map from "./pages/ClientsMap";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/mapa" element={<Map />} />
    </Routes>
  );
}

export default App;
