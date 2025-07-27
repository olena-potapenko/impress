// Функція для оновлення кошика
function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartContainer.innerHTML = ''; // Очищення перед оновленням

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Кошик порожній.</p>';
    totalPriceElement.textContent = '';
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('cart-item');

    productDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="70">
      <div>
        <p><strong>${item.name}</strong></p>
        <p>${item.price} грн</p>
      </div>
      <button onclick="removeItem(${index})">✕</button>
    `;

    cartContainer.appendChild(productDiv);
    total += item.price;
  });

  totalPriceElement.textContent = Загальна сума: ${total} грн;
}

// Видалення товару
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Очищення кошика повністю
function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

// Ініціалізація при завантаженні сторінки
window.addEventListener('DOMContentLoaded', renderCart);
