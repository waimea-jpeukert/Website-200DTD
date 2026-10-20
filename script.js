// Ein einzelnes Beispielprodukt fuer den Shop.
const productName = "Safety Car Operator T-Shirt";
const productPrice = 39;

// Diese Liste speichert den Warenkorb nur waehrend die Seite offen ist.
const cart = [];

function addToCart() {
  const sizeSelect = document.getElementById("size");
  const selectedSize = sizeSelect.value;
  let matchingItem = null;

  // Suche, ob diese Groesse schon im Warenkorb liegt.
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].size === selectedSize) {
      matchingItem = cart[i];
      break;
    }
  }

  // Gleiche Groesse erhoeht die Anzahl, sonst kommt ein neuer Eintrag dazu.
  if (matchingItem !== null) {
    matchingItem.quantity = matchingItem.quantity + 1;
  } else {
    cart.push({
      name: productName,
      size: selectedSize,
      price: productPrice,
      quantity: 1
    });
  }

  renderCart();
}

function removeFromCart(itemIndex) {
  cart.splice(itemIndex, 1);
  renderCart();
}

function clearCart() {
  cart.length = 0;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("cart-total");
  const countElement = document.getElementById("cart-count");
  let total = 0;
  let itemCount = 0;

  // Zuerst die alte Darstellung entfernen.
  cartList.textContent = "";

  if (cart.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "Your cart is empty.";
    cartList.appendChild(emptyMessage);
  }

  // Fuer jeden Warenkorbeintrag eine Zeile erstellen und Werte addieren.
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const row = document.createElement("li");
    const removeButton = document.createElement("button");
    const itemIndex = i;

    row.className = "cart-row";
    row.appendChild(document.createTextNode(
      item.name + " | Size " + item.size + " | " +
      item.quantity + " x NZ$ " + item.price.toFixed(2)
    ));

    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      removeFromCart(itemIndex);
    });
    row.appendChild(removeButton);
    cartList.appendChild(row);

    total = total + item.price * item.quantity;
    itemCount = itemCount + item.quantity;
  }

  totalElement.textContent = "NZ$ " + total.toFixed(2);
  countElement.textContent = String(itemCount);
}

// Beim Laden die Anzeige vorbereiten und den Leeren-Button verbinden.
document.addEventListener("DOMContentLoaded", function () {
  renderCart();
  const clearButton = document.getElementById("clear-cart");
  clearButton.addEventListener("click", clearCart);
});
