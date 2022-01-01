import React from 'react';
import Choice from './Choice';

export class MultipleChoice extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div className="mc-container">
            <div className="mc-row">
                <Choice text={this.props.choices[0]} onClick={() => this.props.onClick(this.props.choices[0])}/>
                <Choice text={this.props.choices[1]} onClick={() => this.props.onClick(this.props.choices[1])}/>
            </div>
            <div className="mc-row">
                <Choice text={this.props.choices[2]} onClick={() => this.props.onClick(this.props.choices[2])}/>
                <Choice text={this.props.choices[3]} onClick={() => this.props.onClick(this.props.choices[3])}/>
            </div>
            {this.props.guessed ?
                <svg onClick={() => this.props.nextArrow()} id="next-arrow" width="64px" height="64px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 32C4 16.536 16.536 4 32 4C47.464 4 60 16.536 60 32C60 47.464 47.464 60 32 60C16.536 60 4 47.464 4 32ZM30.586 23.414C29.805 22.633 29.805 21.367 30.586 20.586C31.367 19.805 32.633 19.805 33.414 20.586L43.414 30.586C44.195 31.367 44.195 32.633 43.414 33.414L33.414 43.414C32.633 44.195 31.367 44.195 30.586 43.414C29.805 42.633 29.805 41.367 30.586 40.586L37.171 34H22C20.895 34 20 33.105 20 32C20 30.895 20.895 30 22 30H37.171L30.586 23.414Z"/></svg>
            : null}
            {this.props.guessed ?
                <svg onClick={() => this.props.nextArrow()} id="next-arrow-mobile" width="128px" height="128px" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 64C8 33.072 33.072 8 64 8C94.928 8 120 33.072 120 64C120 94.928 94.928 120 64 120C33.072 120 8 94.928 8 64ZM61.172 46.828C59.61 45.266 59.61 42.734 61.172 41.172C62.734 39.609 65.266 39.609 66.828 41.172L86.828 61.172C88.39 62.734 88.39 65.266 86.828 66.828L66.828 86.828C65.266 88.39 62.734 88.39 61.172 86.828C59.61 85.266 59.61 82.734 61.172 81.172L74.343 68H44C41.791 68 40 66.209 40 64C40 61.791 41.791 60 44 60H74.343L61.172 46.828Z"/></svg>
            : null}
        </div>
        
      );
  }
}

export default MultipleChoice;
