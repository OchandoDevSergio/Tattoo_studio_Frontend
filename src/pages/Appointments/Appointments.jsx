import './Appointments.css'
import { userDataCheck } from "../../pages/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
    //Instanciamos Redux en modo LECTURA
    const reduxUserData = useSelector(userDataCheck);
    const navigate = useNavigate();
    
    return (
        <>
        {reduxUserData.credentials.userData.roleId === 1 && (
          <>
          <div className='subHeader'>
            <div className='subheaderButton' onClick={() => navigate("/appointmentadd")}>Make Appointment</div>
          </div>
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