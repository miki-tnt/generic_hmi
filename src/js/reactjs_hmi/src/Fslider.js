import React, { Component } from 'react';
import './App.css';
import img_elSlider from './images/Fslider_elSlider.png';
import Slider from 'rc-slider/lib/Slider';

export default class Fslider extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elTrackbar = {
        background: 'rgba(215, 215, 215, 1.000)',
        border: '2.2px solid #969696',
     };
    const style_elActivebar = {
        background: 'rgba(61, 43, 218, 1.000)',
        border: '2.2px solid #969696',
     };
    const style_elSlider = {
        backgroundImage: 'url('+img_elSlider+')',
        backgroundSize: '100% 100%',
     };
    const style_elTime_current = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elTime_length = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    
    return (
      <div className="Fslider" style={baseStyle}>
        <div className="foreground">
          {/* <div className='elTrackbar' style={style_elTrackbar} />
          <div className='elActivebar' style={style_elActivebar} />
          <div className='elSlider' style={style_elSlider} /> */}

          <div className='elTrackbar'>
            <Slider
              defaultValue={80}
              trackStyle={{
                background: 'rgba(61, 43, 218, 1.000)',
                border: '2.2px solid #969696',
                height: 10
              }}
              handleStyle={{
                backgroundImage: 'url(' + img_elSlider + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: 0,
                height: 30,
                width: 30,
                // marginLeft: -14,
                marginTop: -10,
              }}
              railStyle={{
                background: 'rgba(215, 215, 215, 1.000)',
                border: '2.2px solid #969696',
                height: 10
              }}
            />
          </div>

          <div className='font-helvetica  elTime_current' style={style_elTime_current}>
            <div>{this.props.locStrings.fslider_time_current_938710}</div>
          </div>
          <div className='font-helvetica  elTime_length' style={style_elTime_length}>
            <div>{this.props.locStrings.fslider_time_length_57816}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
