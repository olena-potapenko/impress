const allProducts = {
  tshirt: [
    { name: "Футболка синя", price: 150, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка блакитна", price: 100, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка", price: 200, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка біла, без принту", price: 50, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка чорна, з принтом", price: 300, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка рожева з метеликами", price: 120, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка червона", price: 340, image: "./img/tshirt-icon.jpg" },
    { name: "Футболка зелена", price: 100, image: "./img/tshirt-icon.jpg" }
  ],
  dress: [
    { name: "Сукня біла", price: 250, image: "./img/dress-icon.jpg" },
    { name: "Сукня з квітами", price: 500, image: "./img/dress-icon.jpg" },
    { name: "Сукня пляжна", price: 450, image: "./img/dress-icon.jpg" },
    { name: "Весільна суня", price: 350, image: "./img/dress-icon.jpg" },
    { name: "Сукня з вишивкою", price: 420, image: "./img/dress-icon.jpg" },
    { name: "Сукня рожева", price: 300, image: "./img/dress-icon.jpg" },
    { name: "Сукня з поясом", price: 280, image: "./img/dress-icon.jpg" },
    { name: "Сукня червона", price: 500, image: "./img/dress-icon.jpg" },
    { name: "Сукня чорна", price: 320, image: "./img/dress-icon.jpg" }
  ],
  jeans: [
    { name: "Джинси", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси рвані", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" },
    { name: "Джинси чорні", price: 400, image: "./img/jeans-icon.jpg" }
  ],
  shorts: [
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" },
    { name: "Шорти", price: 150, image: "./img/shorts-icon.jpg" }
  ],
  skirt: [
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
    { name: "Спідниця", price: 200, image: "./img/skirt-icon.jpg" },
  ],
  accessory: [
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" },
    { name: "Намисто", price: 200, image: "./img/accessory-icon.jpg" }
  ]
};

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category') || 'tshirt';
}
function goToIndex() {
  window.location.href="index.html"
}

function renderProducts(category) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  const items = allProducts[category] || [];
  items.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `

<div onclick='addToCart(${JSON.stringify(product)})' class="card">
<div class="image"><img src="${product.image}" alt="${product.name}"></div>
  <span class="title">Clothes</span>
  <span class="price"><strong>${product.price} грн</strong></span>
</div>`
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