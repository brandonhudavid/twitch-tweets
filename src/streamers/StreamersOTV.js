import React from 'react';
import pokimane from '../img/streamers/pokimane.jpg';
import toast from '../img/streamers/disguisedtoast.jpg';
import lily from '../img/streamers/lilypichu.jpg';
import michael from '../img/streamers/michaelreeves.jpg';
import scarra from '../img/streamers/scarra.jpg';
import sydeon from '../img/streamers/sydeon.jpg';
import quarterjade from '../img/streamers/quarterjade.jpg';
import masayoshi from '../img/streamers/itzmasayoshi.jpg';
import yvonnie from '../img/streamers/yvonnie.jpg';
import Bounce from 'react-reveal/Bounce';

export class StreamersOTV extends React.Component {
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
                            <a href="https://twitter.com/disguisedtoast" target="_blank"><img className="streamer streamer1" src={toast} alt="DisguisedToast" />
                            <span className="streamtext streamtext1">DisguisedToast</span>
                            </a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+400}>
                    <div className="streamlink streamlink2">
                    <a href="https://twitter.com/lilypichu" target="_blank"><img className="streamer streamer2" src={lily} alt="LilyPichu" />
                            <span className="streamtext streamtext2">LilyPichu</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+100}>
                    <div className="streamlink streamlink3">
                    <a href="https://twitter.com/scarra" target="_blank"><img className="streamer streamer3" src={scarra} alt="Scarra" />
                            <span className="streamtext streamtext3">Scarra</span></a>
                        </div>
                    </Bounce> 
                    <Bounce left delay={this.delay+500}>
                    <div className="streamlink streamlink4">
                    <a href="https://twitter.com/quarterjade" target="_blank"><img className="streamer streamer4" src={quarterjade} alt="QuarterJade" />
                            <span className="streamtext streamtext4">QuarterJade</span></a>
                        </div>
                    </Bounce>
                    <Bounce left delay={this.delay+600}>
                    <div className="streamlink streamlink9">
                    <a href="https://twitter.com/yvonnie" target="_blank"><img className="streamer streamer9" src={yvonnie} alt="Yvonnie" />
                            <span className="streamtext streamtext9">Yvonnie</span></a>
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
                    <a href="https://twitter.com/michaelreeves" target="_blank"><img className="streamer streamer6" src={michael} alt="Michael Reeves" />
                            <span className="streamtext streamtext6">Michael Reeves</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+300}>
                    <div className="streamlink streamlink7">
                    <a href="https://twitter.com/sydeon" target="_blank"><img className="streamer streamer7" src={sydeon} alt="Sydeon" />
                            <span className="streamtext streamtext7">Sydeon</span></a>
                        </div>
                    </Bounce> 
                    <Bounce right delay={this.delay+700}>
                    <div className="streamlink streamlink10">
                    <a href="https://twitter.com/itzmasayoshi" target="_blank"><img className="streamer streamer10" src={masayoshi} alt="Masayoshi" />
                            <span className="streamtext streamtext8">Masayoshi</span></a>
                        </div>
                    </Bounce> 
                </div>
            </div>
        )
    }
}

export default StreamersOTV;