import React, { Component } from 'react';
import './App.css';
import img_elFbtn_play from './images/Fbtn_play_elFbtn_play.png';


export default class Fbtn_play extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elFbtn_play = {
        backgroundImage: 'url('+img_elFbtn_play+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Fbtn_play btn" style={baseStyle}>
        <div className="foreground">
          <div className='elFbtn_play' style={style_elFbtn_play} />
        </div>
      </div>
    )
  }
  

}
