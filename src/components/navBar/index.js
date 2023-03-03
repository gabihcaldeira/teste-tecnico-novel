import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { MainContext } from "../../context/mainContext";
import { TbArrowBackUp } from "react-icons/tb";
import { MdOutlineLibraryAdd } from "react-icons/md";
import "./style.css";

const NavBar = () => {
  const { isHomePage } = useContext(MainContext);

  return (
    <Navbar fixed="top" bg="light" variant="navBar">
      <Navbar.Brand href="https://www.novelconsultoria.com.br" target="_blank">
        <img
          src="logo.png"
          alt="logo novel consultoria"
          className="navBar__img"
        />
      </Navbar.Brand>
      <Nav>
        {isHomePage ? (
          <Nav.Link variant="hover__link" href="/vehicles-registration">
            Cadastrar Veículo
            <MdOutlineLibraryAdd className="navBar__icon icon--add" />
          </Nav.Link>
        ) : (
          <Nav.Link variant="hover__link" href="/">
            <TbArrowBackUp className="navBar__icon icon--arrow" />
            Voltar para Home
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
