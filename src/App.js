import { Route, Routes } from "react-router-dom";
import Map from "./pages/ClientsMap";
import Login from "./pages/Login";
import HeatMap from "./pages/HeatMap";
import ClientsTable from "./pages/ClientsTable";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/mapa" element={<Map />} />
      <Route path="/tabla" element={<ClientsTable/>} />
      <Route path="/mapa-calor" element={<HeatMap />} />
    </Routes>
  );
}

export default App;
