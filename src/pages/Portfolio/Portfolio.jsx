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

  //console.log("soy userId", userId);

  useEffect(() => {
    searchPortfolio(reduxUserData.credentials.userData.userId, reduxUserData.credentials)
      .then((results) => {
      setDesigns(results.data.data[0].Designs);
      setArtist(results.data.data[0]);
    })
    console.log("soy designs", designs)

  }, [designs.length]);

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