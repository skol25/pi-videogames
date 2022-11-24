import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getDetailVideogame } from '../../../redux/actions'
import SpinnerComponent from '../../../shared/components/spinnerComponent/spinnerComponent'

import './detailVideogameComponent.css'

export default function DetailVideogameComponent(props) {

    let idDetail = props.match.params.id
    let disp = useDispatch()

    let [spinner,setSpinner] = useState(false)
    
    let description = useSelector(state=>state.VideogameDetail)
  

    useEffect( async() => {
        setSpinner(true)
        await disp(getDetailVideogame(idDetail))
        setSpinner(false)
    }, [disp, idDetail])
   

  return (
    <React.Fragment>
        {spinner && <SpinnerComponent/>}
        <div className='detail-bg'>
            {description.name}
            { description.image && <img className='detail-image' src={description.image} alt='videogame'/>}
            { !description.image && <img className='detail-image' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0aebcf5-946d-44a7-bb9e-62e9964adb2b/dapiflk-1d064c11-b366-4a64-9d24-30a650ba2847.png/v1/fill/w_1024,h_576,q_80,strp/gamecube_controller_minimalist_wallpaper_by_brulescorrupted_dapiflk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTBhZWJjZjUtOTQ2ZC00NGE3LWJiOWUtNjJlOTk2NGFkYjJiXC9kYXBpZmxrLTFkMDY0YzExLWIzNjYtNGE2NC05ZDI0LTMwYTY1MGJhMjg0Ny5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HNm253TIHOwbreSdXl4rIRMDuYigSQtJ0Pwv-9H6RHY" alt='videogame'/>}
            <h4>{description.rating}</h4>
            
            <span className="material-symbols-outlined detail-rating-icon">
            star
            </span>
            <p className='detail-description'>{description.description}</p>
            { description.genres && description.genres.map((genre)=>{
                
                return(
                    <p>{genre.name}</p>
                )

            })}
                    
             { description.platforms && description.platforms.map((platform)=>{

                return(
                    <p>{platform}</p>
                )

                })}
            
        </div>
        

    </React.Fragment>
  )
}
