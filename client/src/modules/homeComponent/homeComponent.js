import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'

import CardComponent from '../../shared/components/cardComponent/cardComponent'
import SpinnerComponent from '../../shared/components/spinnerComponent/spinnerComponent'

import searchIcon from '../../shared/images/icons/searchIcon.svg'

import './homeComponent.css'

export default function HomeComponent() {

  const disp = useDispatch()
  let [spinner,setSpinner] = useState(true)
  let [allVideogames,setvideogames] = useState([])
  let [search,setSearch] = useState([])



   let getVideogames = useSelector((state) => state.videogames)

   useEffect(()=>{
    (async () => {
      const data = await disp(getAllVideogames());
      
      setSpinner(false);
      
   })();

   } ,[disp,allVideogames])


  
  // useEffect(()=>{
    
   
  //   disp(getAllVideogames())
  //   setvideogames(getVideogames)
  

  // },[disp,allVideogames])


  
  return (
    <React.Fragment>
      <div className='home-input'>
        <input className='home-input-'/>
        <img src={searchIcon} />     
      </div>
      {spinner && <SpinnerComponent/>}
    
      <div className='container'>  

        { getVideogames && getVideogames.map( (videogame) => {

          return(
            <div className='home-card-block'>
            <CardComponent id={videogame.id} name={videogame.name} image={videogame.image}  genres={videogame.genres} />

            </div>
          );

        })}
      </div>
    </React.Fragment>
  )
}
