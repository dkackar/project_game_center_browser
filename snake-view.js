var view = {

  clearScreen: function() {
    $('.snake-container').empty();
    $('.food').empty();
    $('.snake').empty();
    $('.snake').append('<div class="snake-block"></div>')
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
    $snakeDiv = $('.snake-block');
    return (!collision($boardDiv, $snakeDiv));
  },
  
  getKeyPress: function() {
    //var refreshIntervalId;

    window.addEventListener('keydown', function(eventObject) {
      pressedKey = eventObject.code;
      
      clearInterval(refreshIntervalId);
      
      refreshIntervalId = setInterval(function() {
        var $snakeDiv = $('.snake');

        switch (pressedKey) {
        case 'ArrowRight':
          var left = $snakeDiv.css('left');
          $snakeDiv.css( 'left', parseInt(left) + 10 );
          foodCollision();
          break;

        case 'ArrowLeft':
          var left = $snakeDiv.css('left');
          $snakeDiv.css( 'left', parseInt(left) - 10 );
          foodCollision();
          break;

        case 'ArrowUp':
          var top = $snakeDiv.css('top');
          $snakeDiv.css( 'top', parseInt(top) - 10 );
          foodCollision();
          break;

        case 'ArrowDown':
          var top = $snakeDiv.css('top');
          $snakeDiv.css( 'top', parseInt(top) + 10 );
          foodCollision();
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

  
}