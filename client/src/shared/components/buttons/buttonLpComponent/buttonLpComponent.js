import React from 'react';

import './buttonLpComponent.css'

export default function ButtonLpComponent({functo, textbutton,typeButton}) {

  return (
    <button className='buttonLP' onClick={functo} type={typeButton}>
        {textbutton}
    </button>
  )
  
}
