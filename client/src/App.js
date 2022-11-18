import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//componentes 
import HomeComponent from './modules/homeComponent/homeComponent';
import LandingPage from './modules/landingPageComponent/landingPageComponent';
import SideNavComponent from './modules/SidenavComponent/sideNavComponent';


function App() {
  return (
    <React.Fragment >
    <Route exact path={'/'} component={LandingPage}/>
    <div className='app'>
    <Route path={'/home'} component={SideNavComponent}/>
    <Route path={'/home'} component={HomeComponent}/>
    </div>
    </React.Fragment>
  );
}

export default App;
