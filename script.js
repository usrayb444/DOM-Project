const num = document.querySelectorAll(".num");
const opPlus = document.querySelectorAll(".opPlus");
const opMins = document.querySelectorAll(".opMins");


// Incresing number of items
opPlus.forEach(function (element, index) {
  element.addEventListener("click", function () {
    num[index].innerHTML = Number(num[index].innerHTML) + 1;
    CalculatePrice();
  });
});

// Decresing number of items
opMins.forEach(function (element, index) {
  element.addEventListener("click", function () {
    if (Number(num[index].innerHTML) === 1) {
      return false;
    } else {
      num[index].innerHTML = Number(num[index].innerHTML) - 1;
      CalculatePrice();
    }
  });
});
// Calculate The total price 
function CalculatePrice() {
  var items = document.querySelectorAll(".item");
  var totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    totalPrice +=
      Number(items[i].querySelector(".price").innerHTML) *
      Number(items[i].querySelector(".num").innerHTML);
  }
  document.getElementById("totalPrice").innerHTML = totalPrice;
}
// Removing item from the shopping cart
function removeItem(button) {
  // Get the parent element of the button (item) and remove it
  var item = button.parentNode;
  item.parentNode.removeChild(item);

  // Update the total price after removing an item
  CalculatePrice();
}


// Call the CalculatePrice function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    CalculatePrice();
});
// Favorite Button
function toggleFavorite(button) {
    button.classList.toggle('active');
}
