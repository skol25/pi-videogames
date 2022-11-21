import React from 'react'
import cover from '../../images/cover.svg'
import './coverNotfoundComponent.css'

export default function CoverNotfoundComponent() {
  return (
    <div className='cover-bg'>
        <h2 className='cover-tittle'>No se ha encontrado ningun juego, cree uno.</h2>
        <img className='cover-img' src={cover} alt='imagen cover'/>

    </div>
  )
}

