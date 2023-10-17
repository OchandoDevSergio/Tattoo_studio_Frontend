import './PaymentModify.css'
import { Input } from '../../common/Input/Input';
import { useState, useEffect } from "react";
import { modifyPaymentData } from "../../services/apiCalls";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { paymentDataCheck, changePaymentData } from "../paymentSlice";
import { userDataCheck} from "../userSlice";
import { useNavigate } from "react-router-dom";

export const PaymentModify = () => {
  //Instanciamos REDUX en modo lectura de los payment datas y los users
  const reduxPaymentData = useSelector(paymentDataCheck);
  const reduxUserData = useSelector(userDataCheck);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (reduxUserData.credentials?.userData?.roleId !== 2) {
      navigate("/");
    }
  }, []);

console.log ("soy reduxPaymentData en paymentmodify", reduxPaymentData);

  const [modifyPaymentDataBody, setmodifyPaymentDataBody] = useState({
    id: reduxPaymentData.paymentDataData?.data?.data?.id,
    cardNumber: reduxPaymentData.paymentDataData?.data?.data?.cardNumber,
    validThru: reduxPaymentData.paymentDataData?.data?.data?.validThru,
    user_id: reduxPaymentData.paymentDataData?.data?.data?.user_id,
  });

 //console.log("soy validthru", reduxPaymentData.paymentDataData.data.data);

  const [modifyPaymentDataBodyError, setmodifyPaymentDataBodyError] = useState({
    cardNumberError: "",
    validThruError: "",
  });

  //BINDEO
  const inputHandler = (e) => {
    setmodifyPaymentDataBody((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  const tokenPayment = reduxUserData.credentials.token;

  const modifyThisPaymentData = () => {

    modifyPaymentData(modifyPaymentDataBody, tokenPayment)
    .then((resultado) => {
      const newPaymentDataData = {
        paymentDataData: resultado.data,
      };

      dispatch(changePaymentData({ paymentDataData: newPaymentDataData }));
      console.log("soy paymentdatadata al final de modify", reduxPaymentData.paymentDataData)
      navigate("/profile");
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log("soy modifyPaymentDataBody", modifyPaymentDataBody);
  }, [modifyPaymentDataBody]);

    return (
        <div className="container-fluid profile">
        <div className="row spaceUp"/>
        <div className="row">
            <div className="col"></div>
            <div className="col">
            <div className="row title">Modify your payment data</div>
            </div>
            <div className="col"></div>
      </div>
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder=""
              value={modifyPaymentDataBody.cardNumber}
              name={"cardNumber"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyPaymentDataBodyError.cardNumberError}
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder=""
              value={modifyPaymentDataBody.validThru}
              name={"validThru"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyPaymentDataBodyError.validThruError}
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => modifyThisPaymentData()}>
          Modify payment data
        </div>
      </div>
      <div className="row downRowRegister">
      </div>
    </div>
  );
};