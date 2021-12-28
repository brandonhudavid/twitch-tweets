import React from 'react';

export class TweetHidden extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="tweet-card">
            <div className="tweet-container">
                <span className="pfp-hidden"></span>
                <div className="handle-container">
                    <span className="handle-hidden"></span>
                    <span className="handle-hidden"></span>
                </div>
                <p className="tweet-text">{this.props.text}</p>
                <p className="tweet-datetime">7:07 PM · Nov 28, 2021</p>
            </div>
        </div>
      );
  }
}

export default TweetHidden;
