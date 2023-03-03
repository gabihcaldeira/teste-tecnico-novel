import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RegisterVehicles from "../pages/registerVehicles";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles-registration" element={<RegisterVehicles />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRoutes;
