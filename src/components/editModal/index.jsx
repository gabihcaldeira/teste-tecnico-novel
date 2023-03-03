import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MainContext } from "../../context/mainContext";
import { editVehicle } from "../../services";
import { registerVehicleSchema } from "../../validators/registerVehicle.validator";
import InputRadioGroup from "../inputRadioGroup";
import InputText from "../inputText";
import { FiSave } from "react-icons/fi";

import "./style.css";

const EditVehicleModal = () => {
  const {
    isEditModalOpen,
    setIsEditModalOpen,
    vehicleToEdit,
    setShowEditToast,
  } = useContext(MainContext);

  const handleClose = () => setIsEditModalOpen(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerVehicleSchema) });

  const handleSave = (newVehicleData) => {
    editVehicle(vehicleToEdit.vehicleIndex, newVehicleData);
    setIsEditModalOpen(false);
    setShowEditToast(true);

    setTimeout(() => {
      window.location.reload();
    }, 2700);
  };

  return (
    <Modal show={isEditModalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Veículo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(handleSave)} className="edit__form">
          <InputText
            label="Título"
            inputName="title"
            register={register}
            errorMsg={errors.title?.message}
            placeholder="Digite um título para seu veículo"
            initialValue={vehicleToEdit.title}
          />

          <InputText
            label="Imagem"
            inputName="image"
            register={register}
            errorMsg={errors.image?.message}
            placeholder="Digite o url de uma imagem"
            initialValue={vehicleToEdit.image}
          />

          <InputText
            label="Marca"
            inputName="brand"
            register={register}
            errorMsg={errors.brand?.message}
            placeholder="Digite a marca do veículo"
            initialValue={vehicleToEdit.brand}
          />

          <InputText
            label="Modelo"
            inputName="model"
            register={register}
            errorMsg={errors.model?.message}
            placeholder="Digite o modelo do veículo"
            initialValue={vehicleToEdit.model}
          />

          <InputText
            label="Ano"
            inputName="year"
            register={register}
            errorMsg={errors.year?.message}
            placeholder="Digite o ano do veículo"
            type="number"
            initialValue={vehicleToEdit.year}
          />

          <InputText
            label="Placa"
            inputName="plates"
            register={register}
            errorMsg={errors.plates?.message}
            placeholder="Digite a placa do veículo"
            initialValue={vehicleToEdit.plates}
          />

          <InputRadioGroup
            inputName="condition"
            labelOptions={["Excelente", "Bom", "Ruim"]}
            register={register}
            errorMsg={errors.condition?.message}
            initialChecked={vehicleToEdit.condition}
          />
          <hr></hr>
          <Button type="submit" variant="primary">
            Salvar
            <FiSave className="btn__save" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditVehicleModal;
