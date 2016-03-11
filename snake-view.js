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

  moveSnake: function(eventObject) {
    pressedKey = eventObject.code;
    console.log("Key pressed is :" + pressedKey);
    
  },

  getKeyPress: function() {
    window.addEventListener('keydown', function(eventObject) {
      pressedKey = eventObject.code;

      setInterval(function() {
        switch (pressedKey) {
        case 'ArrowRight':
          var left = $('.snake').css('left');
          $('.snake').css( 'left', parseInt(left) + 10 );
          break;

        case 'ArrowLeft':
          var left = $('.snake').css('left');
          $('.snake').css( 'left', parseInt(left) - 10 );
          break;

        case 'ArrowUp':
          var top = $('.snake').css('top');
          $('.snake').css( 'top', parseInt(top) - 10 );
          break;

        case 'ArrowDown':
          var top = $('.snake').css('top');
          $('.snake').css( 'top', parseInt(top) + 10 );
          break;
        default:
          break;
      }}, 100);
    });
  }
}