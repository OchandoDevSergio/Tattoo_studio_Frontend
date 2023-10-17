import "./Appointments.css";
import { userDataCheck } from "../../pages/userSlice";
import {
  bringAllAppointments,
  bringCustomerAppointments,
  bringArtistAppointments,
  searchPortfolio,
} from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
  //Instanciamos Redux en modo LECTURA para user
  const reduxUserData = useSelector(userDataCheck);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const userId = reduxUserData?.credentials?.userData?.userId;

  useEffect(() => {
    if (appointments.length === 0) {
      switch (reduxUserData.credentials.userData.roleId) {
        case 1:

          bringAllAppointments(reduxUserData.credentials)
            .then((resultado) => {
              console.log("soy resultado", resultado)
              setAppointments(resultado.data.data);
              
            })
            .catch((error) => console.log(error));

          break;

        case 2:
          bringCustomerAppointments(userId, reduxUserData.credentials)
            .then((resultado) => {
              setAppointments(resultado.data.data);
            })
            .catch((error) => console.log(error));

          break;

        case 3:

        let artistId;

        searchPortfolio(userId, reduxUserData.credentials)
          .then((results) => {
            artistId = results.data.data[0].id

            bringArtistAppointments(artistId, reduxUserData.credentials)
            .then((resultado) => {
              setAppointments(resultado.data.data);
            })
            .catch((error) => console.log(error));

        })

          break;

        default:
          console.log("yo estoy viendo que esto funcione");
      }
    }
  }, []);

  const updateMe = () => {
    if (reduxUserData.credentials.userData.roleId === 1) {
    bringAllAppointments(reduxUserData.credentials)
    .then(
      resultado => {
        
        console.log(resultado, "esto es lo que trae para actualizar....")
        setAppointments(resultado.data.data)
      }
    )
    .catch(error => console.log(error))
  } else if (reduxUserData.credentials.userData.roleId === 2) {
    bringCustomerAppointments(userId, reduxUserData.credentials)
    .then(
      resultado => {

        console.log(resultado, "esto es lo que trae para actualizar....")
        setAppointments(resultado.data.data)
      }
    )
    .catch(error => console.log(error))
  }}

  useEffect(() => { 
    console.log("soy appointments", appointments);
   }, [appointments]);

  return (
    <>
      {reduxUserData.credentials.userData.roleId !== 3 && (
        <>
          <div className="subHeader">
            <div
              className="subheaderButton"
              onClick={() => navigate("/appointmentadd")}
            >
              Make Appointment
            </div>
          </div>
          {appointments.length > 0 ? (
            <div className="infinite-scroll-container">
              {appointments.map((appointment) => {
                return (
                  <AppointmentCard
                    // Key es una palabra reservada en React
                    key={appointment.id}
                    ////////////////////////////////
                    id={appointment.id}
                    artist_name={appointment.Artist.name}
                    user_id={appointment.User.id}
                    artist_id={appointment.Artist.id}
                    date={appointment.date}
                    hour={appointment.hour}
                    appointment={appointment}
                    user_name={appointment.User.name}
                    user_surnames={appointment.User.surnames}
                    user_email={appointment.User.email}
                    user_phone={appointment.User.phone}
                    update={updateMe}
                  />
                );
              })}
            </div>
          ) : (
            <div className="appointments">
              <div className="title">
                No designs found, click on make appointment if you want to set
                an appointment
              </div>
            </div>
          )}
        </>
      )}
      {reduxUserData.credentials.userData.roleId === 3 && (
        <>
          {appointments.length > 0 ? (
            <div className="infinite-scroll-container">
              {appointments.map((appointment) => {
                return (
                  <AppointmentCard
                    // Key es una palabra reservada en React
                    key={appointment.id}
                    ////////////////////////////////
                    id={appointment.id}
                    artist_name={appointment.Artist.name}
                    user_id={appointment.User.id}
                    artist_id={appointment.Artist.id}
                    date={appointment.date}
                    hour={appointment.hour}
                    appointment={appointment}
                    user_name={appointment.User.name}
                    user_surnames={appointment.User.surnames}
                    user_email={appointment.User.email}
                    user_phone={appointment.User.phone}
                    update={updateMe}
                  />
                );
              })}
            </div>
          ) : (
            <div className="appointments">
              <div className="title">
                No designs found, click on make appointment if you want to set
                an appointment
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
