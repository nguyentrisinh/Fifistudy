import React from 'react';
import ReactJWPlayer from 'react-jw-player';

class VideoFilm extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount = () => {
        const player = window.jwplayer('player').setup({
            file: '../static/media/video.mp4',
            tracks: [{
                file: "../static/media/sub.vtt",
                label:"Eng-Vie",
                kind:"captions",
                "default": true
            },
                {
                    file: "../static/media/sub.vtt",
                    label:"Eng",
                    kind:"captions"
                }],
        });
        player.on('captionsChanged',()=>{
            alert('Change')
        })
    }
    render(){
        return (
            <div className="video-film">
                <div className="video-film__wrap">
                    <div className="video-film__video-container">
                        <div className="video-film__video">
                            <div id="player">Loading the player...</div>
                            {/*<ReactJWPlayer*/}
                            {/*playerId='player'*/}
                            {/*playerScript={require('../../static/js/jwplayer')}*/}
                            {/*playlist={*/}
                            {/*[*/}
                            {/*{*/}
                            {/*file:"../static/media/video.mp4",*/}
                            {/*tracks:*/}
                            {/*[{*/}
                            {/*file: "../static/media/sub.vtt",*/}
                            {/*label: 'English',*/}
                            {/*kind: 'captions',*/}
                            {/*'default': true*/}
                            {/*}]*/}

                            {/*}*/}
                            {/*]*/}
                            {/*}*/}
                            {/*/>*/}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default VideoFilm