import { Input } from "../../common/Input/Input";
import "./Profile.css";

import { useState, useEffect } from "react";
import { modifyUser } from "../../services/apiCalls";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userDataCheck, changeUser } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { searchCustomerPayment } from "../../services/apiCalls";
import { loadPaymentData, paymentDataCheck } from "../../pages/paymentSlice";


export const Profile = () => {
  //Instanciamos REDUX en modo lectura
  const reduxUserData = useSelector(userDataCheck);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      reduxUserData.credentials?.userData?.roleId !== 1 &&
      reduxUserData.credentials?.userData?.roleId !== 2 &&
      reduxUserData.credentials?.userData?.roleId !== 3
    ) {
      console.log("aqui entro??????????")
      navigate("/");
    }
  }, []);


  const [modifyUserBody, setModifyUserBody] = useState({
    id: reduxUserData?.credentials?.userData?.userId,
    name: reduxUserData.credentials?.userData?.userName,
    surnames: reduxUserData.credentials?.userData?.userSurnames,
    email: reduxUserData.credentials?.userData?.userEmail,
    phone: reduxUserData.credentials?.userData?.userPhone,
    password: "",
    role_id: reduxUserData?.credentials?.userData?.roleId,
  });

  const [modifyUserBodyError, setModifyUserBodyError] = useState({
    nameError: "",
    surnamesError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    password_repeatError: "",
  });

  const [password2, setPassword2] = useState({
    password_repeat: "",
  });

  //Código para traer los datos de pago
  const [customerId, setcustomerId] = useState(reduxUserData?.credentials?.userData?.userId);
    
    useEffect(() => {
      setcustomerId(reduxUserData?.credentials?.userData?.userId)
    }, [reduxUserData]);

    const searchPaymentData = (paymentDatas) => {
      dispatch(loadPaymentData({ paymentDataData: paymentDatas }));
    };

    const tokenPayment = reduxUserData.credentials.token;


    useEffect(() => {
      searchCustomerPayment(customerId, tokenPayment)
      .then((results) => {
        searchPaymentData(results);
      })
    }, [customerId]);

    const reduxPaymentData = useSelector(paymentDataCheck);

    useEffect(() => {
       console.log("soy reduxPaymentData", reduxPaymentData)
    }, [reduxPaymentData]);
    

  //BINDEO
  const inputHandler = (e) => {
    setModifyUserBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setPassword2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const modifyMe = () => {
    if (modifyUserBody.password == password2.password_repeat) {
      for (let check in modifyUserBody) {
        
        if (modifyUserBody[check] === "") {
          //Al encontrar un string vacío no dejo continuar, remito al return
          return;
        }
      }
      modifyUser(modifyUserBody, reduxUserData.credentials)
        .then((resultado) => {
          const newUserData = {
            token: reduxUserData?.credentials?.token,
            userData: resultado.data.data,
          };

          dispatch(changeUser({ credentials: newUserData }));
          navigate("/");
        })
        .catch((error) => console.log(error));
    } else {
      console.log("los passwords no coinciden");
    }
  };


//console.log("el lenght", reduxPaymentData.paymentDataData?.data?.data?.length)

  return (
    <div className="container-fluid profile">
        <div className="row spaceUp"/>
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className="row title">Modify your user data</div>
            </div>
            <div className="col"></div>
      </div>
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">

        {reduxUserData?.credentials?.userData?.roleId !== 3 && (
              //Este && haría referencia a un entonces
              <div className="row inputRow">
              <div className="scripting">Name</div>
              <Input
                type={"text"}
                placeholder=""
                value={modifyUserBody.name}
                name={"name"}
                className="defaultInput"
                manejadora={inputHandler}
              />
              {modifyUserBodyError.nameError}
              </div>
            )}
          <div className="row inputRow">
            <div className="scripting">e-mail</div>
            <Input
              type={"email"}
              placeholder=""
              value={modifyUserBody.email}
              name={"email"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.emailError}
          </div>
          <div className="row inputRow">
            <div className="scripting">Phone</div>
            <Input
              type={"number"}
              placeholder=""
              value={modifyUserBody.phone}
              name={"phone"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.phoneError}
          </div>
        </div>
        <div className="col-5">
            {reduxUserData?.credentials?.userData?.roleId !== 3 && (
              //Este && haría referencia a un entonces
              <div className="row inputRow">
              <div className="scripting">Surnames</div>  
              <Input
                type={"text"}
                placeholder=""
                value={modifyUserBody.surnames}
                name={"surnames"}
                className="defaultInput"
                manejadora={inputHandler}
              />
              {modifyUserBodyError.surnamesError}
            </div>
            )}
          <div className="row inputRow">
          <div className="scripting">Password</div>
            <Input
              type={"password"}
              placeholder="Introduce your new password"
              value={modifyUserBody.password}
              name={"password"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.passwordError}
          </div>
          <div className="row inputRow">
          <div className="scripting">Password</div>
            <Input
              type={"password"}
              placeholder="Repeat your new password"
              value={modifyUserBody.password_repeat}
              name={"password_repeat"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.password_repeatError}
          </div>
          <div className="row inputRow"></div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => modifyMe()}>
          Modify user data
        </div>
      </div>
      {(reduxPaymentData.paymentDataData?.data?.data == null ) ? (
            <>
            {reduxUserData?.credentials?.userData?.roleId === 2 && (
              <div className="row downRowPayment">
                <div className="buttonBody" onClick={() => navigate("/paymentadd")}>
                 Add payment data
                </div>
              </div>
               )}
              </>
      ) : (
        <>
            {reduxUserData.credentials?.userData?.roleId === 2 && (
              <div className="row downRowPayment">
                <div className="buttonBody" onClick={() => navigate("/paymentmodify")}>
                 Modify payment data
                </div>
              </div>
               )}
        </>
        )}

      <div className="row downRowRegister">
      </div>
    </div>
  );
};