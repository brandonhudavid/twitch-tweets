import React from 'react';

export class TweetEmbed extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidUpdate() {
    if (this.props.displayed) {
      document.querySelector(".twitter-tweet-container").classList.remove("hide-display");
    }
    if (!this.props.displayed) {
      document.querySelector(".twitter-tweet-container").classList.add("hide-display");
  }
}

  render() {
      return (
        <div className="twitter-tweet-container hide-display">
            <blockquote className="twitter-tweet" align="center" data-cards="hidden"><a href={this.props.href}></a></blockquote>
        </div>
      );
  }
}

export default TweetEmbed;
