import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CreateVideogameComponent from './modules/createVideogameComponent/createVideogameComponent';
import HeaderComponent from './modules/headerComponent/headerComponent';
import DetailVideogameComponent from './modules/homeComponent/detailVideogameComponent/detailVideogameComponent';

//componentes 
import HomeComponent from './modules/homeComponent/homeComponent';
import LandingPage from './modules/landingPageComponent/landingPageComponent';
import SideNavComponent from './modules/SidenavComponent/sideNavComponent';

function App() {
  return (
    <React.Fragment>
      <Route path={'/'} exact component={LandingPage}/>
      <Route path={'/home'} component={HeaderComponent}/>

      <div className='flex'>
        <Route path={'/home'} component={SideNavComponent}/>

        <div className='content'>
          <Route exact path={'/home'} component={HomeComponent}/>
          <Route exact path={'/home/Detail/:id'} component={DetailVideogameComponent}/>
          <Route exact path={'/home/create'} component={CreateVideogameComponent}/>
        </div>

      </div>
      </React.Fragment>
    
  );
}

export default App;
