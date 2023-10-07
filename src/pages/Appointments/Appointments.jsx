import './Appointments.css'
import { userDataCheck } from "../../pages/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const Appointments = () => {
    //Instanciamos Redux en modo LECTURA
    const reduxUserData = useSelector(userDataCheck);

    return (
        <>
        {reduxUserData.credentials.userData.roleId !== 3 && (
          <div className='subHeader'>
          <div className='subheaderButton' onClick={() => navigate("/appointmentadd")}>Make Appointment</div>
          </div>
        )}

        <div>Soy appointments</div>
        </>
    )
}