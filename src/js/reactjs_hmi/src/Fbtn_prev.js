import React, { Component } from 'react';
import './App.css';
import img_elFbtn_prev from './images/Fbtn_prev_elFbtn_prev.png';
import img_elTriangle from './images/Fbtn_prev_elTriangle.png';


export default class Fbtn_prev extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elFbtn_prev = {
        backgroundImage: 'url('+img_elFbtn_prev+')',
        backgroundSize: '100% 100%',
     };
    const style_elTriangle = {
        backgroundImage: 'url('+img_elTriangle+')',
        backgroundSize: '100% 100%',
     };
    const style_elRectangle = {
        background: 'rgba(35, 69, 17, 1.000)',
        border: '2.2px solid #969696',
     };
    
    return (
      <div className="Fbtn_prev btn" style={baseStyle}>
        <div className="foreground">
          <div className='elFbtn_prev' style={style_elFbtn_prev} />
          <div className='elTriangle' style={style_elTriangle} />
          <div className='elRectangle' style={style_elRectangle} />
        </div>
      </div>
    )
  }
  

}
