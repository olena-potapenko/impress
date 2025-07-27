const allProducts = {
  tshirt: [
    { name: "Футболка синя", price: 100, image: "img/tshirt1.jpg" },
    { name: "Футболка блакитна", price: 100, image: "img/tshirt2.jpg" }
  ],
  dress: [{ name: "Сукня біла", price: 300, image: "img/dress1.jpg" }],
  jeans: [{ name: "Джинси", price: 400, image: "img/jeans1.jpg" }],
  shorts: [{ name: "Шорти", price: 150, image: "img/shorts1.jpg" }],
  skirt: [{ name: "Спідниця", price: 200, image: "img/skirt1.jpg" }]
};

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category') || 'tshirt';
}

function renderProducts(category) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  const items = allProducts[category] || [];
  items.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
      <p><strong>${product.price} грн</strong></p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Додати в кошик</button>
    `;
    container.appendChild(div);
  });
  updateCartCount();
}

function changeCategory(category) {
  window.history.pushState({}, '', `?category=${category}`);
  renderProducts(category);
}

function changeColor(color) {
  document.body.style.background = color;
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart-count').textContent = cart.length;
}

window.onload = () => {
  renderProducts(getCategoryFromURL());
  updateCartCount();
};