function renderCart() {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart-items');
  const totalElement = document.getElementById('total-price');
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = '<p>Кошик порожній.</p>';
    totalElement.textContent = '';
    return;
  }
  let total = 0;
  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" width="50">
      <span>${item.name}</span> — <strong>${item.price} грн</strong>
      <button onclick="removeItem(${index})">✕</button>
    `;
    container.appendChild(div);
    total += item.price;
  });
  totalElement.textContent = Загальна сума: ${total} грн;
}

function removeItem(index) {
  const items = JSON.parse(localStorage.getItem('cart') || '[]');
  items.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(items));
  renderCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

window.onload = renderCart;