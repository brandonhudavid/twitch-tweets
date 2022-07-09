import React from 'react';

export class Landing extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div>
          <div id="landing">
              <h1>Are you a parasocial Andy?</h1>
              <h3>Guess who tweeted what.
                  <br/>
                  Prove that you are your favorite streamer’s biggest superfan.</h3>
          </div>
        </div>
      );
  }
}

export default Landing;
