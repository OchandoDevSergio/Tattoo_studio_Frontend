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
    Appointment identification number: {id}
    Date: {date} Hour: {hour} Artist: {artist_name}
    Customer:
    Name: {user_name} Surnames: {user_surnames}
    Mail: {user_email} Phone: {user_phone}
    </Button>




  </div>
  );   
}