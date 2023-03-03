export const saveVehicle = (vehicleData) => {
  let vehiclesArray = JSON.parse(localStorage.vehicles);
  vehiclesArray.push(vehicleData);

  localStorage.vehicles = JSON.stringify(vehiclesArray);
};

export const getVehicles = () => {
  return JSON.parse(localStorage.vehicles);
};

export const removeVehicle = (vehicleIndex) => {
  let vehiclesArray = getVehicles();

  vehiclesArray.splice(vehicleIndex, 1);

  localStorage.vehicles = JSON.stringify(vehiclesArray);
};

export const editVehicle = (vehicleIndex, vehicleData) => {
  let vehiclesArray = getVehicles();

  vehiclesArray[vehicleIndex] = { ...vehicleData };

  localStorage.vehicles = JSON.stringify(vehiclesArray);
};
