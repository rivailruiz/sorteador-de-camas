
function go(){

  var hue = 350;
  var $body = $("body");
  var $svg = $("svg");
  var $word = $(".word");
  
  var word = words[Math.floor(Math.random() * words.length)] + "!";
    $word.text(word);
    hue += 47;
    
    $body.css("background-color", "hsl(" + hue + ", 100%, 50%)");
}

words = ["Alex","Fabio","Jorge","Joas","Jonathan","Vanessa"]