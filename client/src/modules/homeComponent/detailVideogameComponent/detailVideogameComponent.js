import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getDetailVideogame } from '../../../redux/actions'
import SpinnerComponent from '../../../shared/components/spinnerComponent/spinnerComponent'

export default function DetailVideogameComponent(props) {

    const disp = useDispatch()
    let idDetail = props.match.params.id

    let [spinner,setSpinner] = useState(false)
    
    let detailVideogame = useSelector(state=>state.VideogameDetail)
    console.log(detailVideogame)

    useEffect(async () => {
        setSpinner(true)
        await disp(getDetailVideogame(idDetail))
        setSpinner(false)


    }, [disp])
    
/**
 * genres
: 
(2) [{…}, {…}]
image
: 
"https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
name
: 
"Company of Heroes 2"
platforms
: 
(3) [{…}, {…}, {…}]
rating
: 
3.07
released
:
 */
  return (
    <React.Fragment>
        {spinner && <SpinnerComponent/>}

        <div className='detail-bg'>
            <h2>{detailVideogame.name}</h2>
            <div className='detail-image'>
                <img src={detailVideogame.image} className='detail-image'/>
            </div>
            <div className=''>
                    <h3>jugable en</h3>
                    

            </div>

        </div>

    </React.Fragment>
  )
}
