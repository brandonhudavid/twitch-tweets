import React from 'react';

export class Prompt extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          prompt: "Who made this tweet?"
      }
  }

  componentDidUpdate() {
      if (!this.props.guessed && this.state.prompt != "Who made this tweet?") {
          this.setState({
              prompt: "Who made this tweet?"
          })
          document.querySelector("#game-prompt").classList.remove("prompt-click");
      } else if ((this.props.guessed && this.props.correct) && this.state.prompt != "Correct! Click here for the next tweet.") {
        this.setState({
            prompt: "Correct! Click here for the next tweet."
        })
        document.querySelector("#game-prompt").classList.add("prompt-click");
      } else if ((this.props.guessed && !this.props.correct) && this.state.prompt != "Hold this L, pussy") {
        this.setState({
            prompt: "Hold this L, pussy"
        })
        document.querySelector("#game-prompt").classList.remove("prompt-click");
      }
  }

  render() {
      return (
        <h2 id="game-prompt">{this.state.prompt}</h2>
      );
  }
}

export default Prompt;
