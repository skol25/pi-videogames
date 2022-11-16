import React from 'react';
import './landingPageComponent.css';
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';


export default function LandingPage(){

  const disp = useDispatch()  
  let videogames = useSelector((state=>state.videogames))
  // let click=(e)=>{
  //   e.preventDefault() 
  //   let data = disp(actions.getAllVideogames())
  //   console.log(data)
    
  // }
  let capture=()=>{
    console.log('click')
    disp(actions.getAllVideogames())
   
    // disp(actions.getAllVideogames())
  }
  let capture2=()=>{
    
    console.log(videogames)
  }
  

  
  return (
    <React.Fragment>
    <div className='bg-lp'>
        
        <h2 className='hola'>holaa</h2>

        <button 
          onClick={capture}
        >click
        </button>

         <button 
          onClick={capture2}
        >click2
        </button>
    </div>
    </React.Fragment>
  )
}
