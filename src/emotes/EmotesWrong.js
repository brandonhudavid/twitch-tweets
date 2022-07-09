import React from 'react';
import KEKW from '../img/emotes/KEKW.png';
import OMEGALUL from '../img/emotes/OMEGALUL.png';
import LULW from '../img/emotes/LULW.png';
import LULW2 from '../img/emotes/LULW2.png';
import KEKW2 from '../img/emotes/KEKW2.png';
import OMEGALUL2 from '../img/emotes/OMEGALUL2.png';
import Bounce from 'react-reveal/Bounce';

export class EmotesWaiting extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="emotes-wrapper">
            <Bounce top>
                <div className="tooltip tooltip1">
                    <img className="emote emote1" src={KEKW} alt="emote1" />
                    <span className="tooltiptext tooltiptext1">KEKW</span>
                </div>
            </Bounce>
            <Bounce left delay={200}>
            <div className="tooltip tooltip2">
                <img className="emote emote2" src={OMEGALUL} alt="emote2" />
                <span className="tooltiptext tooltiptext2">OMEGALUL</span>
                </div>
            </Bounce>
            <Bounce bottom delay={400}>
            <div className="tooltip tooltip3">
                <img className="emote emote3" src={LULW} alt="emote3" />
                <span className="tooltiptext tooltiptext3">LULW</span>
                </div>
            </Bounce>
            <Bounce top delay={1000}>
            <div className="tooltip tooltip4">
                <img className="emote emote4" src={LULW2} alt="emote4" />
                <span className="tooltiptext tooltiptext4">LULW</span>
                </div>
            </Bounce>
            <Bounce right delay={800}>
            <div className="tooltip tooltip5">
                <img className="emote emote5" src={KEKW2} alt="emote5" />
                <span className="tooltiptext tooltiptext5">KEKW</span>
                </div>
            </Bounce>
            <Bounce bottom delay={600}>
            <div className="tooltip tooltip6">
                <img className="emote emote6" src={OMEGALUL2} alt="emote6" />
                <span className="tooltiptext tooltiptext6">OMEGALUL</span>
                </div>
            </Bounce>
        </div>
      );
  }
}

export default EmotesWaiting;
