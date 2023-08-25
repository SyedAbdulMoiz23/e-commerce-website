// You can add JavaScript functionality here
// For example, handling the Add to Cart button click event
var addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    alert('Product added to cart!');
  });
});
