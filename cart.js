function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartContainer.innerHTML = '';

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

  totalPriceElement.textContent = `Загальна сума: ${total} грн`;
}

function removeItem(index) {
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  items.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(items));
  renderCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

// 🛍️ Функція купівлі
function buyItems() {
  const items = JSON.parse(localStorage.getItem('cart')) || [];

  if (items.length === 0) {
    alert("Ваш кошик порожній.");
    return;
  }

  // Можна тут зробити відправку даних на сервер, якщо буде бекенд
  alert("Дякуємо за покупку! Ваше замовлення оформлено.");

  // Очищення кошика
  clearCart();

  // Можна перекинути на головну
  // window.location.href = "index.html";
}

window.addEventListener('DOMContentLoaded', renderCart);