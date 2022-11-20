import React from 'react'
import './cardComponent.css'


//componente card que recibe lo que sea para llenar la info 

export default function CardComponent({id,name,image,genres}) {

    

  return (
    <React.Fragment>
      
        <div className='card'>
        <div className='card-image-block'>
          <img className='card-image' src={image} alt='imagen' />
          <h2 className='card-tittle'>{name}</h2>
        
        </div>
          <div className='card-text'>
          
            
              <div className='card-genres'>
              {genres.map((genre)=>{
                return( 
                  <p className='card-genres-text'>{genre.name }</p>
                )
                })}
              
              </div>



          </div>
         
         </div>


    </React.Fragment>
  )
}
