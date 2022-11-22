import React from 'react';
import './landingPageComponent.css';
import ButtonLpComponent from '../../shared/components/buttons/buttonLpComponent/buttonLpComponent';
import { useHistory } from 'react-router-dom';


export default function LandingPage(props){

  // hook que ve el historial cuyo uso es para las rutas sin necesidad de hacerlo desde el html
  const history = useHistory()
  // const disp = useDispatch()  
  // let videogames = useSelector((state=>state.videogames))
  // disp(actions.getAllVideogames())



  /**
   * funcion que manda al home 
   */
  let sendToHome=()=>{
    
    history.push('/home')
      
  }
  
  
  
  return (
    <React.Fragment>
      
    <div className='bg-lp center column-flex'>
      <h2 className='PyM-0 tittle'>videogames</h2>
        <div className='p-2'>
        
        <ButtonLpComponent functo={sendToHome} textbutton={'INICIO'}></ButtonLpComponent>

        </div>
        </div>
    
      
    </React.Fragment>
  )
}
