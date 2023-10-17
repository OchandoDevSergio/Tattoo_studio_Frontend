import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { bringUsers } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  //Instanciamos Redux en modo LECTURA para user
  const reduxUserData = useSelector(userDataCheck);


  bringUsers(reduxUserData.credentials)
    .then((resultado) => {
      setUsers(resultado.data.data);
    })
    .catch((error) => console.log(error));

  console.log("soy users", users);

  return (
    <>
      <div className="subHeader">
        <div className="subheaderButton" onClick={() => navigate("/adminadd")}>
          Add admin
        </div>
      </div>

      {users.length > 0 ? (
        <div className="infinite-scroll-container">
          {users.map((user) => {
            return (
              <DesignCard
                // Key es una palabra reservada en React
                key={design.id}
                ////////////////////////////////
                id={design.id}
                artist_name={design.Artist.name}
                style={design.style}
                picture={design.picture}
                design={design}
              />
            );
          })}
        </div>
      ) : (
        <div className="home">
          <div className="title">No users found</div>
        </div>
      )}
    </>
  );
};
