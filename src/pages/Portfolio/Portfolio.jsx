import './Portfolio.css'
import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";
import { searchPortfolio } from "../../services/apiCalls";
// import { DesignCard } from '../../common/DesignCard/DesignCard';
import { PortfolioCard } from '../../common/PortfolioCard/PortfolioCard';
import { useEffect, useState } from 'react';


export const Portfolio = () => {
  //Instanciamos REDUX en modo lectura para los users
  const reduxUserData = useSelector(userDataCheck);
  const userId = reduxUserData.credentials.userData.userId;
  const [designs, setDesigns] = useState([]);
  const [artist, setArtist] = useState([]);

  console.log("soy userId", userId);

  useEffect(() => {
    searchPortfolio(userId, reduxUserData.credentials)
      .then((results) => {
      console.log("entro")
      setDesigns(results.data.data[0].Designs);
      setArtist(results.data.data[0]);
      console.log("soy artist", artist);
      console.log("soy designs", designs);
    })
    console.log("soy designs", designs);
  }, [userId]);

    return (
        <>
        <div className='subHeader'>
          <div className='portfolioName'>{reduxUserData.credentials.userData.userName.toUpperCase()} PORTFOLIO</div>
          {/* <div className="subheaderSpace"></div> */}
          <div className='subheaderButton'>ADD TATTOO DESIGN</div>
        </div>
                {designs.length > 0 

                    ? (<div className='home'>
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