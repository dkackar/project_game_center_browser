var controller = {
  init: function() {
    view.clearScreen();
    view.resetSnake();
    view.init();
    var pos = model.generateFoodPosition();
    view.getKeyPress();
  }


}