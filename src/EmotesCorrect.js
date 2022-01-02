import React from 'react';
import PogChamp from './img/emotes/PogChamp.png';
import PogChamp2 from './img/emotes/PogChamp2.png';
import POGGERS from './img/emotes/POGGERS.png';
import POGGERS2 from './img/emotes/POGGERS2.png';
import PogU from './img/emotes/PogU.png';
import PogU2 from './img/emotes/PogU2.png';
import Roll from 'react-reveal/Roll';

export class EmotesCorrect extends React.Component {
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
                <img className="emote emote2" src={POGGERS} alt="emote2" />
                <span className="tooltiptext tooltiptext2">POGGERS</span>
                </div>
            </Roll>
            <Roll bottom delay={400}>
            <div className="tooltip tooltip3">
                <img className="emote emote3" src={PogU} alt="emote3" />
                <span className="tooltiptext tooltiptext3">PogU</span>
                </div>
            </Roll>
            <Roll bottom delay={1000}>
            <div className="tooltip tooltip4">
                <img className="emote emote4" src={PogU2} alt="emote4" />
                <span className="tooltiptext tooltiptext4">PogU</span>
                </div>
            </Roll>
            <Roll bottom delay={800}>
            <div className="tooltip tooltip5">
                <img className="emote emote5" src={PogChamp2} alt="emote5" />
                <span className="tooltiptext tooltiptext5">PogChamp</span>
                </div>
            </Roll>
            <Roll bottom delay={600}>
            <div className="tooltip tooltip6">
                <img className="emote emote6" src={POGGERS2} alt="emote6" />
                <span className="tooltiptext tooltiptext6">POGGERS</span>
                </div>
            </Roll>
        </div>
      );
  }
}

export default EmotesCorrect;
