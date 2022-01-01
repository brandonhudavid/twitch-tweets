import React from 'react';

export class TweetHidden extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidUpdate() {
      if (!this.props.displayed) {
          document.querySelector(".tweet-hidden").classList.add("hide-visibility");
      }
      if (this.props.displayed) {
        document.querySelector(".tweet-hidden").classList.remove("hide-visibility");
    }
  }

  render() {
      return (
        <div className="tweet-card tweet-hidden">
            <div className="tweet-container">
                <span className="pfp-hidden"></span>
                <div className="handle-container">
                    <span className="handle-hidden"></span>
                    <span className="handle-hidden"></span>
                </div>
                <p className="tweet-text">{this.props.text}</p>
                <p className="tweet-datetime">{this.props.datetime}</p>
            </div>
        </div>
      );
  }
}

export default TweetHidden;
