import React, { Component } from 'react';
import Tuning from '../Tuning/Tuning';
import HeaderMain from '../Header/HeaderMain'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';





const styles = {
    button: {
      background: 'linear-gradient(-45deg, #ffeb3b 30%,  #dd2c00 60%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes} = this.props
        return ( 
            <div className="AppDarkMode">
            <Tuning/>
            <HeaderMain/>
            <Button variant="contained" className={classes.button}>Testing</Button>
            </div>
         );
    }
}
Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(Main);