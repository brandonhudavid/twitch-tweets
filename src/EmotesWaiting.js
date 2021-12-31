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
        <div>
            <Roll bottom>
                <img className="emote emote1" src={PauseChamp} alt="emote1" />
            </Roll>
            <Roll bottom delay={200}>
                <img className="emote emote2" src={monkaW} alt="emote2" />
            </Roll>
            <Roll bottom delay={400}>
                <img className="emote emote3" src={PepeLaugh} alt="emote3" />
            </Roll>
            <Roll bottom delay={1000}>
                <img className="emote emote4" src={PepeLaugh2} alt="emote4" />
            </Roll>
            <Roll bottom delay={800}>
                <img className="emote emote5" src={PauseChamp2} alt="emote5" />
            </Roll>
            <Roll bottom delay={600}>
                <img className="emote emote6" src={monkaW2} alt="emote6" />
            </Roll>
        </div>
      );
  }
}

export default EmotesWaiting;
