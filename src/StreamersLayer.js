import React from 'react';
import ludwig from './img/streamers/ludwig.png';
import sodapoppin from './img/streamers/sodapoppin.png';
import xqc from './img/streamers/xqc.jpeg';
import charlie from './img/streamers/charlie.png';
import mizkif from './img/streamers/mizkif.png';
import pokimane from './img/streamers/pokimane.png';
import hasanabi from './img/streamers/hasanabi.png';
import sykkuno from './img/streamers/sykkuno.png';
import Roll from 'react-reveal/Roll';

export class EmotesLayer extends React.Component {
  constructor(props) {
      super(props);
      this.delay = 1600;
  }

  render() {
    return (
        <div className="streamers-container">
            <Roll bottom delay={this.delay}>
                <img className="streamer streamer1" src={mizkif} alt="streamer1" />
            </Roll> 
            <Roll bottom delay={this.delay+400}>
                <img className="streamer streamer2" src={hasanabi} alt="streamer2" />
            </Roll> 
            <Roll bottom delay={this.delay+100}>
                <img className="streamer streamer3" src={xqc} alt="streamer3" />
            </Roll> 
            <Roll bottom delay={this.delay+500}>
                <img className="streamer streamer4" src={charlie} alt="streamer4" />
            </Roll> 
            <Roll bottom delay={this.delay+200}>
                <img className="streamer streamer5" src={pokimane} alt="streamer5" />
            </Roll> 
            <Roll bottom delay={this.delay+600}>
                <img className="streamer streamer6" src={sodapoppin} alt="streamer6" />
            </Roll> 
            <Roll bottom delay={this.delay+300}>
                <img className="streamer streamer7" src={ludwig} alt="streamer7" />
            </Roll> 
            <Roll bottom delay={this.delay+700}>
                <img className="streamer streamer8" src={sykkuno} alt="streamer8" />
            </Roll> 
        </div>
    );
  }
}

export default EmotesLayer;
