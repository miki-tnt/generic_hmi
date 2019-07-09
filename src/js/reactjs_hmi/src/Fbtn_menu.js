import React, { Component } from 'react';
import './App.css';


export default class Fbtn_menu extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBn = {
        background: 'rgba(215, 215, 215, 1.000)',
        border: '2.2px solid #969696',
     };
    const style_elMENU = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'center',
     };
    
    return (
      <div className="Fbtn_menu btn" style={baseStyle}>
        <div className="foreground">
          <div className='elBn' style={style_elBn} />
          <div className='font-helvetica  elMENU' style={style_elMENU}>
            <div>{this.props.locStrings.fbtn_menu_menu_590653}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
