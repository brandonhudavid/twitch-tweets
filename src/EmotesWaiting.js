import React from 'react';
import PauseChamp from './img/emotes/PauseChamp.png';
import PauseChamp2 from './img/emotes/PauseChamp2.png';
import monkaW from './img/emotes/monkaW.png';
import monkaW2 from './img/emotes/monkaW2.png';
import PepeLaugh from './img/emotes/PepeLaugh.png';
import PepeLaugh2 from './img/emotes/PepeLaugh2.png';
import Roll from 'react-reveal/Roll';

export class EmotesWaiting extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="emotes-wrapper">
            <Roll bottom>
                <div className="tooltip tooltip1">
                    <img className="emote emote1" src={PepeLaugh} alt="emote1" />
                    <span className="tooltiptext tooltiptext1">PepeLaugh</span>
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
                <img className="emote emote3" src={PauseChamp} alt="emote3" />
                <span className="tooltiptext tooltiptext3">PauseChamp</span>
                </div>
            </Roll>
            <Roll bottom delay={1000}>
            <div className="tooltip tooltip4">
                <img className="emote emote4" src={PauseChamp2} alt="emote4" />
                <span className="tooltiptext tooltiptext4">PauseChamp</span>
                </div>
            </Roll>
            <Roll bottom delay={800}>
            <div className="tooltip tooltip5">
                <img className="emote emote5" src={PepeLaugh2} alt="emote5" />
                <span className="tooltiptext tooltiptext5">PepeLaugh</span>
                </div>
            </Roll>
            <Roll bottom delay={600}>
            <div className="tooltip tooltip6">
                <img className="emote emote6" src={monkaW2} alt="emote6" />
                <span className="tooltiptext tooltiptext6">monkaW</span>
                </div>
            </Roll>
        </div>
      );
  }
}

export default EmotesWaiting;
