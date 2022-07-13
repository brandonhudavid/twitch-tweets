// to randomize ordering of TweetsBank tweets
function shuffleObject(obj){
    // new obj to return
  let newObj = {};
    // create keys array
  var keys = Object.keys(obj);
    // randomize keys array
    keys.sort(function(a,b){return Math.random()- 0.5;});
  // save in new array
    keys.forEach(function(k) {
        newObj[k] = obj[k];
});
  return newObj;
}