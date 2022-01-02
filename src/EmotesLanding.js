import React from 'react';
import PogChamp from './img/emotes/PogChamp.png';
import LULW from './img/emotes/LULW.png';
import monkaW from './img/emotes/monkaW.png';
import KEKW2 from './img/emotes/KEKW2.png';
import POGGERS2 from './img/emotes/POGGERS2.png';
import PepeLaugh2 from './img/emotes/PepeLaugh2.png';
import Roll from 'react-reveal/Roll';

export class EmotesLanding extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="emotes-wrapper">
            <Roll bottom>
                <div className="tooltip tooltip1">
                    <img className="emote emote1" src={PogChamp} alt="emote1" />
                    <span className="tooltiptext tooltiptext1">PogChamp</span>
                </div>
            </Roll>
            <Roll bottom delay={200}>
            <div className="tooltip tooltip2">
                <img className="emote emote2" src={monkaW} alt="emote2" />
                <span className="tooltiptext tooltiptext2">monkaW</span>
                </div>
            </Roll>
            <Roll bottom delay={400}>
            <div className="tooltip tooltip3">
                <img className="emote emote3" src={LULW} alt="emote3" />
                <span className="tooltiptext tooltiptext3">LULW</span>
                </div>
            </Roll>
            <Roll bottom delay={1000}>
            <div className="tooltip tooltip4">
                <img className="emote emote4" src={POGGERS2} alt="emote4" />
                <span className="tooltiptext tooltiptext4">POGGERS</span>
                </div>
            </Roll>
            <Roll bottom delay={800}>
            <div className="tooltip tooltip5">
                <img className="emote emote5" src={KEKW2} alt="emote5" />
                <span className="tooltiptext tooltiptext5">KEKW</span>
                </div>
            </Roll>
            <Roll bottom delay={600}>
            <div className="tooltip tooltip6">
                <img className="emote emote6" src={PepeLaugh2} alt="emote6" />
                <span className="tooltiptext tooltiptext6">PepeLaugh</span>
                </div>
            </Roll>
        </div>
      );
  }
}

export default EmotesLanding;
