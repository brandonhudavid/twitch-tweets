import React from 'react';

export class Stats extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
        <div id="stats-container">
            <h2>My Stats</h2>
            <div className="stats-left">
                Games played:<br/>
                Tweets seen:<br/>
                Tweets correct:<br/>
                % correct:<br/>
                Average score:<br/>
                Longest drought:
            </div>
            <div className="stats-right">
                {localStorage.getItem("gamesPlayed")} <br/>
                {localStorage.getItem("tweetsSeen")} <br/>
                {localStorage.getItem("tweetsCorrect")} <br/>
                {Math.round(localStorage.getItem("tweetsCorrect") / localStorage.getItem("tweetsSeen") * 10000) / 100}% <br/>
                {Math.round(localStorage.getItem("tweetsCorrect") / localStorage.getItem("gamesPlayed") * 1000) / 1000} <br/>
                {localStorage.getItem("longestDrought")}
            </div>
        </div>
      );
  }
}

export default Stats;
