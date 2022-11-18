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
            css:'sidenav-text'
        },
        {
            tittle:'Create',
            path:'/home/Create',
            image:iconAdd,
            css:'sidenav-text'
        },

    ]


// <img  src={item.image} alt='imagen'></img>
  return (
    <React.Fragment>
        <nav className='sideNav'>

            <img src={burgerMenu} alt='icono de menu'  />

            <ul className='sidenav-menu'>
           
                {sidenavData.map((item,index)=>{
                    return(
                        <li key={index} className='sidenav-li' >
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
