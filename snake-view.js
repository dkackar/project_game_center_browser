var view = {

  clearScreen: function() {
    $('.snake-container').empty();
    $('.food').empty();
    $('.snake').empty();
  },

  resetSnake: function() {
    $('.snake').css({left: 0, top: 0});
  },

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

  outOfGrid: function() {
    $boardDiv = $('.snake-container');
    $snakeDiv = $('.snake');
    return (!collision($boardDiv, $snakeDiv));
  },

  getKeyPress: function() {
    window.addEventListener('keydown', function(eventObject) {
      pressedKey = eventObject.code;
      

      setInterval(function() {
        var $snakeDiv = $('.snake');
        var $foodDiv = $('.food');

        switch (pressedKey) {
        case 'ArrowRight':
          var left = $('.snake').css('left');
          $('.snake').css( 'left', parseInt(left) + 10 );
          if (collision($snakeDiv, $foodDiv)) {
            $foodDiv.removeClass('food');
            model.generateFoodPosition();
            // TODO: Make snake longer
          };

          break;

        case 'ArrowLeft':
          var left = $('.snake').css('left');
          $('.snake').css( 'left', parseInt(left) - 10 );
          if (collision($snakeDiv, $foodDiv)) {
            $foodDiv.removeClass('food');
            model.generateFoodPosition();
            // TODO: Make snake longer
          };
          break;

        case 'ArrowUp':
          var top = $('.snake').css('top');
          $('.snake').css( 'top', parseInt(top) - 10 );
          if (collision($snakeDiv, $foodDiv)) {
            $foodDiv.removeClass('food');
            model.generateFoodPosition();
            // TODO: Make snake longer
          };
          break;

        case 'ArrowDown':
          var top = $('.snake').css('top');
          $('.snake').css( 'top', parseInt(top) + 10 );
          if (collision($snakeDiv, $foodDiv)) {
            $foodDiv.removeClass('food');
            model.generateFoodPosition();
            // TODO: Make snake longer
          };
          break;
        default:    
          break;
      };
      if (outOfGrid()) {
        console.log('Game Over');
        controller.init();
      };
    }, 100);
    });
  },

  snakeGrow: function() {
    
  }

  
}