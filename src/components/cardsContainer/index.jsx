import { useContext } from "react";
import VehicleCard from "../vehicleCard";
import { MainContext } from "../../context/mainContext";

import "./style.css";
import EditVehicleModal from "../editModal";

const CardsContainer = () => {
  const { registeredVehicles } = useContext(MainContext);

  return (
    <>
      <div className="cards__container">
        {registeredVehicles.map(
          ({ title, image, condition, brand, model, year, plates }, index) => (
            <VehicleCard
              key={index}
              title={title}
              image={image}
              condition={condition}
              brand={brand}
              model={model}
              year={year}
              plates={plates}
              vehicleIndex={index}
            />
          )
        )}
      </div>

      <EditVehicleModal />
    </>
  );
};

export default CardsContainer;
