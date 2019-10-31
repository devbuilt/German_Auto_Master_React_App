import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';
// import Error from './components/Error/Error';
import './index.css';


class App extends Component {
  render() {
    return (
   
        <div>
         <BrowserRouter>
        <div>
         <Nav/>
        <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={About} exact/>
          {/* <Route component={Error} /> */}
         </Switch>
         </div>
         </BrowserRouter>
         </div>
    
    );
  }
}

export default App;
