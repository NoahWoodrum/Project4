// Business Logic for Pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
  let costFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let cost = 5.0;
  if (this.size === "large") {
    cost += 10.0;
  } else if (this.size === "medium") {
    cost += 5.0;
  }
//some sort of checkmark function so that every toppin is worth 1 dollar


}

// UI Logic
$(document).ready(function () {
  let pizzaOrders = [];
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
  }
  