import React, { Component } from 'react';
import Tuning from '../Tuning/Tuning';
import HeaderMain from '../Header/HeaderMain'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="AppDarkMode">
            <HeaderMain/>
            <Tuning/>
            </div>
         );
    }
}
 
export default Main;