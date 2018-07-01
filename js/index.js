$(document).ready(function() {
  
  // set the background to a random color
  var hue = 350;
  
  // cache the jquery elements to prevent dom queries during the animation events
  var $body = $("body");
  var $svg = $("svg");
  var $word = $(".word");




  $("h1").on('click touchstart', function() {

    // replace the header with a random word
    var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);

    // update the background color
    hue += 47;
    $body.css("background-color", "hsl(" + hue + ", 100%, 50%)");
  });
});


words = ["Alex","Fabio","Jorge","Joas","Jonathan","Vanessa"]