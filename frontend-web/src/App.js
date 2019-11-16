import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { homedir } from 'os';
import { func } from 'prop-types';
import Home from './homepage'
import LineDemo  from './chartss'
import Heavy from './heavy'

function App() {
  return (
    <Router>
    {/* {location.pathname === '/login' || <Header/>} */}
    <Route exact path='/' component={Home}/>
    <Route exact path='/heavy' component={Heavy} />
    <Route exact path='/Chart' component={LineDemo} />
    </Router>
    );
}

// const Abc = () =>{
//   return (<div>
//     <h1>abc</h1>
//   </div>
//   );
// }

export default App;
