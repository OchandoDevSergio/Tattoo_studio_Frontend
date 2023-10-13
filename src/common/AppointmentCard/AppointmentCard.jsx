import "./AppointmentCard.css";
import { useDispatch } from "react-redux";
import { loadDesignData } from "../../pages/designSlice";
import { deleteTattoo } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { useState } from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AppointmentCard = ({ id, user_id, artist_id, date, hour, artist_name, user_name, user_surnames, user_email, user_phone}) => {


  return (
  <div>
    <Button variant="primary" className="appointmentDesign" onClick={() => showMe(appointment)}>
    <div><span className="bold">Appointment identification number:</span> {id}</div>
    <div><span className="bold">Date:</span> {date} <span className="bold">Hour:</span> {hour} <span className="bold">Artist:</span> {artist_name}</div>
    <div className="bold">Customer:</div>
    <div><span className="bold">Name:</span> {user_name} <span className="bold">Surnames:</span> {user_surnames}</div>
    <div><span className="bold">Mail:</span> {user_email} <span className="bold">Phone:</span> {user_phone}</div>
    </Button>




  </div>
  );   
}