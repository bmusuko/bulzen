import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import { homedir } from 'os';
// import { func } from 'prop-types';
import Home from './homepage'
import Detail from './detail'
import SparePart from './sparePart'
import Consumables from './consumables'
import Navibar from './navbar'
import ItemDetail from './itemDetail'

function App() {
  return (
    <Router>
    {/* {location.pathname === '/login' || <Header/>} */}
    <Navibar />
    <Route exact path='/' component={Home}/>
    <Route exact path='/detail' component={Detail} />
    <Route exact path='/sparepart' component={SparePart} />
    <Route exact path='/consumables' component={Consumables} />
    <Route exact path='/itemDetail' component={ItemDetail} />
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
