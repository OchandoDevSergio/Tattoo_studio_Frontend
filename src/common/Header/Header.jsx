import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userDataCheck, userout } from "../../pages/userSlice";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { searchCriteria } from "../../services/apiCalls";
import { loadDesignData } from "../../pages/designSlice";
//import { designDataCheck } from "../../pages/designSlice";

export const Header = () => {
    //Instanciamos useNavigate dentro de navigate para poder navegar
    const navigate = useNavigate();

    //Instanciamos Redux en modo lectura
    const reduxUserData = useSelector(userDataCheck);
    //Instanciamos Redux en modo ESCRITURA
    const dispatch = useDispatch();

    

    const [criteria, setCriteria] = useState("");

    const logOut = () => {
      dispatch(userout({ credentials: {} }));
      navigate("/");
    };

    const searchDesigns = (designs) => {
      dispatch(loadDesignData({ designData: designs }));
    };

    const inputHandler = (e) => {
      setCriteria(e.target.value);
    };

    useEffect(() => {
      //console.log("soy criteria", criteria);
      if (criteria !== "") {
        const search = setTimeout(() => {
          searchCriteria(criteria)
            .then((results) => {
              searchDesigns(results);
              console.log(results);
            })
            .catch((error) => console.log(error));
        }, 375);
  
        return () => clearTimeout(search);
      } else if (criteria == ""){
        searchCriteria(criteria)
        .then((results) => {
          searchDesigns(results);})
      }
    }, [criteria]);

    // useEffect(() => {
    //   console.log("soy criteria", criteria);
    // }, [criteria]);

    return (
      <div className="header">

          <img className="homeButton" src="https://i.ibb.co/0j326Sc/logo-5.jpg" alt="logo" onClick={() => navigate("/")}/>
          <div className="headerSpace">
          <Input
           type={"text"}
           placeholder="Search tattoos"
           value={criteria}
           name={"criteria"}
           className="defaultInput"
           manejadora={inputHandler}
          />
          </div>
        {reduxUserData.credentials.token ? (
        <>
          <div className="buttonsDiv">
          {reduxUserData.credentials.userData.roleId === 1 && (
              //Este && haría referencia a un entonces
              <div className="buttonClicker" onClick={() => navigate("/admin")}>
                ADMIN
              </div>
            )}
          {reduxUserData.credentials.userData.roleId === 3 && (
              //Este && haría referencia a un entonces
              <div className="buttonClicker" onClick={() => navigate("/portfolio")}>
                PORTFOLIO
              </div>
            )}
            <div className="buttonClicker" onClick={() => navigate("/tattoos")}>
              TATTOOS
              </div>
            <div className="buttonClicker" onClick={() => navigate("/appointments")}>
              APPOINTMENTS
            </div>
            <div className="buttonClicker" onClick={() => navigate("/profile")}>
              {reduxUserData.credentials?.userData?.userName.toUpperCase()}
            </div>
            <div className="buttonClicker" onClick={() => logOut()}>
              LOG OUT
            </div>
          </div>
        </>
        ) : (
        <>
            <div className="buttonsDiv">
              <div className="buttonClicker" onClick={() => navigate("/tattoos")}>
              TATTOOS
              </div>
              <div className="buttonClicker" onClick={() => navigate("/login")}>
              LOG IN
              </div>
              <div className="buttonClicker" onClick={() => navigate("/register")} >
              REGISTER
              </div>
            </div>
        </>
        )}
      </div>
    )

}