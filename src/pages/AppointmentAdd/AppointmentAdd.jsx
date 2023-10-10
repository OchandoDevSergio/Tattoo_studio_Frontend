import './AppointmentAdd.css'
import { userDataCheck } from "../../pages/userSlice";
import { useSelector } from "react-redux";
import { Input } from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../services/apiCalls";
import { useEffect, useState } from 'react';
import { paymentDataCheck } from "../paymentSlice";

export const AppointmentAdd = () => {
    //Instanciamos Redux en modo LECTURA
    const reduxUserData = useSelector(userDataCheck);
    const navigate = useNavigate();
    const [newAppointmentBody, setNewAppointmentBody] = useState({
        user_id: "",
        artist_id: "",
        date: "",
        hour: "",
        });
    
    const [cardSecurity, setCardSecurity] = useState({
        safeNumber:""
          });

    const reduxPaymentData = useSelector(paymentDataCheck);

    //BINDEO
    const inputHandler = (e) => {
        setNewAppointmentBody((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const inputHandlerSecurity = (e) => {
      setCardSecurity((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

    const registerAppointment = () => {

        
        createAppointment(newAppointmentBody, reduxUserData.credentials)
        };
      
    return (
        <>
        {reduxUserData.credentials.userData.roleId === 1 && (
            <>
            <div className="container-fluid register">
              <div className="row upRowRegister">
                <div className="col-1"></div>
                <div className="col-5">
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the customer user identification number"
                    value={newAppointmentBody.user_id}
                    name={"user_id"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the artist identification number"
                    value={newAppointmentBody.artist_id}
                    name={"artist_id"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the appointment date"
                    value={newAppointmentBody.date}
                    name={"date"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the appointment hour"
                    value={newAppointmentBody.hour}
                    name={"hour"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
              <div className="row downRowRegister">
                <div className="buttonBody" onClick={() => registerAppointment()}>
                Register appointment
                </div>
              </div>
            </div>
            </>
        )}
        {reduxUserData.credentials.userData.roleId === 2 && (
            <>
            <div className="container-fluid register">
              <div className="row upRowRegister">
                <div className="col-1"></div>
                <div className="col-5">
                  <div className="row inputRow">
                    <Input
                    type={"number"}
                    placeholder="Introduce the artist identification number"
                    value={newAppointmentBody.artist_id}
                    name={"artist_id"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the appointment date"
                    value={newAppointmentBody.date}
                    name={"date"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"text"}
                    placeholder="Introduce the appointment hour"
                    value={newAppointmentBody.hour}
                    name={"hour"}
                    className="defaultInput"
                    manejadora={inputHandler}
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="row inputRow">
                  Card Number: {reduxPaymentData.paymentDataData?.data?.data?.cardNumber}
                  </div>
                  <div className="row inputRow">
                  Vaid thru: {reduxPaymentData.paymentDataData?.data?.data?.validThru}
                  </div>
                  <div className="row inputRow">
                    <Input
                    type={"number"}
                    placeholder="Introduce the safe number"
                    value= {cardSecurity.safeNumber}
                    name={"safeNumber"}
                    className="defaultInput"
                    manejadora={inputHandlerSecurity}
                    />
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
              <div className="row downRowRegister">
                <div className="buttonBody" onClick={() => registerAppointment()}>
                Register appointment
                </div>
              </div>
            </div>
            <div>soy customer</div>
            </>
        )}
        </>
    )
}