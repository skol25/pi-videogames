import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import CardComponent from '../../shared/components/cardComponent/cardComponent'
import './homeComponent.css'




export default function HomeComponent() {
  
  let response = useSelector((state)=>state.videogames)
  let [videogames,setvideogames] = useState()

 let responsetest=[{
  "id": 3498,
  "name": "Grand Theft Auto V",
  "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "genres": [
      {
          "id": 4,
          "name": "Action"
      },
      {
          "id": 3,
          "name": "Adventure"
      }
  ]
}]
  
 

let click = ()=>{
    console.log(videogames)
}

  return (
    <React.Fragment>
      <div className='container'>  
      
      <p>home</p>
        
        
        
      </div>
    </React.Fragment>
  )
}
