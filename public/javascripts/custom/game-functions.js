function randomInt(min,max,exclude) {
  var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  while (randNum !== exclude) {
   return randNum;
  }
}

var selectMole = (function() {
  var exclude = 0;
  var getExclude = function() {
    exclude = parseInt($("div.mole:visible").attr('id').match(/\d+/)[0]);
  }
  return function(){
    if ($("div.mole:visible").length < 1 ) {
      $("#mole-num-" + randomInt(1,9,exclude)).show("slide", { direction: "down" });
      getExclude();
    } else {
      getExclude();
      $("div.mole:visible").hide();
      $("#mole-num-" + randomInt(1,9,exclude)).show("slide", { direction: "down" });
    }
  }
})();

function incrementScore(){
  $("#counter").html( parseInt($("#counter").text()) + 1 );
}

function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
