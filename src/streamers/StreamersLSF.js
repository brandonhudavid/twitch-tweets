import React from 'react';
import ludwig from '../img/streamers/ludwig.jpg';
import sodapoppin from '../img/streamers/sodapoppin.jpg';
import xqc from '../img/streamers/xqc.jpg';
import charlie from '../img/streamers/charlie.jpg';
import mizkif from '../img/streamers/mizkif.jpg';
import pokimane from '../img/streamers/pokimane.jpg';
import hasanabi from '../img/streamers/hasanabi.jpg';
import sykkuno from '../img/streamers/sykkuno.jpg';
import Bounce from 'react-reveal/Bounce';

export class StreamersLSF extends React.Component {
    constructor(props) {
        super(props);
        this.delay = 100;
    }
  
    render() {
        return (
            <div className="streamers-container">
                <div className="streamers-containerLeft">
                    <Bounce left delay={this.delay}>
                        <div className="streamlink streamlink1">
                            <a href="https://twitter.com/REALMizkif" target="_blank"><img className="streamer streamer1" src={mizkif} alt="Mizkif" />
                            <span className="streamtext streamtext1">Mizkif</span>
                            </a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+400}>
                    <div className="streamlink streamlink2">
                    <a href="https://twitter.com/hasanthehun" target="_blank"><img className="streamer streamer2" src={hasanabi} alt="HasanAbi" />
                            <span className="streamtext streamtext2">HasanAbi</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+100}>
                    <div className="streamlink streamlink3">
                    <a href="https://twitter.com/xQc" target="_blank"><img className="streamer streamer3" src={xqc} alt="xQc" />
                            <span className="streamtext streamtext3">xQc</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+500}>
                    <div className="streamlink streamlink4">
                    <a href="https://twitter.com/MoistCr1TiKaL" target="_blank"><img className="streamer streamer4" src={charlie} alt="MoistCr1TiKaL" />
                            <span className="streamtext streamtext4">MoistCr1TiKaL</span></a>
                        </div>
                    </Bounce> 
                </div>
                <div className="streamers-containerRight">
                    <Bounce right delay={this.delay+200}>
                    <div className="streamlink streamlink5">
                    <a href="https://twitter.com/pokimanelol" target="_blank"><img className="streamer streamer5" src={pokimane} alt="Pokimane" />
                            <span className="streamtext streamtext5">Pokimane</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+600}>
                    <div className="streamlink streamlink6">
                    <a href="https://twitter.com/Sodapoppintv" target="_blank"><img className="streamer streamer6" src={sodapoppin} alt="Sodapoppin" />
                            <span className="streamtext streamtext6">Sodapoppin</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+300}>
                    <div className="streamlink streamlink7">
                    <a href="https://twitter.com/LudwigAhgren" target="_blank"><img className="streamer streamer7" src={ludwig} alt="Ludwig" />
                            <span className="streamtext streamtext7">Ludwig</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+700}>
                    <div className="streamlink streamlink8">
                    <a href="https://twitter.com/Sykkuno" target="_blank"><img className="streamer streamer8" src={sykkuno} alt="Sykkuno" />
                            <span className="streamtext streamtext8">Sykkuno</span></a>
                        </div>
                    </Bounce> 
                </div>
            </div>
        )
    }
}

export default StreamersLSF;