import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CiImageOff, CiEdit, CiTrash } from "react-icons/ci";
import { MainContext } from "../../context/mainContext";
import { removeVehicle } from "../../services";

import "./style.css";

const VehicleCard = ({
  title,
  image,
  condition,
  brand,
  model,
  year,
  plates,
  vehicleIndex,
}) => {
  const { setIsEditModalOpen, setVehicleToEdit, setShowDeleteToast } =
    useContext(MainContext);

  const handleDelete = () => {
    removeVehicle(vehicleIndex);
    setShowDeleteToast(true);
    setTimeout(() => {
      window.location.reload();
    }, 2600);
  };

  const handleEdit = () => {
    setVehicleToEdit({
      title,
      image,
      condition,
      brand,
      model,
      year,
      plates,
      vehicleIndex,
    });
    setIsEditModalOpen(true);
  };

  return (
    <Card>
      {image === "" ? (
        <Card.Header>
          <CiImageOff className="card__noImg" />
        </Card.Header>
      ) : (
        <Card.Header>
          <Card.Img src={image} alt={`imagem para ${title}`} />
        </Card.Header>
      )}
      <Card.ImgOverlay>
        <span className={`condition__tag tag--${condition}`}>{condition}</span>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
          {brand}, {model}
        </Card.Subtitle>
        <Card.Text>Ano: {year}</Card.Text>
        <Card.Text>Placa: {plates}</Card.Text>
      </Card.Body>
      <Card.Body className="card__buttons">
        <Button variant="edit" size="sm" onClick={handleEdit}>
          <CiEdit className="btn__icon" />
          Editar
        </Button>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          <CiTrash className="btn__icon" />
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
