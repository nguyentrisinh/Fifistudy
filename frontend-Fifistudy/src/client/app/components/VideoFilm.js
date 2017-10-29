import React from 'react';
import fs from 'fs';
import parser from 'subtitles-parser';
import axios from 'axios';
const vttToJson = require("vtt-json");


class VideoFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: null,
            currentSub: "",
        };
    }

    timeString2ms(a, b) {// time(HH:MM:SS.mss) // optimized
        return a = a.split('.'), // optimized
            b = a[1] * 1 || 0, // optimized
            a = a[0].split(':'),
        b + (a[2] ? a[0] * 3600 + a[1] * 60 + a[2] * 1 : a[1] ? a[0] * 60 + a[1] * 1 : a[0] * 1) * 1e3 // optimized
    }

    componentWillMount = () => {
        axios.get("../static/media/sub.vtt")
            .then(response => {
                let stringVTT = response.data.split(/\n\s*\n/);
                stringVTT.shift();
                let sub = stringVTT.map( (item) => {
                    var parts = item.split("\n");
                    return {
                        number: parts[0],
                        start: this.timeString2ms(parts[1].split('-->')[0].trim()),
                        end: this.timeString2ms(parts[1].split('-->')[1].trim()),
                        sub:parts.slice(2,parts.length),
                    };
                });
                console.log(sub);
                this.setState({
                    sub:sub
                })
            })
            .catch(err => console.log(err));
    }

    readFile = () => {


        // var reader = new FileReader();
        // var string = reader.readAsText('../static/media/sub.vtt');
        //


    }

    componentDidMount = () => {
        const player = window.jwplayer('player').setup({
            file: '../static/media/video.mp4',
            tracks: [{
                file: "../static/media/sub.vtt",
                label: "Eng-Vie",
                kind: "captions",
                "default": true
            }],
        });
        player.on('captionsChanged', () => {
            alert('Change')
        })
        player.on('time', (data) => {
            if (this.state.sub) {
                console.log(data.position * 1000);
                let currentLine = this.state.sub.find(o => (o.start <= (data.position * 1000) && o.end >= (data.position * 1000)));
                console.log(currentLine);
                if (currentLine) {
                    this.setState({
                        currentSub: currentLine.sub.join("<br/>")
                            // .replace(/<\/?[^>]+(>|$)/g, "") bo tag
                    })
                }
                else {
                    this.setState({
                        currentSub: null
                    })
                }
            }
        })
    }

    render() {
        // this.readFile();
        return (
            <div className="video-film">
                <div className="container">
                    <div className="video-film__wrap">
                        <div className="video-film__video-container">
                            <div className="video-film__video">
                                <div id="player">Loading the player...</div>
                            </div>
                            <div style={{color: "white"}} className="video-film__subtitle">
                                <div dangerouslySetInnerHTML={{__html:this.state.currentSub}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VideoFilm