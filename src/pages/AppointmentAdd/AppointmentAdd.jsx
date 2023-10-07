import './AppointmentAdd.css'
import { userDataCheck } from "../../pages/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const AppointmentAdd = () => {
    //Instanciamos Redux en modo LECTURA
    const reduxUserData = useSelector(userDataCheck);

    return (
        <>


        <div>Soy appointment add</div>
        </>
    )
}