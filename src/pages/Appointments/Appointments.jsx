import './Appointments.css'
import { userDataCheck } from "../../pages/userSlice";
import { bringAllAppointments } from '../../services/apiCalls';
import { useEffect, useState } from 'react';
import { AppointmentCard } from '../../common/AppointmentCard/AppointmentCard';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
    //Instanciamos Redux en modo LECTURA para user
    const reduxUserData = useSelector(userDataCheck);
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      bringAllAppointments(reduxUserData.credentials)
      .then(
        resultado => {
          setAppointments(resultado.data.data)
        }
      )
      .catch(error => console.log(error))
    }), [reduxUserData];

    console.log("soy appointments", appointments);




    return (
        <>
        {reduxUserData.credentials.userData.roleId === 1 && (
          <>
          <div className='subHeader'>
            <div className='subheaderButton' onClick={() => navigate("/appointmentadd")}>Make Appointment</div>
          </div>
          {appointments.length > 0 

           ? (<div className='infinite-scroll-container'>
             {appointments.map(
               appointment => {
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
                  />)}
              )}</div>)
            : (<div className='appointments'>
                  <div className='title'>No designs found, insert a tattoo style</div>
                  </div>)
          };
          <div>soy admin</div>
          </>
        )}
        {reduxUserData.credentials.userData.roleId === 2 && (
          <>
          <div className='subHeader'>
            <div className='subheaderButton' onClick={() => navigate("/appointmentadd")}>Make Appointment</div>
          </div>
          <div>soy cliente</div>
          </>
        )}
        {reduxUserData.credentials.userData.roleId === 3 && (
        <>
        <div className='subHeader'>
          <div className='subheaderButton' onClick={() => navigate("/appointmentadd")}>Make Appointment</div>
        </div>
        <div>soy artista</div>
        </>
        )}

        </>
    )
}