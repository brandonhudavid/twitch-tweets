import React from 'react';
import ludwig from './img/streamers/ludwig.png';
import sodapoppin from './img/streamers/sodapoppin.png';
import xqc from './img/streamers/xqc.jpeg';
import charlie from './img/streamers/charlie.png';
import mizkif from './img/streamers/mizkif.png';
import pokimane from './img/streamers/pokimane.png';
import hasanabi from './img/streamers/hasanabi.png';
import sykkuno from './img/streamers/sykkuno.png';
import Flip from 'react-reveal/Flip';

export class EmotesLayer extends React.Component {
  constructor(props) {
      super(props);
      this.delay = 1600;
  }

  render() {
    return (
        <div className="streamers-container">
            <Flip  delay={this.delay}>
                <div className="streamlink streamlink1">
                    <a href="https://twitter.com/REALMizkif" target="_blank"><img className="streamer streamer1" src={mizkif} alt="streamer1" />
                    <span className="streamtext streamtext1">Mizkif</span>
                    </a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+400}>
            <div className="streamlink streamlink2">
            <a href="https://twitter.com/hasanthehun" target="_blank"><img className="streamer streamer2" src={hasanabi} alt="streamer2" />
                    <span className="streamtext streamtext2">HasanAbi</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+100}>
            <div className="streamlink streamlink3">
            <a href="https://twitter.com/xQc" target="_blank"><img className="streamer streamer3" src={xqc} alt="streamer3" />
                    <span className="streamtext streamtext3">xQc</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+500}>
            <div className="streamlink streamlink4">
            <a href="https://twitter.com/MoistCr1TiKaL" target="_blank"><img className="streamer streamer4" src={charlie} alt="streamer4" />
                    <span className="streamtext streamtext4">MoistCr1TiKaL</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+200}>
            <div className="streamlink streamlink5">
            <a href="https://twitter.com/pokimanelol" target="_blank"><img className="streamer streamer5" src={pokimane} alt="streamer5" />
                    <span className="streamtext streamtext5">Pokimane</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+600}>
            <div className="streamlink streamlink6">
            <a href="https://twitter.com/Sodapoppintv" target="_blank"><img className="streamer streamer6" src={sodapoppin} alt="streamer6" />
                    <span className="streamtext streamtext6">Sodapoppin</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+300}>
            <div className="streamlink streamlink7">
            <a href="https://twitter.com/LudwigAhgren" target="_blank"><img className="streamer streamer7" src={ludwig} alt="streamer7" />
                    <span className="streamtext streamtext7">Ludwig</span></a>
                </div>
            </Flip> 
            <Flip  delay={this.delay+700}>
            <div className="streamlink streamlink8">
            <a href="https://twitter.com/Sykkuno" target="_blank"><img className="streamer streamer8" src={sykkuno} alt="streamer8" />
                    <span className="streamtext streamtext8">Sykkuno</span></a>
                </div>
            </Flip> 
        </div>
    );
  }
}

export default EmotesLayer;
