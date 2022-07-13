// Subfunction that turns JSON of tweet data to properly formatted TweetBank
var newObj = {}
for (var i=0; i < OTK_TweetsBank.length; i++) {
  newObj[OTK_TweetsBank[i]["tweetId"]] = OTK_TweetsBank[i]
  delete newObj[OTK_TweetsBank[i]["tweetId"]]["tweetId"]
}
console.log(newObj)