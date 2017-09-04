var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardValues = []
  for (var i = 1; i < 9; i++) {
    cardValues.push(i);
    cardValues.push(i);
  }
  var randomCards = []
  var count = cardValues.length;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var j= Math.floor(Math.random() * (max - min)) + min;
    randomCards[count] = cardValues[j];
    cardValues.splice(j, 1);
    return randomCards;
  }

  while (count > 0) {
    getRandomInt(0, count);
    count--;
  }

  return randomCards;

};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.

MatchGame.renderCards = function(cardValues, $game) {

};

  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.

MatchGame.flipCard = function($card, $game) {

};
*/
