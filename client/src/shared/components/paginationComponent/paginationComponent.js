import React from 'react'
import ButtonLpComponent from '../buttons/buttonLpComponent/buttonLpComponent'
import './paginationComponent.css'

export default function PaginationComponent({numberGames,numberPerPage,pageFunction}) {

    let pages = [] //se guarda en unarray para ir imprimiendo cada boton con su numero

    for (let i = 1; i <= Math.ceil(numberGames/ numberPerPage) ; i++) {
        pages.push(i)  
    }

    return (
    <React.Fragment>
    <div className='pagination-buttons'>
    {pages.map((number)=>{
        return(
            <div className='pagination-button'>
                <ButtonLpComponent textbutton={number} functo={()=>pageFunction(number)} />
                
            </div>

            
        )
    })}
    </div>
    
    </React.Fragment>
  )
}
