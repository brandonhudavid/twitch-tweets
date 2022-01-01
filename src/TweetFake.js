// import React from 'react';
// import ludwig from './img/streamers/ludwig.png';
// import sodapoppin from './img/streamers/sodapoppin.png';
// import xqc from './img/streamers/xqc.jpeg';
// import charlie from './img/streamers/charlie.png';
// import mizkif from './img/streamers/mizkif.png';
// import pokimane from './img/streamers/pokimane.png';
// import hasanabi from './img/streamers/hasanabi.png';
// import sykkuno from './img/streamers/sykkuno.png';
// import PogChamp from './img/emotes/PogChamp.png';

// export class TweetFake extends React.Component {
//   constructor(props) {
//       super(props);
//       switch(this.props.tweetAttr["name"]) {
//         case "Mizkif":
//             this.state = {icon : mizkif}
//             break;
//         case "Ludwig":
//             this.state = {icon : ludwig}
//             break;
//         case "Sodapoppin":
//             this.state = {icon : sodapoppin}
//             break;
//         case "xQc":
//             this.state = {icon : xqc}
//             break;
//         case "MoistCr1TiKaL":
//             this.state = {icon : charlie}
//             break;
//         case "Pokimane":
//             this.state = {icon : pokimane}
//             break;
//         case "HasanAbi":
//             this.state = {icon : hasanabi}
//             break;
//         case "Sykkuno":
//             this.state = {icon : sykkuno}
//             break;
//         default:
//             this.state = {icon : PogChamp}

//       }
//   }

//   render() {
//       return (
//         <div className="tweet-card tweet-fake">
//             <p>{this.props.visible}</p>
//             <div className={this.props.visible ? "tweet-whiteout" : "tweet-whiteout"}></div>
//             <div className="tweet-container">
//             <img className="tweet-fake-icon" src={this.state.icon} alt="Twitter icon" />
//                 <div className="handle-container">
//                     <h2>{this.props.tweetAttr["name"]}</h2>
//                     <h3>@{this.props.tweetAttr["handle"]}</h3>
//                 </div>
//                 <p className="tweet-text">{this.props.tweetAttr["text"]}</p>
//                 <p className="tweet-datetime">{this.props.tweetAttr["datetime"]}</p>
//             </div>
//         </div>
//       );
//   }
// }

// export default TweetFake;
