import './Login.css'
import { Input } from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/apiCalls";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login, userDataCheck } from "../userSlice";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });

      //Instancia Redux modo LECTURA
  const dataUserRedux = useSelector(userDataCheck);

  //Instancia Redux en modo ESCRITURA
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputHandler = (e) => {
    //Bindeo

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginMe = () => {
    loginUser(credentials)
      .then((resultado) => {
        const userCredentials = {
          token: resultado.data.token,
          userData: jwt_decode(resultado.data.token),
        };

        dispatch(login({ credentials: userCredentials }));

        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const datosReduxUser = useSelector(userDataCheck);

  useEffect(() => {
    if (datosReduxUser.credentials?.userData?.roleId == 1) {
      navigate("/");
    } else if (datosReduxUser.credentials?.userData?.roleId == 2) {
      navigate("/");
    } else if (datosReduxUser.credentials?.userData?.roleId == 3) {
        navigate("/");
      }
  }, [datosReduxUser]);


    return (
        <div className="container-fluid login">
        {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
        {/* Este elemento pre nos sirve para renderizar en pantalla el valor del hook
        desde que se carga el componente, es una especie de utilidad para el desarrollador
        para que éste pueda comprobar el valor que tiene el hook y si está correctamente bindeado. */}
          <div className="row upRowLogin"></div>
          <div className="row middleRowLogin">
            <Input
            type={"email"}
            placeholder="Introduce your e-mail"
            value={credentials.email}
            name={"email"}
            manejadora={inputHandler}
            />
            <Input
            type={"password"}
            placeholder="Introduce your password"
            value={credentials.password}
            name={"password"}
            manejadora={inputHandler}
            />
          </div>
        <div className="row downRowLogin">
          <div className="col"></div>
          <div className="col buttons">
            <div className="buttonBody" onClick={() => loginMe()}>
              Login
            </div>
            <div className="messageBox">
              If you don't have an acount click on the button to register
            </div>
            <div className="buttonBody" onClick={() => navigate("/register")}>
              Register
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    )
}