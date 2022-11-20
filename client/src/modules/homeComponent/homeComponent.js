import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'

import CardComponent from '../../shared/components/cardComponent/cardComponent'
import './homeComponent.css'

export default function HomeComponent() {

  const disp = useDispatch()

  
   let getVideogames = useSelector((state) => state.videogames)

  let [allVideogames,setvideogames] = useState([])
  

  useEffect(()=>{

    disp(getAllVideogames())
    
  },[])

 let click = ()=>{
  console.log()
 }


  
  return (
    <React.Fragment>
    
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
