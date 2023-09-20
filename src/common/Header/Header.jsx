import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    //Instanciamos useNavigate dentro de navigate para poder navegar
    const navigate = useNavigate();

    return (
        <div className="header">

          <img className="homeButton" src="https://i.ibb.co/0j326Sc/logo-5.jpg" alt="logo" onClick={() => navigate("/")}/>

          <div className="buttonsDiv">
          <div className="buttonClicker" onClick={() => navigate("/tattoos")}>
              TATTOOS
            </div>
            <div className="buttonClicker" onClick={() => navigate("/login")}>
              LOGIN
            </div>
            <div className="buttonClicker" onClick={() => navigate("/register")} >
              REGISTER
            </div>
          </div>
        </div>
    )

}