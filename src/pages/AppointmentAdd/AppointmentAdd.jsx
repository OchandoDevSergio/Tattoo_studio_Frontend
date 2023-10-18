import "./AppointmentAdd.css";
import { userDataCheck } from "../../pages/userSlice";
import { useSelector } from "react-redux";
import { Input } from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { paymentDataCheck, loadPaymentData } from "../paymentSlice";
import { searchCustomerPayment } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { bringArtists } from "../../services/apiCalls";

export const AppointmentAdd = () => {
  //Instanciamos Redux en modo LECTURA user
  const reduxUserData = useSelector(userDataCheck);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Código para traer los datos de pago
  const customerId = reduxUserData?.credentials?.userData?.userId;

  useEffect(() => {
    if (
      reduxUserData.credentials?.userData?.roleId !== 1 &&
      reduxUserData.credentials?.userData?.roleId !== 2
    ) {
      console.log("aqui entro??????????")
      navigate("/");
    }
  }, []);

  const searchPaymentData = (paymentDatas) => {
    dispatch(loadPaymentData({ paymentDataData: paymentDatas }));
  };

  const tokenPayment = reduxUserData.credentials.token;

  useEffect(() => {
    searchCustomerPayment(customerId, tokenPayment).then((results) => {
      searchPaymentData(results);
    });
  }, [customerId]);

  const reduxPaymentData = useSelector(paymentDataCheck);


  const [newAppointmentBody, setNewAppointmentBody] = useState({
    user_id: reduxUserData?.credentials?.userData?.roleId === 1 ? "" : customerId,
    artist_id: "",
    date: "",
    hour: "",
  });

  const [cardSecurity, setCardSecurity] = useState({
    safeNumber: "",
  });

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    bringArtists()
      .then((resultado) => {
        setArtists(resultado.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleArtistChange = (e) => {
    setNewAppointmentBody(
      {
        user_id: customerId,
        artist_id: e.target.value
      }
    )
  };

  //BINDEO
  const inputHandler = (e) => {
    setNewAppointmentBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputHandlerSecurity = (e) => {
    setCardSecurity((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerAppointment = () => {

    console.log(newAppointmentBody, "a verrrr");

    createAppointment(newAppointmentBody, reduxUserData.credentials);
    navigate("/appointments");
  };

  return (
    <>
      {reduxUserData?.credentials?.userData?.roleId === 1 && (
        <>
          <div className="container-fluid register">
            <div className="row upRowRegister">
              <div className="col-1"></div>
              <div className="col-5">
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the customer user identification number"
                    value={newAppointmentBody.user_id}
                    name={"user_id"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the artist identification number"
                    value={newAppointmentBody.artist_id}
                    name={"artist_id"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the appointment date"
                    value={newAppointmentBody.date}
                    name={"date"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the appointment hour"
                    value={newAppointmentBody.hour}
                    name={"hour"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row downRowRegister">
              <div className="buttonBody" onClick={() => registerAppointment()}>
                Register appointment
              </div>
            </div>
          </div>
        </>
      )}
      {reduxUserData?.credentials?.userData?.roleId === 2 && (
        <>
          <div className="container-fluid registerAppointment">
            <div className="row subheaderRow"></div>
            <div className="row upRowAppointment">
              <div className="col">
                <div className="row inputRow">
                  <select className=" artistDropdown" onChange={handleArtistChange}>
                    <option value="Select an Artist"> -- Select an Artist -- </option>
                    {artists.map((artist) => <option value={artist.id}>{artist.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the appointment date"
                    value={newAppointmentBody.date}
                    name={"date"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
                <div className="row inputRow">
                  <Input
                    type={"text"}
                    placeholder="Introduce the appointment hour"
                    value={newAppointmentBody.hour}
                    name={"hour"}
                    className="defaultInput"
                    manejadora={inputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row midRowPayment">
              <div className="row price">
                <div className="row inputRow title">
                  To make an appointment, a €20 deposit is required
                </div>
              </div>
              <div className="row paymentDataShow">
                <div className="col-2"></div>
                <div className="col">
                  <div className="row inputRow title">
                    Card Number:{" "}
                    {reduxPaymentData.paymentDataData?.data?.data?.cardNumber}
                  </div>
                  <div className="row inputRow title">
                    Vaid thru:{" "}
                    {reduxPaymentData.paymentDataData?.data?.data?.validThru}
                  </div>
                </div>
                <div className="col">
                  <div className="row inputRow">
                    <Input
                      type={"number"}
                      placeholder="Introduce the CVV/CVC number"
                      value={cardSecurity.safeNumber}
                      name={"safeNumber"}
                      className="defaultInput"
                      manejadora={inputHandlerSecurity}
                    />
                  </div>
                  <div className="row inputRow title">
                    Please check that your payment details are correct,
                    otherwise you can modify them in your user profile
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
            <div className="row downRowRegister">
              <div className="buttonBody" onClick={() => registerAppointment()}>
                Register appointment
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
