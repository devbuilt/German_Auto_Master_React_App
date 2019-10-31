import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Tuning.css'

class Tuning extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="AppDarkMode">
            <div sytle={{display: this.props.url ? 'block' : 'none'}} className='player-wrapper'>
              <ReactPlayer  width='100%'
               height='100%' 
               className='react-player'
               url="https://youtu.be/A6jGWKnQ1kE" playing={true} controls={true}/>
              </div>
            >
            </div> 
        );
    }
}
 
export default Tuning;