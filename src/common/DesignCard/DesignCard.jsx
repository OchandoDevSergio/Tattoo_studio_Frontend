import "./DesignCard.css";
//import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadDesignData } from "../../pages/designSlice";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const DesignCard = ({ id, artist_name, style, picture, design }) => {
  //Instancia de Redux para el modo de ESCRITURA
  const dispatch = useDispatch();
  //Instancia de Navigate para React Router Dom y movimientos por la app
  //const navigate = useNavigate();

  const [show, setShow] = useState(false);
    
  const showMe = () => {
    dispatch(loadDesignData({ designData: design }));
    setShow(true)
  };



  return (
    <div><Button variant="primary" className="cardDesign" onClick={() => showMe(design)}>
       Artist: {artist_name} 
      <img className="picture" src={picture} alt={id} />
      <div>Style: {style}</div>
      </Button>

      <Modal
      show={show}
      onHide={() => setShow(false)}
      className="modal-design"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton className="modal-design-header">
      <Modal.Title>Artist: {artist_name}</Modal.Title>
      <Modal.Title className="spacer"></Modal.Title>
      <Modal.Title>Style: {style}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-design-body">
      <img className="modalPicture" src={picture} alt={id} />
      </Modal.Body>
      </Modal>
    </div>

  );
};

