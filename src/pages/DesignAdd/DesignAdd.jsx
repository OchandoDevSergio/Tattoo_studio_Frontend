import './DesignAdd.css'
import { Input } from "../../common/Input/Input";
import { useState, useEffect } from "react";
import { userDataCheck } from "../userSlice";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchPortfolio } from "../../services/apiCalls";
import { registerDesign } from "../../services/apiCalls";

export const DesignAdd = () => {
  const reduxUserData = useSelector(userDataCheck);
  const userId = reduxUserData.credentials.userData.userId;
  const navigate = useNavigate();

  const [artist, setArtist] = useState([]);

  useEffect(() => {
    searchPortfolio(userId, reduxUserData.credentials)
      .then((results) => {


      setArtist(results.data.data[0].id);
      console.log("soy artist", artist);
    })
  }, [userId]);

  console.log("soy artist", artist);

  const [addDesignBody, setaddDesignBody] = useState({
    artist_id: artist,
    style: "",
    picture: "",
  });


  //BINDEO
  const inputHandler = (e) => {
    setaddDesignBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addDesign = () => {
    registerDesign(addDesignBody, reduxUserData.credentials)
        .then((resultado) => {
          navigate("/portfolio");
        })
        .catch((error) => console.log(error));
    };

  useEffect(() => {
    if (reduxUserData.credentials?.userData?.roleId !== 3) {
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
              placeholder="Introduce the design style"
              value={addDesignBody.style}
              name={"style"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder="Introduce the designs hosting link"
              value={addDesignBody.picture}
              name={"picture"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonBody" onClick={() => addDesign()}>
          Register design in portfolio
        </div>
      </div>
    </div>
  );
};
