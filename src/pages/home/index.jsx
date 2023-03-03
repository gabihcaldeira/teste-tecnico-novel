import { useContext, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import NavBar from "../../components/navBar";
import { MainContext } from "../../context/mainContext";
import { Link } from "react-router-dom";
import { IoCarSportOutline } from "react-icons/io5";
import CardsContainer from "../../components/cardsContainer";

import "./style.css";
import SuccessToast from "../../components/toast";

const Home = () => {
  const {
    setIsHomePage,
    registeredVehicles,
    setRegisteredVehicles,
    showEditToast,
    setShowEditToast,
    showDeleteToast,
    setShowDeleteToast,
  } = useContext(MainContext);

  useEffect(() => {
    setIsHomePage(true);

    setRegisteredVehicles(JSON.parse(localStorage.vehicles));
  }, []);

  return (
    <>
      <Container fluid>
        <NavBar />

        <div className="page__title">
          <p className="display-6 title__text">Meus Veículos</p>
          <IoCarSportOutline className="title__icon" />
        </div>

        {registeredVehicles.length === 0 ? (
          <Alert variant="warning">
            <Alert.Heading>
              Oops! Você ainda não possui nenhum veículo cadastrado.
            </Alert.Heading>
            <hr></hr>
            <div className="alert__body">
              <Link to="/vehicles-registration" className="body__link">
                Cadastre um veículo
              </Link>
              <IoCarSportOutline className="body__icon" />
            </div>
          </Alert>
        ) : (
          <CardsContainer />
        )}
      </Container>

      <SuccessToast
        show={showEditToast}
        setShow={setShowEditToast}
        type="Atualização"
      />

      <SuccessToast
        show={showDeleteToast}
        setShow={setShowDeleteToast}
        type="Exclusão"
      />
    </>
  );
};

export default Home;
