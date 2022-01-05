import React from 'react';
import TweetFake from './TweetFake';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <TweetFake tweetAttr={this.props.tweetAttr} />
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;
  