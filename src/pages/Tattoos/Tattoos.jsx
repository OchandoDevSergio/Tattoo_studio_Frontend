import {useEffect, useState} from 'react';
import { bringDesigns } from '../../services/apiCalls';
import { DesignCard } from '../../common/DesignCard/DesignCard';
import { useSelector } from "react-redux";
import { designDataCheck } from "../../pages/designSlice";
import './Tattoos.css'

export const Tattoos = () => {
    const [designs, setDesigns] = useState([]);

    useEffect(()=>{
        
        if(designs.length === 0){
            bringDesigns()
            .then(
                resultado => {
                        setDesigns(resultado.data.data);
                    }
                )
                .catch(error => console.log(error));
        } else {
            console.log(designs);
        }
    },[designs]);

//Instanciamos Redux en modo lectura
  const rdxDesignData = useSelector(designDataCheck);
    return (
        <>
        {rdxDesignData.designData?.data?.data?.length > 0 

            ? (<div className='home'>
            <div className='row spaceRow'></div>

              {rdxDesignData.designData.data.data.map(
                 design => {
                     return (
                         <DesignCard
                         
                             // Key es una palabra reservada en React
                             key={design.id}
                             ////////////////////////////////
                             id={design.id}
                             artist_id={design.artist_id}
                             style={design.style}
                             picture={design.picture}
                             design={design}
                         />
                     )
                 }
             )}

         </div>

         )

            : (
                designs.length > 0 

                ? (<div className='home'>
                   <div className='row spaceRow'></div>

                     {designs.map(
                        design => {
                            return (
                                <DesignCard
                                
                                // Key es una palabra reservada en React
                                key={design.id}
                                ////////////////////////////////
                                id={design.id}
                                artist_id={design.artist_id}
                                style={design.style}
                                picture={design.picture}
                                design={design}
                                />
                            )
                        }
                    )}

                </div>)

                : (<div>data is coming</div>)
            )}
        </>
    )
}