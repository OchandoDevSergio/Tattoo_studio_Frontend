import { Input } from "../../common/Input/Input";
import "./Register.css";

import { useState, useEffect } from "react";
import { registerUser } from "../../services/apiCalls";
import { userDataCheck } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Register = () => {
  const [registerBody, setRegisterBody] = useState({
    role_id: 2,
    name: "",
    surnames: "",
    email: "",
    phone: "",
    password: "",
  });

  const [password2, setPassword2] = useState({
    password_repeat: "",
  });

  //BINDEO
  const inputHandler = (e) => {
    setRegisterBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setPassword2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerMe = () => {
    if (registerBody.password == password2.password_repeat) {
      registerUser(registerBody)
        .then((resultado) => {
          console.log(resultado);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("los passwords no coinciden");
    }



    };

  const datosReduxUser = useSelector(userDataCheck);
  const navigate = useNavigate();
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
    <div className="container-fluid register">
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce your name"
              value={registerBody.name}
              name={"name"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"email"}
              placeholder="Introduce your e-mail"
              value={registerBody.email}
              name={"email"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"number"}
              placeholder="Introduce your phone number"
              value={registerBody.phone}
              name={"phone"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-5">
        <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce your surnames"
              value={registerBody.surnames}
              name={"surnames"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Introduce your password"
              value={registerBody.password}
              name={"password"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Repeat your password"
              value={registerBody.password_repeat}
              name={"password_repeat"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow"></div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => registerMe()}>
          Register
        </div>
      </div>
    </div>
  );
};
