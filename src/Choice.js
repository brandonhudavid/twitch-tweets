import React from 'react';

export class Choice extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div className="choice choice-default" onClick={this.props.onClick}>
            {this.props.text}
        </div>
      );
  }
}

export default Choice;
