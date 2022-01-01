import React from 'react';
import KEKW from './img/emotes/KEKW.png';
import OMEGALUL from './img/emotes/OMEGALUL.png';
import LULW from './img/emotes/LULW.png';
import LULW2 from './img/emotes/LULW2.png';
import KEKW2 from './img/emotes/KEKW2.png';
import OMEGALUL2 from './img/emotes/OMEGALUL2.png';
import Roll from 'react-reveal/Roll';

export class EmotesWaiting extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="emotes-wrapper">
            <Roll bottom>
                <img className="emote emote1" src={KEKW} alt="emote1" />
            </Roll>
            <Roll bottom delay={200}>
                <img className="emote emote2" src={OMEGALUL} alt="emote2" />
            </Roll>
            <Roll bottom delay={400}>
                <img className="emote emote3" src={LULW} alt="emote3" />
            </Roll>
            <Roll bottom delay={1000}>
                <img className="emote emote4" src={LULW2} alt="emote4" />
            </Roll>
            <Roll bottom delay={800}>
                <img className="emote emote5" src={KEKW2} alt="emote5" />
            </Roll>
            <Roll bottom delay={600}>
                <img className="emote emote6" src={OMEGALUL2} alt="emote6" />
            </Roll>
        </div>
      );
  }
}

export default EmotesWaiting;
