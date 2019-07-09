import React, { Component } from 'react';
import './App.css';


export default class Flistgroup_playlist extends Component {

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
    const style_elFlistgroupitem = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elFlistgroupitem2 = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elFlistgroupitem3 = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elFlistgroupitem4 = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    const style_elFlistgroupitem5 = {
        fontSize: 26.1,
        color: '#10036e',
        textAlign: 'left',
     };
    
    return (
      <div className="Flistgroup_playlist" style={baseStyle}>
        <div className="foreground list-group">
          <div className='elBn' style={style_elBn} />
          <div className='font-helvetica  elFlistgroupitem list-group-item active' style={style_elFlistgroupitem}>
            <div>{this.props.locStrings.flistgroup_playlist_flistgroupitem_659426}</div>
          </div>
          <div className='font-helvetica  elFlistgroupitem2 list-group-item' style={style_elFlistgroupitem2}>
            <div>{this.props.locStrings.flistgroup_playlist_flistgroupitem2_177824}</div>
          </div>
          <div className='font-helvetica  elFlistgroupitem3 list-group-item' style={style_elFlistgroupitem3}>
            <div>{this.props.locStrings.flistgroup_playlist_flistgroupitem3_236592}</div>
          </div>
          <div className='font-helvetica  elFlistgroupitem4 list-group-item' style={style_elFlistgroupitem4}>
            <div>{this.props.locStrings.flistgroup_playlist_flistgroupitem4_143589}</div>
          </div>
          <div className='font-helvetica  elFlistgroupitem5 list-group-item' style={style_elFlistgroupitem5}>
            <div>{this.props.locStrings.flistgroup_playlist_flistgroupitem5_92270}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
