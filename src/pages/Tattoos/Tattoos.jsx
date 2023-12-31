import "./Tattoos.css";
import { useEffect, useState } from "react";
import { bringDesigns } from "../../services/apiCalls";
import { DesignCard } from "../../common/DesignCard/DesignCard";
import { Input } from "../../common/Input/Input";
import { searchCriteria } from "../../services/apiCalls";

export const Tattoos = () => {
  const [designs, setDesigns] = useState([]);
  const [criteria, setCriteria] = useState("");

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    if (criteria !== "") {
      const search = setTimeout(() => {
        searchCriteria(criteria)
          .then((results) => {
            setDesigns(results.data.data);
          })
          .catch((error) => console.log(error));
      }, 375);

      return () => clearTimeout(search);
    } else if (criteria === "") {
      bringDesigns()
        .then((resultado) => {
          setDesigns(resultado.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [criteria]);

  return (
    <>
      <div className="subHeader">
        <Input
          type={"text"}
          placeholder="Search tattoos"
          value={criteria}
          name={"criteria"}
          className="defaultInput"
          manejadora={inputHandler}
        />
      </div>
      {designs.length > 0 ? (
        <div className="infinite-scroll-container">
          {designs.map((design) => {
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
          <div className="title">No designs found, insert a tattoo style</div>
        </div>
      )}
    </>
  );
};
