// Script pour ajouter au panier
let cart = [];

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const price = parseFloat(button.getAttribute('data-price'));

    cart.push({ product, price });
    alert(product + " ajouté au panier !");
    saveCart();
  });
});

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function displayCart() {
  loadCart();
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ${item.price}€`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

if (document.getElementById('cart-items')) {
  displayCart();
}
