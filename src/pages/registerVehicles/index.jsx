import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import RegisterForm from "../../components/form";
import NavBar from "../../components/navBar";
import { MainContext } from "../../context/mainContext";
import "./style.css";

const RegisterVehicles = () => {
  const { setIsHomePage } = useContext(MainContext);

  useEffect(() => {
    setIsHomePage(false);
  }, []);

  return (
    <Container fluid>
      <NavBar />

      <h3 className="display-6 title">Cadastro de veículos</h3>

      <RegisterForm />
    </Container>
  );
};

export default RegisterVehicles;
