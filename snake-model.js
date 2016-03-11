var model = {
 
  foodPosition: undefined,

  generateFoodPosition: function() {
    row =  Math.floor((Math.random() * 15));
    col =  Math.floor((Math.random() * 20));
    this.foodPosition = "square-" + String(row) + "-" + String(col);
    console.log("Food Position is " + this.foodPosition);
    $('#' + this.foodPosition).addClass('food');
    return this.foodPosition;
  },


}