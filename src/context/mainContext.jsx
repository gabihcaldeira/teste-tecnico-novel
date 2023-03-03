import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({});

const MainProvider = ({ children }) => {
  const [registeredVehicles, setRegisteredVehicles] = useState([]);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [vehicleToEdit, setVehicleToEdit] = useState({});
  const [showEditToast, setShowEditToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  useEffect(() => {
    if (!localStorage.vehicles) {
      localStorage.setItem("vehicles", JSON.stringify([]));
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        registeredVehicles,
        setRegisteredVehicles,
        isHomePage,
        setIsHomePage,
        isEditModalOpen,
        setIsEditModalOpen,
        vehicleToEdit,
        setVehicleToEdit,
        showEditToast,
        setShowEditToast,
        showDeleteToast,
        setShowDeleteToast,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
