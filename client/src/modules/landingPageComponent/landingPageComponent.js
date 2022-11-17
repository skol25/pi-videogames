import React from 'react';
import './landingPageComponent.css';
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import ButtonLpComponent from '../../shared/components/buttons/buttonLpComponent/buttonLpComponent';

export default function LandingPage(){

  const disp = useDispatch()  
  let videogames = useSelector((state=>state.videogames))
  
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
      
    <div className='bg-lp center column-flex'>
      <h2 className='PyM-0 tittle'>videogames</h2>
        <div className='p-2'>
        
        <ButtonLpComponent></ButtonLpComponent>

        </div>
        </div>
    
      
    </React.Fragment>
  )
}
