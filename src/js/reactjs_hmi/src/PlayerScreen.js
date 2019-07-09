import React, { Component } from 'react';
import './App.css';
import Fbtn_next from './Fbtn_next';
import Fbtn_pause from './Fbtn_pause';
import Fbtn_play from './Fbtn_play';
import Fbtn_prev from './Fbtn_prev';
import Fslider from './Fslider';
import Flistgroup_playlist from './Flistgroup_playlist';
import img_elFimage_albumart from './images/PlayerScreen_elFimage_albumart_963944.jpg';
import Fbtn_back from './Fbtn_back';
import Fbtn_menu from './Fbtn_menu';
import Fbtn_source from './Fbtn_source';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class PlayerScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#2e6b46',
     };
    const style_elFimage_albumart = {
        backgroundImage: 'url('+img_elFimage_albumart+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <Container fluid={true} className="AppScreen PlayerScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elFbtn_next'>
              <Fbtn_next ref={(el)=> this._elFbtn_next = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFbtn_pause'>
              <Fbtn_pause ref={(el)=> this._elFbtn_pause = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFbtn_play'>
              <Fbtn_play ref={(el)=> this._elFbtn_play = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFbtn_prev'>
              <Fbtn_prev ref={(el)=> this._elFbtn_prev = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFslider'>
              <Fslider ref={(el)=> this._elFslider = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFlistgroup_playlist'>
              <Flistgroup_playlist ref={(el)=> this._elFlistgroup_playlist = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elFimage_albumart' style={style_elFimage_albumart} />
            <div className='hasNestedComps elFbtn_back'>
              <Fbtn_back ref={(el)=> this._elFbtn_back = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFbtn_menu'>
              <Fbtn_menu ref={(el)=> this._elFbtn_menu = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elFbtn_source'>
              <Fbtn_source ref={(el)=> this._elFbtn_source = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
