import React from 'react';
import otk from '../img/groups/otk.png';
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
              {/* <div className="streamlink streamlink1">
                  <img alt="otk" src={otk} className="selected" onClick={() => this.props.onClick("otk")} />
                  <span className="streamtext streamtext1 selected">One True King</span>
              </div> */}
                <div className="streamlink streamlink1">
                    <img alt="lsf" src={lsf} className="selected" onClick={() => this.props.onClick("lsf")} />
                    <span className="streamtext streamtext1 selectLSF selected">r/LivestreamFail</span>
                </div>
              </div>
          </div>
        </div>
      );
  }
}

export default Select;
