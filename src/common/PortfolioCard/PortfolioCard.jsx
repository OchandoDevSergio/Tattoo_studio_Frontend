import "./PortfolioCard.css";
import { useDispatch } from "react-redux";
import { loadDesignData } from "../../pages/designSlice";
import { deleteTattoo } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const PortfolioCard = ({ id, artist_name, style, picture, design, update }) => {
  //Instancia de Redux para el modo de ESCRITURA
  const dispatch = useDispatch();
  //Instanciamos REDUX en modo lectura para los users
  const reduxUserData = useSelector(userDataCheck);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleClose = () => setShow(false);

  const showMe = () => {
    dispatch(loadDesignData({ designData: design }));
    setShow(true)
  };

  const showConfirm = () => {
    setShowConfirmation(true)
  };

  const cancelDelete = () => {
    update();
    setShowConfirmation(false)
    setShow(false)
  };


  const [designId, setdesignId] = useState({
    id: "",
  });



  const deleteDesign = (tattooId) => {
    deleteTattoo (tattooId, reduxUserData.credentials);
    //searchPortfolio (reduxUserData.credentials.userData.userId, reduxUserData.credentials);
    cancelDelete();
    //navigate("/portfolio")

  };

  //console.log("soy designId", designId, "soy userData", reduxUserData.credentials);



  return (
    <div><Button variant="primary" className="cardDesign" onClick={() => showMe(design)}>
      <img className="picture" src={picture} alt={id} />
      </Button>

      <Modal
      show={show}
      onHide={() => setShow(false)}
      className="modal-design"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header className="modal-design-header">
      <Modal.Title>Design Id number: {id}</Modal.Title>
      <Modal.Title>Hosting Link: {picture}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-design-body-portfolio">
      <img className="modalPicture" src={picture} alt={id} />
      </Modal.Body>
      <Modal.Footer className="modal-design-footer">
      <div onClick={() => showConfirm(design)} className="modalButton">Delete design</div>
      <div className="spacer"></div>
      <div onClick={handleClose} className="modalButton">Return</div>
      </Modal.Footer>
      </Modal>

      <Modal
      show={showConfirmation}
      onHide={() => setShowConfirmation(false)}
      className="modal-design"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header className="modalConfirm-design-header">
      <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalConfirm-design-body">
      <div>Are you sure you want to delete the selected design?</div>
      </Modal.Body>
      <Modal.Footer className="modalConfirm-design-footer">
      <div onClick={() => deleteDesign({id})} className="modalButton">Delete design</div>
      <div className="spacer"></div>
      <div onClick={cancelDelete} className="modalButton">Return</div>
      </Modal.Footer>
      </Modal>
    </div>

  );
};