import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'
import CardComponent from '../../shared/components/cardComponent/cardComponent'
import './homeComponent.css'




export default function HomeComponent() {

  let [videogames,setvideogames] = useState()
  let spinner= true
 
  let dispatch = useDispatch()

  useEffect(() => {
    spinner=true
   dispatch(getAllVideogames())

  }, [dispatch])
  


  return (
    <React.Fragment>


      
    </React.Fragment>
  )
}
