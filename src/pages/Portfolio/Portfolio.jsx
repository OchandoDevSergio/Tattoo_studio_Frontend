import './Portfolio.css'
import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";
import { searchPortfolio } from "../../services/apiCalls";
import { PortfolioCard } from '../../common/PortfolioCard/PortfolioCard';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  //Instanciamos REDUX en modo lectura para los users
  const reduxUserData = useSelector(userDataCheck);
  //const userId = reduxUserData.credentials.userData.userId;
  const [designs, setDesigns] = useState([]);
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();
  const [counter, setCounter] = useState([]);
  //console.log("soy userId", userId);

  useEffect(() => {
    searchPortfolio(reduxUserData.credentials.userData.userId, reduxUserData.credentials)
      .then((results) => {
      setArtist(results.data.data[0]);
      setDesigns(results.data.data[0].Designs);
    })
    .catch(error => console.log(error))
    console.log("aqui vuelvo????")
  }, []);

  const updateMe = () => {
    searchPortfolio(reduxUserData.credentials.userData.userId, reduxUserData.credentials)
      .then((results) => {
      setArtist(results.data.data[0]);
      setDesigns(results.data.data[0].Designs);
      console.log(results, "soy el resultado a ver que trae....")
    })
    .catch(error => console.log(error))

  }

    return (
        <>
        <div className='subHeader'>
          <div className='portfolioName'>{reduxUserData.credentials.userData.userName.toUpperCase()} PORTFOLIO</div>
          <div className='subheaderButton' onClick={() => navigate("/designadd")}>ADD TATTOO DESIGN</div>
        </div>
                {designs.length > 0 

                    ? (<div className='infinite-scroll-container'>
                    <div className='row spaceRow'></div>
        
                      {designs.map(
                         design => {
                             return (
                                 <PortfolioCard
                                 
                                     // Key es una palabra reservada en React
                                     key={design.id}
                                     ////////////////////////////////
                                     id={design.id}
                                     picture={design.picture}
                                     design={design}
                                     update={updateMe}
                                 />
                             )
                         }
                     )}
        
                 </div>
        
                 ) : (<div className='home'>
                          <div className='title'>No designs found, load designs to your portfolio</div>
                          </div>)
                    }
        </>
    )
}