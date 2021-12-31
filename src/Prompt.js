import React from 'react';

export class Prompt extends React.Component {
  constructor(props) {
      super(props);
      this.prompt1 = "Who made this tweet?"
      this.prompt2 = "Correct! Click the arrow for the next tweet."
      this.prompt3 = "Hold this L. Click the arrow to continue."
      this.state = {
          prompt: "Who made this tweet?"
      }
  }

  componentDidUpdate() {
      if (!this.props.guessed && this.state.prompt != this.prompt1) {
          this.setState({
              prompt: this.prompt1
          })
      } else if ((this.props.guessed && this.props.correct) && this.state.prompt != this.prompt2) {
        this.setState({
            prompt: this.prompt2
        })
      } else if ((this.props.guessed && !this.props.correct) && this.state.prompt != this.prompt3) {
        this.setState({
            prompt: this.prompt3
        })
      }
  }

  render() {
      return (
        <h2 id="game-prompt">{this.state.prompt}</h2>
      );
  }
}

export default Prompt;
