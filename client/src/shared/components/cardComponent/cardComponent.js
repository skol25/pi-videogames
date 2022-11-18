import React from 'react'


//componente card que recibe lo que sea para llenar la info 

export default function CardComponent(props) {



  return (
    <React.Fragment>
      
        <div className='cardBg'>
        
            {props && props.map((item)=>{

                return(

                    <React.Fragment>

                        
                        <img/>
                        <div>
                        
                            <h2></h2>
                           
                            <div>
                            
                            {item.genres.map((genre)=>{

                                <p>genre</p>

                            })}    
                            
                            </div>
                        </div>
                    
                    </React.Fragment>


                )


            })}
        
        
        </div>


    </React.Fragment>
  )
}
