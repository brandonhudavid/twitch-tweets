import React from 'react';
import StreamersOTV from '../streamers/StreamersOTV';
import StreamersLSF from '../streamers/StreamersLSF';

export class StreamersLayer extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
        selectState: "otv"
    }
  }

  componentDidUpdate() {
    if (this.state.selectState != this.props.selection) {
      this.setState({
          selectState: this.props.selection
      })
    }
}

  render() {
    if (this.state.selectState == "otv") {
        return <StreamersOTV />
    }
    if (this.state.selectState == "lsf") {
        return <StreamersLSF />
    }
    return (<div></div>);
  }
}

export default StreamersLayer;
