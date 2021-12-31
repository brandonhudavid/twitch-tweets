import React from 'react';

export class GameOver extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div>
          <div id="gameOver">
              <h2>Score:</h2>
              <span id="gameOverScore">{this.props.score}</span>
              <h2>
                  You can do better than that.<br/>Go again.
              </h2>
          </div>
        </div>
      );
  }
}

export default GameOver;
