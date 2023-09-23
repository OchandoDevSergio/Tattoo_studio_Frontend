import "./DesignCard.css";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadDesignData } from "../../pages/designSlice";

export const DesignCard = ({ id, artist_id, style, picture, design }) => {
  //Instancia de Redux para el modo de ESCRITURA
  const dispatch = useDispatch();
  //Instancia de Navigate para React Router Dom y movimientos por la app
  const navigate = useNavigate();

  const showMe = () => {
    dispatch(loadDesignData({ designData: design }));
    navigate("/showdesign");
  };

  return (
    <div className="cardDesign" onClick={() => showMe(design)}>
       artist_id:{artist_id}  {/*cambiar por nombre */}
      <img className="picture" src={picture} alt={id} />
      <div>Style: {style}</div>
    </div>
  );
};
