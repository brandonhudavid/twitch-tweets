import React from 'react';

export class CtaPrimary extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div id={this.props.id} className="cta-primary" onClick={this.props.onClick}>
            {this.props.text}
        </div>
      );
  }
}

export default CtaPrimary;
