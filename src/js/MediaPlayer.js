import React from 'react';

// import AppHeader from './containers/Header';
// import { MediaMetadata } from './containers/Metadata';
// import ProgressBar from './containers/ProgressBar_c';
// import Buttons from './containers/Buttons';

import LocalizedStrings from 'react-localization';
import './reactjs_hmi/src/App.css';
import Fbtn_next from './reactjs_hmi/src/Fbtn_next';
import Fbtn_pause from './reactjs_hmi/src/Fbtn_pause';
import Fbtn_play from './reactjs_hmi/src/Fbtn_play';
import Fbtn_prev from './reactjs_hmi/src/Fbtn_prev';
import Fslider from './reactjs_hmi/src/Fslider';
import Flistgroup_playlist from './reactjs_hmi/src/Flistgroup_playlist';
import img_elFimage_albumart from './reactjs_hmi/src/images/PlayerScreen_elFimage_albumart_963944.jpg';
import Fbtn_back from './reactjs_hmi/src/Fbtn_back';
import Fbtn_menu from './reactjs_hmi/src/Fbtn_menu';
import Fbtn_source from './reactjs_hmi/src/Fbtn_source';
// UI framework component imports
import Container from 'muicss/lib/react/container';
import MenuLink from './containers/AppsButton';
import DataSheet_localizationSheet from './reactjs_hmi/src/DataSheet_localizationSheet';

export default class MediaPlayer extends React.Component {
    constructor() {
        super();

        this.dataSheets = {};
        this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    
        this.dataSlots = {};
        this.dataSlots['ds_activeLang'] = "en";
    
        this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);
    }
    updateLocalizationFromDataSheet = (dataSheet) => {
        const stringsObj = dataSheet.getStringsByLanguage();
        if (stringsObj && Object.keys(stringsObj).length > 0) {
            this.locStrings = new LocalizedStrings(stringsObj);
        } else {
            this.locStrings = new LocalizedStrings({ en: {} });
        }
        this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);

    }

    // render() {
    //     return (
    //         <div className="media-template">
    //             <AppHeader backLink="/" menuName="Apps"/>
    //             <MediaMetadata />
    //             <ProgressBar />
    //             <Buttons />
    //         </div>
    //     )
    // }
    render() {
        // eslint-disable-next-line no-unused-vars
        let baseStyle = {};
        // eslint-disable-next-line no-unused-vars
        let layoutFlowStyle = {};
        if (this.transitionId && this.transitionId.length > 0 && this.atTopOfScreenStack && this.transitionForward) {
            baseStyle.animation = '0.25s ease-in-out ' + this.transitionId;
        }
        if (!this.atTopOfScreenStack) {
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
            backgroundImage: 'url(' + img_elFimage_albumart + ')',
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
                            <Fbtn_next ref={(el) => this._elFbtn_next = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFbtn_pause'>
                            <Fbtn_pause ref={(el) => this._elFbtn_pause = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFbtn_play'>
                            <Fbtn_play ref={(el) => this._elFbtn_play = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFbtn_prev'>
                            <Fbtn_prev ref={(el) => this._elFbtn_prev = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFslider'>
                            <Fslider ref={(el) => this._elFslider = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFlistgroup_playlist'>
                            <Flistgroup_playlist ref={(el) => this._elFlistgroup_playlist = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='elFimage_albumart' style={style_elFimage_albumart} />
                        <div className='hasNestedComps elFbtn_back'>
                            <Fbtn_back ref={(el) => this._elFbtn_back = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFbtn_menu'>
                            <Fbtn_menu ref={(el) => this._elFbtn_menu = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                        <div className='hasNestedComps elFbtn_source'>
                            <Fbtn_source ref={(el) => this._elFbtn_source = el} appActions={this.appActions} deviceInfo={this.deviceInfo} locStrings={this.locStrings} />
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
