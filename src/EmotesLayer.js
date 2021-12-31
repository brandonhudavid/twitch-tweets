import React from 'react';
import EmotesLanding from './EmotesLanding';
import EmotesCorrect from './EmotesCorrect';
import EmotesWaiting from './EmotesWaiting';
import EmotesWrong from './EmotesWrong';

export class EmotesLayer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          emoteState: "landing"
      }
  }

  componentDidUpdate() {
      if (this.props.currentPage == "landing" && this.state.emoteState != "landing") {
        this.setState({
            emoteState: "landing"
        })
      } else if (this.props.currentPage == "game" && !this.props.guessed && this.state.emoteState != "waiting") {
          this.setState({
            emoteState: "waiting"
        })
    } else if (this.props.currentPage == "game" && this.props.guessed && this.props.correct && this.state.emoteState != "correct") {
        this.setState({
            emoteState: "correct"
        })
    } else if (this.props.currentPage == "game" && this.props.guessed && !this.props.correct && this.state.emoteState != "wrong") {
        this.setState({
            emoteState: "wrong"
        })
    } else if (this.props.currentPage == "gameOver" && this.state.emoteState != "gameOver") {
        this.setState({
            emoteState: "gameOver"
        })
    }
  }

  render() {
      if (this.state.emoteState == "landing") {
          return <EmotesLanding />
      }
      if (this.state.emoteState == "correct") {
          return <EmotesCorrect />
      }
      if (this.state.emoteState == "waiting") {
        return <EmotesWaiting />
    }
    if (this.state.emoteState == "wrong") {
        return <EmotesWrong />
    }
    if (this.state.emoteState == "gameOver") {
        return null;
    }
    return (<div></div>);
  }
}

export default EmotesLayer;
