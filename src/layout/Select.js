import React from 'react';
import otv from '../img/groups/otv.png';
import lsf from '../img/groups/lsf.png';

export class Select extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div>
          <div id="select">
              <h2>Select a group of streamers to guess from.</h2>
              <div id="selection-container">
                <div className="streamlink streamlink1">
                    <img alt="otv" src={otv} className="selected" onClick={() => this.props.onClick("otv")} />
                    <span className="streamtext streamtext1 selected">OfflineTV</span>
                </div>
                <div className="streamlink streamlink2">
                    <img alt="lsf" src={lsf} onClick={() => this.props.onClick("lsf")} />
                    <span className="streamtext streamtext2">r/LivestreamFail</span>
                </div>
              </div>
          </div>
        </div>
      );
  }
}

export default Select;
