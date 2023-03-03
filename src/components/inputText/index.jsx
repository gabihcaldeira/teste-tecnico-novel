import { FloatingLabel, Form } from "react-bootstrap";
import "./style.css";

const InputText = ({
  label,
  inputName,
  register,
  errorMsg,
  placeholder,
  type = "text",
  initialValue,
}) => {
  return (
    <FloatingLabel controlId={inputName} label={label}>
      <Form.Control
        {...register(`${inputName}`)}
        type={type}
        placeholder={placeholder}
        aria-errormessage={`${inputName}-error`}
        defaultValue={initialValue}
      />
      <Form.Text id={`${inputName}-error`}>{errorMsg}</Form.Text>
    </FloatingLabel>
  );
};

export default InputText;
