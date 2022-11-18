import React from 'react'
import './sideNavComponent.css'
import {  NavLink } from 'react-router-dom'


import iconHome from '../../shared/images/icons/home.svg'
import iconAdd from '../../shared/images/icons/add.svg'
import burgerMenu from '../../shared/images/icons/burgerMenu.svg'

export default function SideNavComponent() {

    let sidenavData=[
        {
            tittle:'Home',
            path:'/home',
            image:iconHome,
            css:'text-nodecoration'
        },
        {
            tittle:'Create',
            path:'/home/Create',
            image:iconAdd,
            css:'text-nodecoration'
        },

    ]


// <img  src={item.image} alt='imagen'></img>
  return (
    <React.Fragment>
        <nav className='sidenav'>

            <img src={burgerMenu} alt='icono de menu'  />

            <ul >
           
                {sidenavData.map((item,index)=>{
                    return(
                        <li key={index}>
                            <NavLink to={item.path} className={item.css}>
                                {item.tittle}                        
                            </NavLink>
                        </li>

                    )
                })}
                            
            </ul>
        
        </nav>
    
    </React.Fragment>
  )
}
