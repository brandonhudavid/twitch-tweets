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
                <Choice text={this.props.choice1}/>
                <Choice text={this.props.choice2}/>
            </div>
            <div className="mc-row">
                <Choice text={this.props.choice3}/>
                <Choice text={this.props.choice4}/>
            </div>
        </div>
        
      );
  }
}

export default MultipleChoice;
