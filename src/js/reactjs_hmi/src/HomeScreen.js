import React, { Component } from 'react';
import './App.css';
import Fbtn_player from './Fbtn_player';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elFbtn_player = (ev) => {
    // Go to screen 'Player'
    this.props.appActions.goToScreen('player', { transitionId: 'fadeIn' });
  
  }
  
  
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
        backgroundColor: '#2f6c45',
     };
    const style_elFtext_homepage = {
        fontSize: 35.6,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elFbtn_player = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <Container fluid={true} className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-helvetica  elFtext_homepage' style={style_elFtext_homepage}>
              <div>{this.props.locStrings.home_ftext_homepage_38074}</div>
            </div>
            <div className='hasNestedComps elFbtn_player' style={style_elFbtn_player} onClick={this.onClick_elFbtn_player} >
              <Fbtn_player ref={(el)=> this._elFbtn_player = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
