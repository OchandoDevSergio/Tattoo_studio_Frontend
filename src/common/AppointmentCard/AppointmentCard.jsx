import "./AppointmentCard.css";
import { useDispatch } from "react-redux";
import { loadAppointmentData } from "../../pages/appointmentSlice";
import { deleteAppointment } from "../../services/apiCalls"; 
import { userDataCheck } from "../../pages/userSlice";
import { useState } from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AppointmentCard = ({ id, user_id, artist_id, date, hour, artist_name, user_name, user_surnames, user_email, user_phone, appointment, update}) => {

  const reduxUserData = useSelector(userDataCheck);
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const showMe = () => {
    dispatch(loadAppointmentData({ appointmentData: appointment }));
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


  const [appointmentId, setAppointmentId] = useState({
    id: "",
  });



  const unsetAppointment = async (appointmentId) => {
    await deleteAppointment (appointmentId, reduxUserData.credentials);
    cancelDelete();
  };


  return (
  <div>
    <Button variant="primary" className="appointmentDesign" onClick={() => showMe(appointment)}>
    <div><span className="bold">Appointment identification number:</span> {id}</div>
    <div><span className="bold">Date:</span> {date} <span className="bold">Hour:</span> {hour} <span className="bold">Artist:</span> {artist_name}</div>
    <div className="bold">Customer:</div>
    <div><span className="bold">Name:</span> {user_name} <span className="bold">Surnames:</span> {user_surnames}</div>
    <div><span className="bold">Mail:</span> {user_email} <span className="bold">Phone:</span> {user_phone}</div>
    </Button>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="modal-design"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header className="modal-design-header">
      <div><span className="bold">Appointment identification number:</span> {id}</div>
      <div><span className="bold">Date:</span> {date} <span className="bold">Hour:</span> {hour} <span className="bold">Artist:</span> {artist_name}</div>
      </Modal.Header>
      <Modal.Body className="modal-design-bodyA">
      <div className="bold">Customer:</div>
      <div><span className="bold">Name:</span> {user_name} <span className="bold">Surnames:</span> {user_surnames}</div>
      <div><span className="bold">Mail:</span> {user_email} <span className="bold">Phone:</span> {user_phone}</div>
      </Modal.Body>
      <Modal.Footer className="modal-design-footer">
      {reduxUserData.credentials.userData.roleId !== 3 && (
      <>
      <div onClick={() => showConfirm(appointment)} className="modalButton">Delete appointment</div>
      <div className="spacer"></div>
      </>
      )}
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
      <div>Are you sure you want to delete the selected appointment?</div>
      </Modal.Body>
      <Modal.Footer className="modalConfirm-design-footer">
      <div onClick={() => unsetAppointment({id})} className="modalButton">Delete appointment</div>
      <div className="spacer"></div>
      <div onClick={cancelDelete} className="modalButton">Return</div>
      </Modal.Footer>
      </Modal>
  </div>
  );   
}