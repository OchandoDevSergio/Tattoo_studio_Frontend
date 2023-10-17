import "./UserCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { registerArtist } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { Input } from "../Input/Input";
import { useSelector } from "react-redux";


export const UserCard = ({ id, role_id, name, surnames, phone, password, user, update}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //Instanciamos REDUX en modo lectura para los users
  const reduxUserData = useSelector(userDataCheck);
  const showMe = () => {
    //dispatch(loadDesignData({ designData: design }));
    setShow(true)
    console.log("soy artistRegisterBody", artistRegisterBody)
  };

  const [artistRegisterBody, setArtistRegisterBody] = useState({
    user_id: user.id,
    name: user.name,
    portfolio: "",
  });

  //BINDEO
  const inputHandler = (e) => {
    setArtistRegisterBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))};

  const addArtistProfile = () => {
    registerArtist(artistRegisterBody, reduxUserData.credentials);
    handleClose();
  };




    return (
    <>
      <div variant="primary" className="userDesign">
      <div><span className="bold">User identification number:</span> {id} <span className="bold">Role:</span> 
      {role_id === 1 && (<span>Admin</span>)}
      {role_id === 2 && (<span>Customer</span>)}
      {role_id === 3 && (<span>Artist</span>)}
      </div>
      <div> <span className="bold">Name:</span> {name} <span className="bold">Surnames:</span> {surnames}</div>
      <div><span className="bold">Phone:</span> {phone}</div>
      {role_id === 2 && (
      <>
        <Button variant="primary" className="makeArtist" onClick={() => showMe(user)}>Add Artist profile to this user</Button>
      
        <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal-design"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header className="modal-design-header">
        <Modal.Title>Add artist profile to {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-design-body">
        <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce the artist portfolio URL"
              value={artistRegisterBody.portfolio}
              name={"portfolio"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-design-footer">
        <div onClick={() => addArtistProfile()} className="modalButton">Add artist profile</div>
        <div className="spacer"></div>
        <div onClick={handleClose} className="modalButton">Return</div>
        </Modal.Footer>
        </Modal>
      </>
      )}
      </div>
  
      
    </>
    ); } 