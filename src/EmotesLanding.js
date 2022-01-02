import React from 'react';
import PogChamp from './img/emotes/PogChamp.png';
import LULW from './img/emotes/LULW.png';
import monkaW from './img/emotes/monkaW.png';
import KEKW2 from './img/emotes/KEKW2.png';
import POGGERS2 from './img/emotes/POGGERS2.png';
import PepeLaugh2 from './img/emotes/PepeLaugh2.png';
import Bounce from 'react-reveal/Bounce';

export class EmotesLanding extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="emotes-wrapper">
            <Bounce top delay={500}>
                <div className="tooltip tooltip1">
                    <img className="emote emote1" src={PogChamp} alt="emote1" />
                    <span className="tooltiptext tooltiptext1">PogChamp</span>
                </div>
            </Bounce>
            <Bounce left delay={600}>
            <div className="tooltip tooltip2">
                <img className="emote emote2" src={monkaW} alt="emote2" />
                <span className="tooltiptext tooltiptext2">monkaW</span>
                </div>
            </Bounce>
            <Bounce bottom delay={700}>
            <div className="tooltip tooltip3">
                <img className="emote emote3" src={LULW} alt="emote3" />
                <span className="tooltiptext tooltiptext3">LULW</span>
                </div>
            </Bounce>
            <Bounce top delay={800}>
            <div className="tooltip tooltip4">
                <img className="emote emote4" src={POGGERS2} alt="emote4" />
                <span className="tooltiptext tooltiptext4">POGGERS</span>
                </div>
            </Bounce>
            <Bounce right delay={900}>
            <div className="tooltip tooltip5">
                <img className="emote emote5" src={KEKW2} alt="emote5" />
                <span className="tooltiptext tooltiptext5">KEKW</span>
                </div>
            </Bounce>
            <Bounce bottom delay={1000}>
            <div className="tooltip tooltip6">
                <img className="emote emote6" src={PepeLaugh2} alt="emote6" />
                <span className="tooltiptext tooltiptext6">PepeLaugh</span>
                </div>
            </Bounce>
        </div>
      );
  }
}

export default EmotesLanding;
