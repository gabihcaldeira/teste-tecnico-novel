import { Toast, ToastContainer } from "react-bootstrap";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import "./style.css";

const SuccessToast = ({ show, setShow, type }) => {
  return (
    <ToastContainer position="middle-center">
      <Toast show={show} autohide delay={2500} onClose={() => setShow(false)}>
        <Toast.Body>
          <p className="toast-body__text">{type} realizado com sucesso!</p>
          <IoCheckmarkDoneSharp className="toast__icon" />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SuccessToast;
