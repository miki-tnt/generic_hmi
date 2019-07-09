import React, { Component } from 'react';
import './App.css';


export default class Fbtn_back extends Component {

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
    const style_elBACK = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'center',
     };
    
    return (
      <div className="Fbtn_back btn" style={baseStyle}>
        <div className="foreground">
          <div className='elBn' style={style_elBn} />
          <div className='font-helvetica  elBACK' style={style_elBACK}>
            <div>{this.props.locStrings.fbtn_back_back_633461}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
