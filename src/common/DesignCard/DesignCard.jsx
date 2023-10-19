import "./DesignCard.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DesignCard = ({ id, artist_name, style, picture, design }) => {
  const [show, setShow] = useState(false);

  const showMe = () => {
    setShow(true);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="cardDesignTattoo"
        onClick={() => showMe(design)}
      >
        Artist: {artist_name}
        <img className="pictureTattoo" src={picture} alt={id} />
        <div>Style: {style}</div>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal-design"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="modalConfirm-design-header">
          <Modal.Title>Artist: {artist_name}</Modal.Title>
          <Modal.Title>Style: {style}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-design-body-tattoo">
          <img className="modalPicture" src={picture} alt={id} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
