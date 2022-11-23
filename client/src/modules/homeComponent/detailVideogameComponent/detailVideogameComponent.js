import { platform } from 'os'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getDetailVideogame } from '../../../redux/actions'
import SpinnerComponent from '../../../shared/components/spinnerComponent/spinnerComponent'

import './detailVideogameComponent.css'

export default function DetailVideogameComponent(props) {

    let idDetail = props.match.params.id
    let disp = useDispatch()

    let [spinner,setSpinner] = useState(false)

    let [detail,setDetail] = useState()
    
    let description = useSelector(state=>state.VideogameDetail)
  

    useEffect( () => {
        setSpinner(true)
        disp(getDetailVideogame(idDetail))
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

// { detailVideogame && <div className='detail-bg'>
        //     <h2 >{detailVideogame.name}</h2>
              
        //      { detailVideogame.image && <img className='detail-image' src={detailVideogame.image} alt='videogame'/>}
        //      { !detailVideogame.image && <img className='detail-image' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0aebcf5-946d-44a7-bb9e-62e9964adb2b/dapiflk-1d064c11-b366-4a64-9d24-30a650ba2847.png/v1/fill/w_1024,h_576,q_80,strp/gamecube_controller_minimalist_wallpaper_by_brulescorrupted_dapiflk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTBhZWJjZjUtOTQ2ZC00NGE3LWJiOWUtNjJlOTk2NGFkYjJiXC9kYXBpZmxrLTFkMDY0YzExLWIzNjYtNGE2NC05ZDI0LTMwYTY1MGJhMjg0Ny5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HNm253TIHOwbreSdXl4rIRMDuYigSQtJ0Pwv-9H6RHY" alt='videogame'/>}
        //     <h4>{detailVideogame.rating}</h4><span class="material-symbols-outlined detail-rating-icon">
        //     star
        //     </span>
        //     {detailVideogame.released}
        //     <p className='detail-description'>{detailVideogame.description}</p>
            
        //    {detailVideogame.genres}
        //    {detailVideogame.platforms}
         
        // </div>}


        //

        /**
         * description
: 
"Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged."
genres
: 
["Action", "Adventure"]
0
: 
"Action"
1
: 
"Adventure"
image
: 
"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
name
: 
"Grand Theft Auto V"
platforms
: 
["PC", "PlayStation", "Xbox"]
0
: 
"PC"
1
: 
"PlayStation"
2
: 
"Xbox"
rating
: 
4.47
released
: 
"2013-09-17
         */



//no viene de base de datos