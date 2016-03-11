var view = {
  init: function(){
    console.log('Setting up game board');
    for (var i=0; i < 10; i++) {
      for(var j=0; j < 10; j++) {
        $('.snake-container').append('<div class="grid-square" id="square-' + ((10 * i) + j) + 
          '"></div>');
      };
      $('.snake-container').append('</br>');
    };

  }
}