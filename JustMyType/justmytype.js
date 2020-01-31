let sentences = [
  "All of these sentences MUST be cat related.",
  "The black cat jumped over the brebtis table.",
  "Junie and Salem are BAD cats who love to be loud.",
  "Boebie is Maggies cat. He is a streetboi.",
  "Cats were considered to be Royalty in ancient Egypt."
];

let sentIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentIndex];
let currentLetter = currentSentence[letterIndex];

$("#sentence").text(currentSentence);
$("target-letter").text(currentLetter);
$("#keyboard-upper-container").hide();

$(document).keydown(function(e) {
  if (e.keyCode === 16) {
    $("#keyboard-upper-container").show();
    $("keyboard-lower-container").hide();
  }
});

$(document).keyup(function(e) {
  if (e.keyCode === 16) {
    $("#keyboard-upper-container").hide();
    $("keyboard-lower-container").show();
  }
  $(".highlight").removeClass("highlight");
});

$(document).keypress(function(e) {
  //console.log('#'+ e.keyCode);
  $("#" + e.keyCode).addClass("highlight");
  if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
    $("#feedback").append('<span class= "glyphicon glyphicon-ok"></span>');
  } else {
    $("#feedback").append('<span class= "glyphicon glyphicon-remove"></span>');
  }
  $("#yellow-block").css("left", "+=17.5px");
  letterIndex++;
  currentLetter = currentSentence[letterIndex];
  $("#target-letter").text(currentLetter);
  //if sentences ends..
  //if game ends?..
});





