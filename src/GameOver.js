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
                  {this.props.flavorText[0]}
              </h2>
              <h2 style={{marginTop: "-12px"}}>
                  {this.props.flavorText[1]}
              </h2>
          </div>
        </div>
      );
  }
}

export default GameOver;
