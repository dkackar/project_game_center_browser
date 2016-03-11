var view = {

  init: function() {
    console.log('Setting up game board');
    for (var i=0; i < 15; i++) {
      for(var j=0; j < 20; j++) {
        $('.snake-container').append('<div class="grid-square" id="square-' +
           String(i) + "-" + String(j) + '"></div>');
      };
      $('.snake-container').append('</br>');
    }
  },

  showFood: function(pos) {
    target = "#" + pos;
    $(target).css("background","blue");
  },

  moveSnake: function() {

    $('body').keypress(function(eventbject) {
          console.log("Key pressed");
      var c = String.fromCharCode(eventObject.which);
      console.log("Key pressed is :" + c);
    });
  },

}