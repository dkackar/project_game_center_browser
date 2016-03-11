var controller = {
  init: function() {
    clearInterval(refreshIntervalId);
    view.clearScreen();
    view.resetSnake();
    view.init();
    var pos = model.generateFoodPosition();
    view.getKeyPress();
  }


}