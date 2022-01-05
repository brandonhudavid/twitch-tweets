import React from 'react';

class TestError extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        throw 'Test Error';
        return;
    }
  }

  export default TestError;
  