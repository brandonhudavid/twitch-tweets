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
        <div>
            <Roll bottom>
                <img className="emote emote1" src={PogChamp} alt="emote1" />
            </Roll>
            <Roll bottom delay={200}>
                <img className="emote emote2" src={POGGERS} alt="emote2" />
            </Roll>
            <Roll bottom delay={400}>
                <img className="emote emote3" src={PogU} alt="emote3" />
            </Roll>
            <Roll bottom delay={1000}>
                <img className="emote emote4" src={PogU2} alt="emote4" />
            </Roll>
            <Roll bottom delay={800}>
                <img className="emote emote5" src={PogChamp2} alt="emote5" />
            </Roll>
            <Roll bottom delay={600}>
                <img className="emote emote6" src={POGGERS2} alt="emote6" />
            </Roll>
        </div>
      );
  }
}

export default EmotesCorrect;
