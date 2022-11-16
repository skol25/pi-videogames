import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './modules/landingPageComponent/landingPageComponent';


function App() {
  return (
    <React.Fragment>
    <Route path={'/'} component={LandingPage}/>
    </React.Fragment>
  );
}

export default App;
