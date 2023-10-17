import './PaymentAdd.css'
import { Input } from "../../common/Input/Input";
import { useState, useEffect } from "react";
import { createNewPaymentData } from "../../services/apiCalls";
import { userDataCheck } from "../userSlice";
import { useDispatch } from "react-redux";
import { paymentDataCheck, changePaymentData } from "../paymentSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PaymentAdd = () => {
    const reduxUserData = useSelector(userDataCheck);
    //const datosReduxUser = useSelector(userDataCheck);
    const reduxPaymentData = useSelector(paymentDataCheck);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
      if (reduxUserData.credentials?.userData?.roleId !== 2) {
        navigate("/");
      }
    }, []);

  const [registerPaymentBody, setRegisterPaymentBody] = useState({
    cardNumber: "",
    validThru: "",
    user_id: reduxUserData.credentials?.userData?.userId,
  });

  //console.log ("soy reduxUserData en payment add", reduxUserData);

  //BINDEO
  const inputHandler = (e) => {
    setRegisterPaymentBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // modifyUser(modifyUserBody, reduxUserData.credentials)
  // .then((resultado) => {
  //   const newUserData = {
  //     token: reduxUserData?.credentials?.token,
  //     userData: resultado.data.data,
  //   };

  const registerPaymentData = () => {
    createNewPaymentData(registerPaymentBody, reduxUserData.credentials)
        .then((resultado) => {
          const newPaymentDataData = {
            paymentDataData: resultado.data,
          };
    
          dispatch(changePaymentData({ paymentDataData: newPaymentDataData }));
          console.log("soy paymentdatadata al final de modify", reduxPaymentData.paymentDataData)
          navigate("/");
        })
        .catch((error) => console.log(error));
    };



  useEffect(() => {
    if (reduxUserData.credentials?.userData?.roleId !== 2) {
      navigate("/");
    }
  }, [reduxUserData]);

  return (
    <div className="container-fluid register">
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce your card number"
              value={registerPaymentBody.cardNumber}
              name={"cardNumber"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce your card valid thru"
              value={registerPaymentBody.validThru}
              name={"validThru"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => registerPaymentData()}>
          Register payment data
        </div>
      </div>
    </div>
  );
};
