import React from 'react';

export class Footer extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="footer">
          <h2><span>Twitch Tweets |</span> twitchtweets.com</h2>
          <h2>follow our <a className="dev-link" href="https://twitter.com/TwitchTweetsGG" target="_blank">Twitter</a> for gameplay updates!</h2>
          <h2>created by <a className="dev-link" href="https://twitter.com/bdiddydavid" target="_blank">@bdiddydavid</a></h2>
        </div>
      );
  }
}

export default Footer;
