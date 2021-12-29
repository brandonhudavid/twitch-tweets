import React from 'react';
import Choice from './Choice';

export class MultipleChoice extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="mc-container">
            <div className="mc-row">
                <Choice text={this.props.choices[0]} onClick={() => this.props.onClick(this.props.choices[0])}/>
                <Choice text={this.props.choices[1]} onClick={() => this.props.onClick(this.props.choices[1])}/>
            </div>
            <div className="mc-row">
                <Choice text={this.props.choices[2]} onClick={() => this.props.onClick(this.props.choices[2])}/>
                <Choice text={this.props.choices[3]} onClick={() => this.props.onClick(this.props.choices[3])}/>
            </div>
        </div>
        
      );
  }
}

export default MultipleChoice;
