import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerVehicleSchema } from "../../validators/registerVehicle.validator";
import { saveVehicle } from "../../services";
import { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import InputText from "../inputText";
import InputRadioGroup from "../inputRadioGroup";

import "./style.css";
import SuccessToast from "../toast";

const RegisterForm = () => {
  const [showToast, setShowToast] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerVehicleSchema) });

  const handleForm = (data) => {
    saveVehicle(data);
    reset();
    setShowToast(true);
  };

  return (
    <div className="page__container">
      <Form onSubmit={handleSubmit(handleForm)} className="register__form">
        <InputText
          label="Título"
          inputName="title"
          register={register}
          errorMsg={errors.title?.message}
          placeholder="Digite um título para seu veículo"
        />

        <InputText
          label="Imagem"
          inputName="image"
          register={register}
          errorMsg={errors.image?.message}
          placeholder="Digite o url de uma imagem"
        />

        <InputText
          label="Marca"
          inputName="brand"
          register={register}
          errorMsg={errors.brand?.message}
          placeholder="Digite a marca do veículo"
        />

        <InputText
          label="Modelo"
          inputName="model"
          register={register}
          errorMsg={errors.model?.message}
          placeholder="Digite o modelo do veículo"
        />

        <InputText
          label="Ano"
          inputName="year"
          register={register}
          errorMsg={errors.year?.message}
          placeholder="Digite o ano do veículo"
          type="number"
        />

        <InputText
          label="Placa"
          inputName="plates"
          register={register}
          errorMsg={errors.plates?.message}
          placeholder="Digite a placa do veículo"
        />

        <InputRadioGroup
          inputName="condition"
          labelOptions={["Excelente", "Bom", "Ruim"]}
          register={register}
          errorMsg={errors.condition?.message}
        />

        <Button type="submit" variant="orange">
          Cadastrar
          <IoMdCheckboxOutline className="btn__icon" />
        </Button>
      </Form>

      <SuccessToast show={showToast} setShow={setShowToast} type="Cadastro" />
    </div>
  );
};

export default RegisterForm;
