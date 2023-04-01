const cartButtons = document.querySelectorAll(".accept-buy");
const cart = document.querySelector(".cart-popup");
const closeCartButton = document.querySelector(".close-button-cart-popup");

for (let cartButton of cartButtons) {
  cartButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.add("cart-popup-show");
  });
}

closeCartButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.classList.remove("cart-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cart.classList.contains("cart-popup-show")) {
      evt.preventDefault();
      cart.classList.remove("cart-popup-show");
    }
  }
});
