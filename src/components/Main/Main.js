import React, { Component } from 'react';
import Tuning from '../Tuning/Tuning';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="AppDarkMode">
            <Tuning/>
            </div>
         );
    }
}
 
export default Main;