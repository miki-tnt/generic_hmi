import React, { Component } from 'react';
import './App.css';
import img_elBn from './images/Fbtn_pause_elBn.png';
import img_elIcon from './images/Fbtn_pause_elIcon.png';


export default class Fbtn_pause extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBn = {
        backgroundImage: 'url('+img_elBn+')',
        backgroundSize: '100% 100%',
     };
    const style_elIcon = {
        backgroundImage: 'url('+img_elIcon+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Fbtn_pause btn" style={baseStyle}>
        <div className="foreground">
          <div className='elBn' style={style_elBn} />
          <div className='elIcon' style={style_elIcon} />
        </div>
      </div>
    )
  }
  

}
