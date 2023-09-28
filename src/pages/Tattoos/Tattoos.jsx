import {useEffect, useState} from 'react';
import { bringDesigns } from '../../services/apiCalls';
import { DesignCard } from '../../common/DesignCard/DesignCard';
import { useSelector, useDispatch } from "react-redux";
import { designDataCheck } from "../../pages/designSlice";
import { Input } from "../../common/Input/Input";
import { searchCriteria } from "../../services/apiCalls";
import { loadDesignData } from "../../pages/designSlice";
import './Tattoos.css'

export const Tattoos = () => {
    const [designs, setDesigns] = useState([]);

    // useEffect(()=>{
        
    //     if(designs.length === 0){
    //         bringDesigns()
    //         .then(
    //             resultado => {
    //                     setDesigns(resultado.data.data);
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     } else {
    //         console.log(designs);
    //     }
    // },[designs]);


    const [criteria, setCriteria] = useState("");
    const dispatch = useDispatch();
    // const searchDesigns = (designs) => {
    //     dispatch(loadDesignData({ designData: designs }));
    //   };
  
      const inputHandler = (e) => {
        setCriteria(e.target.value);
      };
  
      useEffect(() => {
        if (criteria !== "") {
          const search = setTimeout(() => {
            searchCriteria(criteria)
              .then((results) => {
                console.log("do you comprende??", results)
                // setDesigns(results);
              })
              .catch((error) => console.log(error));
          }, 375);
    
          return () => clearTimeout(search);
        } else if (criteria === ""){
          
          bringDesigns()
            .then(
              resultado => {
                console.log(resultado)
              }
            )
            .catch(error => console.log(error))
         
        }
      }, [criteria]);

//Instanciamos Redux en modo lectura
  const rdxDesignData = useSelector(designDataCheck);
  
    return (
        <>
        <div className='subHeader'>
        <Input
           type={"text"}
           placeholder="Search tattoos"
           value={criteria}
           name={"criteria"}
           className="defaultInput"
           manejadora={inputHandler}
          />
        </div>
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