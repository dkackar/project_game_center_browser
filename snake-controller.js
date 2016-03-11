var controller = {
  init: function() {
    view.init();
    var pos = model.generateFoodPosition();
    view.showFood(pos);
    view.getKeyPress();
  }
}