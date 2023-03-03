import { Form } from "react-bootstrap";
import "./style.css";

const InputRadioGroup = ({
  register,
  labelOptions,
  inputName,
  errorMsg,
  type = "radio",
  initialChecked,
}) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={inputName}>Condição do veículo</Form.Label>
      <br></br>
      {labelOptions.map((option, index) => (
        <Form.Check
          key={index}
          {...register(`${inputName}`)}
          inline
          type={type}
          id={`${inputName}-${option}`}
          label={`${option}`}
          value={`${option}`}
          defaultChecked={option === initialChecked}
        />
      ))}

      <Form.Text id={`${inputName}-error`}>{errorMsg}</Form.Text>
    </Form.Group>
  );
};

export default InputRadioGroup;
