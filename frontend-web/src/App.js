import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { homedir } from 'os';
import { func } from 'prop-types';
import { LineDemo } from 'chart.js'

function App() {
  return (
    <Router>
    {/* {location.pathname === '/login' || <Header/>} */}
    <Route exact path='/' component={Home}/>
    <Route exact path='/abc' component={Abc} />
    <Route exact path='/chart' component={LineDemo} />
    </Router>  
    );
}

const AppChart = () => (
  <div>
    <LineDemo/>
  </div>
);

function Home(){
  return(
    <h1>Home</h1>
  );
}

const Abc = () =>{
  return (<div>
    <h1>abc</h1>
  </div>
  );
}

export default App;
