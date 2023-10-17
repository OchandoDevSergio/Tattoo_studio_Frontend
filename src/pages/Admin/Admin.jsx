import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { bringUsers } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { UserCard } from "../../common/UserCard/UserCard";

export const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  //Instanciamos Redux en modo LECTURA para user
  const reduxUserData = useSelector(userDataCheck);

  useEffect(() => {
    if (reduxUserData.credentials?.userData?.roleId !== 1) {
      navigate("/");
    }
  }, [reduxUserData]);

  useEffect(() => {
  bringUsers(reduxUserData.credentials)
    .then((resultado) => {
      setUsers(resultado.data.data);
    })
    .catch((error) => console.log(error));
  }, []);

  const updateMe = () => {
    bringUsers(reduxUserData.credentials)
    .then((resultado) => {
      setUsers(resultado.data.data);
    })
    .catch((error) => console.log(error));
  }


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
              <UserCard
                // Key es una palabra reservada en React
                key={user.id}
                ////////////////////////////////
                id={user.id}
                role_id={user.role_id}
                name={user.name}
                surnames={user.surnames}
                phone={user.phone}
                email={user.email}
                user={user}
                update={updateMe}
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
