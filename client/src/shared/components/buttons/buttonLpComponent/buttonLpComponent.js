import React from 'react';

import './buttonLpComponent.css'

export default function ButtonLpComponent({functo, textbutton}) {

  return (
    <button className='buttonLP' onClick={functo}>
        {textbutton}
    </button>
  )
}
