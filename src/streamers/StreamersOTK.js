import React from 'react';
import asmongold from '../img/streamers/asmongold.jpg';
import esfand from '../img/streamers/esfand.jpg';
import rich from '../img/streamers/rich.jpg';
import mizkif from '../img/streamers/mizkif.jpg';
import tips from '../img/streamers/tips.jpg';
import jschlatt from '../img/streamers/jschlatt.jpg';
import cyr from '../img/streamers/cyr.jpg';
import tectone from '../img/streamers/tectone.jpg';
import emiru from '../img/streamers/emiru.jpg';
import bruce from '../img/streamers/bruce.jpg';
import nmplol from '../img/streamers/nmplol.jpg';
import Bounce from 'react-reveal/Bounce';

export class StreamersOTK extends React.Component {
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
                            <a href="https://twitter.com/REALmizkif" target="_blank"><img className="streamer streamer1" src={mizkif} alt="Mizkif" />
                            <span className="streamtext streamtext1">Mizkif</span>
                            </a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+400}>
                    <div className="streamlink streamlink2">
                    <a href="https://twitter.com/jschlatt" target="_blank"><img className="streamer streamer2" src={jschlatt} alt="jschlatt" />
                            <span className="streamtext streamtext2">Jschlatt</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+100}>
                    <div className="streamlink streamlink3">
                    <a href="https://twitter.com/esfandtv" target="_blank"><img className="streamer streamer3" src={esfand} alt="Esfand" />
                            <span className="streamtext streamtext3">Esfand</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+500}>
                    <div className="streamlink streamlink4">
                    <a href="https://twitter.com/tectone" target="_blank"><img className="streamer streamer4" src={tectone} alt="Tectone" />
                            <span className="streamtext streamtext4">Tectone</span></a>
                        </div>
                    </Bounce>
                    <Bounce left delay={this.delay+600}>
                    <div className="streamlink streamlink9">
                    <a href="https://twitter.com/richwcampbell" target="_blank"><img className="streamer streamer9" src={rich} alt="Rich Campbell" />
                            <span className="streamtext streamtext9">Rich Campbell</span></a>
                        </div>
                    </Bounce>
                    <Bounce left delay={this.delay+700}>
                    <div className="streamlink streamlink11">
                    <a href="https://twitter.com/nmplol" target="_blank"><img className="streamer streamer11" src={nmplol} alt="Nmplol" />
                            <span className="streamtext streamtext11">Nmplol</span></a>
                        </div>
                    </Bounce>
                </div>
                <div className="streamers-containerRight">
                    <Bounce right delay={this.delay+200}>
                    <div className="streamlink streamlink5">
                    <a href="https://twitter.com/emiru" target="_blank"><img className="streamer streamer5" src={emiru} alt="Emiru" />
                            <span className="streamtext streamtext5">Emiru</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+600}>
                    <div className="streamlink streamlink6">
                    <a href="https://twitter.com/Asmongold" target="_blank"><img className="streamer streamer6" src={asmongold} alt="Asmongold" />
                            <span className="streamtext streamtext6">Asmongold</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+300}>
                    <div className="streamlink streamlink7">
                    <a href="https://twitter.com/raycondones" target="_blank"><img className="streamer streamer7" src={bruce} alt="Bruce" />
                            <span className="streamtext streamtext7">Bruce</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+700}>
                    <div className="streamlink streamlink8">
                    <a href="https://twitter.com/cyr" target="_blank"><img className="streamer streamer8" src={cyr} alt="Cyr" />
                            <span className="streamtext streamtext8">Cyr</span></a>
                        </div>
                    </Bounce>
                    <Bounce right delay={this.delay+700}>
                    <div className="streamlink streamlink10">
                    <a href="https://twitter.com/tipsout" target="_blank"><img className="streamer streamer10" src={tips} alt="Tips Out" />
                            <span className="streamtext streamtext10">Tips Out</span></a>
                        </div>
                    </Bounce> 
                </div>
            </div>
        )
    }
}

export default StreamersOTK;