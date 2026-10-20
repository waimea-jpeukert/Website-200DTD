
const EXCHANGE_RATE_EUR = 0.92;
const translations = {
  en: {
    nav: { home: 'Home', shop: 'Shop', story: 'Story', contact: 'Contact' },
    cart: { button: 'Cart', title: 'Cart', total: 'Total', checkout: 'Checkout', empty: 'Your cart is empty.', close: 'Close' },
    hero: {
      tag: 'Race Control · Sector Seven',
      title: 'F1‑inspired merch<br>for the ones who watch every sector.',
      subtitle: 'Sector Seven is built for the fans who know the difference between a clean lap and a chaos restart.',
      primaryBtn: 'Shop Drop 01',
      secondaryBtn: 'Brand Story'
    },
    countdown: {
      label: 'First Drop in',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    shop: { sectionTitle: 'Collection', heading: 'Drop 01 — Race Control Pack', back: '← Back to Shop', view: 'View Product', add: 'Add to Cart' },
    story: {
      sectionTitle: 'Story',
      heading: 'Born in Sector Seven.',
      p1: 'Sector Seven is the part of the track where everything feels a bit too fast and a bit too close. The brand comes from that feeling — watching every lap, every flag, every safety car deployment and still wanting more.',
      p2: 'F1‑inspired streetwear built around track maps, race control typography and restart chaos. Designed for the fans who know every sector time, every marshal post and every restart rule.'
    },
    contact: {
      sectionTitle: 'Contact',
      heading: 'Radio check.',
      text: 'Ideas for new prints, collabs or custom race‑week drops? Send a message.'
    },
    form: { name: 'Name', email: 'Email', message: 'Message', submit: 'Send message' },
    product: {
      color: 'Color',
      size: 'Size',
      addToCart: 'Add to Cart',
      reviews: 'Customer Reviews',
      write: 'Write a Review',
      reviewTitle: 'Review Title',
      rating: 'Rating',
      image: 'Add Image (optional)',
      reviewText: 'Review',
      submitReview: 'Submit Review',
      backToShop: '← Back to Shop',
      close: 'Close'
    }
  },
  de: {
    nav: { home: 'Start', shop: 'Shop', story: 'Story', contact: 'Kontakt' },
    cart: { button: 'Warenkorb', title: 'Warenkorb', total: 'Gesamt', checkout: 'Zur Kasse', empty: 'Dein Warenkorb ist leer.', close: 'Schließen' },
    hero: {
      tag: 'Rennleitung · Sector Seven',
      title: 'F1‑inspirierte Merch<br>für alle, die jede Sektion verfolgen.',
      subtitle: 'Sector Seven ist für Fans gemacht, die den Unterschied zwischen sauberem Lap und chaotischem Restart kennen.',
      primaryBtn: 'Shop Drop 01',
      secondaryBtn: 'Markengeschichte'
    },
    countdown: {
      label: 'Erster Drop in',
      days: 'Tage',
      hours: 'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden'
    },
    shop: { sectionTitle: 'Kollektion', heading: 'Drop 01 — Race Control Pack', back: '← Zurück zum Shop', view: 'Produkt ansehen', add: 'In den Warenkorb' },
    story: {
      sectionTitle: 'Story',
      heading: 'Gegründet in Sector Seven.',
      p1: 'Sector Seven ist jener Teil der Strecke, an dem alles ein bisschen zu schnell und ein bisschen zu nah wirkt. Die Marke entsteht aus genau diesem Gefühl — bei jedem Lap, jeder Flagge, jeder Safety-Car-Phase mitzuspielen und trotzdem mehr zu wollen.',
      p2: 'F1‑inspirierte Streetwear mit Track-Maps, Race-Control-Schrift und Restart-Chaos. Entworfen für Fans, die jede Sektorzeit, jeden Marshal-Posten und jede Restart-Regel kennen.'
    },
    contact: {
      sectionTitle: 'Kontakt',
      heading: 'Funk check.',
      text: 'Ideen für neue Prints, Kollaborationen oder individuelle Race‑Week Drops? Schick uns eine Nachricht.'
    },
    form: { name: 'Name', email: 'E-Mail', message: 'Nachricht', submit: 'Nachricht senden' },
    product: {
      color: 'Farbe',
      size: 'Größe',
      addToCart: 'In den Warenkorb',
      reviews: 'Kundenbewertungen',
      write: 'Bewertung schreiben',
      reviewTitle: 'Bewertungstitel',
      rating: 'Bewertung',
      image: 'Bild hinzufügen (optional)',
      reviewText: 'Bewertung',
      submitReview: 'Bewertung senden',
      backToShop: '← Zurück zum Shop',
      close: 'Schließen'
    }
  }
};

const PRODUCTS = {
  hoodie: {
    title: { en: 'Race Control Dept. Hoodie', de: 'Race Control Dept. Hoodie' },
    tag: { en: 'Hoodie · Drop 01', de: 'Hoodie · Drop 01' },
    desc: {
      en: 'Heavyweight black hoodie with front S7 track‑map logo.',
      de: 'Schwerer schwarzer Hoodie mit Front-S7-Track-Map-Logo.'
    },
    basePrice: 89,
    tagline: { en: 'Unisex · S–3XL', de: 'Unisex · S–3XL' },
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    defaultColor: 'black',
    colors: {
      black: { label: { en: 'Black', de: 'Schwarz' }, hex: '#050608', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-back.png'] },
      gray: { label: { en: 'Gray', de: 'Grau' }, hex: '#7c7f86', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-back.png'] },
      white: { label: { en: 'White', de: 'Weiß' }, hex: '#f4f4f4', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-back.png'] },
      navy: { label: { en: 'Navy', de: 'Marine' }, hex: '#101d31', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/hoodie-back.png'] }
    }
  },
  tee: {
    title: { en: 'Safety Car Operator Tee', de: 'Safety Car Operator Tee' },
    tag: { en: 'Tee · Drop 01', de: 'Tee · Drop 01' },
    desc: {
      en: 'White tee with minimal S7 chest logo and back print.',
      de: 'Weißes T-Shirt mit minimalem S7-Brustlogo und Rückenprint.'
    },
    basePrice: 39,
    tagline: { en: 'Unisex · S–3XL', de: 'Unisex · S–3XL' },
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    defaultColor: 'white',
    colors: {
      black: { label: { en: 'Black', de: 'Schwarz' }, hex: '#050608', images: ['product%20pictures/tee-front.png', 'product%20pictures/tee-back.png', 'product%20pictures/tee-side-front.png', 'product%20pictures/tee-side-back.png'] },
      gray: { label: { en: 'Gray', de: 'Grau' }, hex: '#7c7f86', images: ['product%20pictures/tee-front.png', 'product%20pictures/tee-back.png', 'product%20pictures/tee-side-front.png', 'product%20pictures/tee-side-back.png'] },
      white: { label: { en: 'White', de: 'Weiß' }, hex: '#f4f4f4', images: ['product%20pictures/tee-front.png', 'product%20pictures/tee-back.png', 'product%20pictures/tee-side-front.png', 'product%20pictures/tee-side-back.png'] },
      navy: { label: { en: 'Navy', de: 'Marine' }, hex: '#101d31', images: ['product%20pictures/tee-front.png', 'product%20pictures/tee-back.png', 'product%20pictures/tee-side-front.png', 'product%20pictures/tee-side-back.png'] }
    }
  },
  joggers: {
    title: { en: 'Marshal Line Joggers', de: 'Marshal Line Joggers' },
    tag: { en: 'Joggers · Drop 01', de: 'Joggers · Drop 01' },
    desc: {
      en: 'Black joggers with subtle S7 logo and flag detail.',
      de: 'Schwarze Joggers mit dezentem S7-Logo und Flaggen-Detail.'
    },
    basePrice: 69,
    tagline: { en: 'Unisex · S–3XL', de: 'Unisex · S–3XL' },
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    defaultColor: 'black',
    colors: {
      black: { label: { en: 'Black', de: 'Schwarz' }, hex: '#050608', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-back.png'] },
      gray: { label: { en: 'Gray', de: 'Grau' }, hex: '#7c7f86', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-back.png'] },
      white: { label: { en: 'White', de: 'Weiß' }, hex: '#f4f4f4', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-back.png'] },
      navy: { label: { en: 'Navy', de: 'Marine' }, hex: '#101d31', images: ['Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-front.png', 'Screenshots%20von%20Arbeit/Kleiderentwicklung/joggers-back.png'] }
    }
  }
};

let currentLanguage = 'en';
let currentProductId = null;
let productPageState = { color: null, size: null };
const cartKey = 'sectorSevenCart';
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let activeFilter = 'all';

function getProductText(productId, field) {
  const product = PRODUCTS[productId];
  if (!product || !product[field]) return '';
  return product[field][currentLanguage] || product[field].en || '';
}

function formatPrice(value) {
  const numeric = Number(value) || 0;
  const display = currentLanguage === 'de' ? numeric * EXCHANGE_RATE_EUR : numeric;
  const symbol = currentLanguage === 'de' ? '€' : '$';
  return `${symbol}${display.toFixed(2)}`;
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const keys = element.dataset.i18n.split('.');
    let value = translations[lang];

    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        value = null;
        break;
      }
    }

    if (value && typeof value === 'string') {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.product-price').forEach((el) => {
    const productId = el.dataset.productId;
    if (productId && PRODUCTS[productId]) {
      el.textContent = formatPrice(PRODUCTS[productId].basePrice);
    }
  });

  document.querySelectorAll('[data-role="view-product"]').forEach((el) => {
    el.textContent = translations[lang].shop.view;
  });

  document.querySelectorAll('[data-role="add-cart"]').forEach((el) => {
    el.textContent = translations[lang].shop.add;
  });

  if (document.getElementById('backToShopBtn')) {
    document.getElementById('backToShopBtn').textContent = translations[lang].product.backToShop;
  }
  if (document.getElementById('productPageAddBtn')) {
    document.getElementById('productPageAddBtn').textContent = translations[lang].product.addToCart;
  }
  if (document.getElementById('customerReviewsTitle')) {
    document.getElementById('customerReviewsTitle').textContent = translations[lang].product.reviews;
  }
  if (document.getElementById('writeReviewTitle')) {
    document.getElementById('writeReviewTitle').textContent = translations[lang].product.write;
  }
  if (document.getElementById('reviewTitleLabel')) {
    document.getElementById('reviewTitleLabel').textContent = translations[lang].product.reviewTitle;
  }
  if (document.getElementById('reviewRatingLabel')) {
    document.getElementById('reviewRatingLabel').textContent = translations[lang].product.rating;
  }
  if (document.getElementById('reviewImageLabel')) {
    document.getElementById('reviewImageLabel').textContent = translations[lang].product.image;
  }
  if (document.getElementById('reviewInputLabel')) {
    document.getElementById('reviewInputLabel').textContent = translations[lang].product.reviewText;
  }
  if (document.getElementById('submitReviewBtn')) {
    document.getElementById('submitReviewBtn').textContent = translations[lang].product.submitReview;
  }
  if (document.getElementById('productColorLabel')) {
    document.getElementById('productColorLabel').textContent = translations[lang].product.color;
  }
  if (document.getElementById('productSizeLabel')) {
    document.getElementById('productSizeLabel').textContent = translations[lang].product.size;
  }
  if (document.getElementById('cartPanel') && document.getElementById('cartPanel').style.display === 'block') {
    renderCart();
  }
  if (currentProductId) {
    renderProductPage();
  }
}

function toggleLanguage() {
  setLanguage(currentLanguage === 'en' ? 'de' : 'en');
}

function closeProductPageFromNav(){
  const productPage = document.getElementById('product_page');
  if (productPage && productPage.style.display === 'block') {
    closeProductPage();
  }
}

function scrollToSection(id){
  const el=document.getElementById(id);
  if(!el) return;
  window.scrollTo({top:el.offsetTop-70,behavior:"smooth"});
}

function updateCartCount(){
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    badge.textContent = count;
  }
}

function saveCart(){
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function addProductToCart(productId, size = null, color = null) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.defaultColor;

  const existing = cart.find(item => item.id === productId && item.size === selectedSize && item.color === selectedColor);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, size: selectedSize, color: selectedColor, quantity: 1 });
  }

  saveCart();
  toggleCart(true);
}

function changeQuantity(productId, size, color, delta) {
  const item = cart.find(entry => entry.id === productId && entry.size === size && entry.color === color);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(entry => !(entry.id === productId && entry.size === size && entry.color === color));
  }

  saveCart();
}

function renderCart(){
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartItems || !cartTotal) return;

  if (!cart.length) {
    cartItems.innerHTML = '<div style="color:var(--muted);padding:1rem 0;">' + translations[currentLanguage].cart.empty + '</div>';
    cartTotal.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map((item) => {
    const product = PRODUCTS[item.id];
    const price = product.basePrice;
    total += price * item.quantity;
    const productTitle = getProductText(item.id, 'title');
    const colorLabel = product.colors[item.color]?.label[currentLanguage] || item.color;

    return `
      <div style="display:flex;gap:.8rem;padding:.8rem;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:rgba(255,255,255,.02);">
        <img src="${product.colors[item.color].images[0]}" alt="${productTitle}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;">
        <div style="flex:1;min-width:0;">
          <div style="font-size:.85rem;font-weight:600;">${productTitle}</div>
          <div style="color:var(--muted);font-size:.75rem;">${colorLabel} · ${item.size}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:.5rem;">
            <div style="display:flex;align-items:center;gap:.5rem;border:1px solid var(--border);border-radius:999px;padding:.2rem .45rem;">
              <button type="button" onclick="changeQuantity('${item.id}', '${item.size}', '${item.color}', -1)" style="background:none;border:none;color:var(--text);cursor:pointer;">−</button>
              <span style="min-width:1rem;text-align:center;">${item.quantity}</span>
              <button type="button" onclick="changeQuantity('${item.id}', '${item.size}', '${item.color}', 1)" style="background:none;border:none;color:var(--text);cursor:pointer;">+</button>
            </div>
            <strong>${formatPrice(price * item.quantity)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = formatPrice(total);
}

function toggleCart(forceOpen){
  const overlay = document.getElementById('cartOverlay');
  const panel = document.getElementById('cartPanel');

  if (typeof forceOpen === 'boolean') {
    panel.style.display = forceOpen ? 'block' : 'none';
    overlay.style.display = forceOpen ? 'block' : 'none';
    return;
  }

  const isOpen = panel.style.display === 'block';
  panel.style.display = isOpen ? 'none' : 'block';
  overlay.style.display = isOpen ? 'none' : 'block';
}

function renderProductPage(){
  if (!currentProductId) return;
  const product = PRODUCTS[currentProductId];
  if (!product) return;

  productPageState.color = productPageState.color || product.defaultColor;
  productPageState.size = productPageState.size || product.sizes[0];

  document.getElementById('product_page_title').textContent = getProductText(currentProductId, 'title');
  document.getElementById('product_page_tag').textContent = product.tag[currentLanguage] || product.tag.en;
  document.getElementById('product_page_desc').textContent = product.desc[currentLanguage] || product.desc.en;
  document.getElementById('product_page_tagline').textContent = product.tagline[currentLanguage] || product.tagline.en;
  document.getElementById('product_page_price').textContent = formatPrice(product.basePrice);

  const colorContainer = document.getElementById('product_color_options');
  colorContainer.innerHTML = Object.entries(product.colors).map(([key, value]) => {
    const isActive = key === productPageState.color;
    const label = value.label[currentLanguage] || value.label.en;
    return `
      <button type="button" class="color-swatch ${isActive ? 'active' : ''}" data-color="${key}" title="${label}" style="background:${value.hex};" aria-label="${label}" onclick="selectColor('${key}')"></button>
    `;
  }).join('');

  const sizeContainer = document.getElementById('product_size_options');
  sizeContainer.innerHTML = product.sizes.map((size) => {
    const isActive = size === productPageState.size;
    return `<button type="button" class="size-option ${isActive ? 'active' : ''}" onclick="selectSize('${size}')">${size}</button>`;
  }).join('');

  const selectedColorData = product.colors[productPageState.color];
  const mainImage = document.getElementById('product_main_image');
  const imageList = document.getElementById('product_image_list');

  mainImage.src = selectedColorData.images[0];
  imageList.innerHTML = selectedColorData.images.map((image) => `
    <img src="${image}" alt="${getProductText(currentProductId, 'title')}" style="width:60px;border-radius:6px;cursor:pointer;" onclick="document.getElementById('product_main_image').src='${image}'">
  `).join('');
}

function selectColor(color) {
  if (!currentProductId) return;
  productPageState.color = color;
  renderProductPage();
}

function selectSize(size) {
  if (!currentProductId) return;
  productPageState.size = size;
  renderProductPage();
}

function openProductPage(id){
  currentProductId = id;
  const product = PRODUCTS[id];
  if (!product) return;

  productPageState.color = product.defaultColor;
  productPageState.size = product.sizes[0];

  document.getElementById('products').style.display = 'none';
  document.getElementById('hero').style.display = 'none';
  document.getElementById('product_page').style.display = 'block';

  renderProductPage();
  renderAll();
}

function closeProductPage(){
  document.getElementById('product_page').style.display = 'none';
  document.getElementById('products').style.display = 'block';
  document.getElementById('hero').style.display = 'block';
}

const countdownTarget = new Date(Date.now() + 44 * 24 * 60 * 60 * 1000);

function updateCountdown(){
  const now = new Date();
  let diff = countdownTarget - now;

  if (diff <= 0) {
    diff = 0;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

function addReview(){
  const name = document.getElementById('review_name').value.trim() || 'Anonymous';
  const title = document.getElementById('review_title').value.trim() || 'No title';
  const text = document.getElementById('review_input').value.trim();
  const stars = parseInt(document.getElementById('review_stars').value, 10);
  const file = document.getElementById('review_image').files[0];

  if (!text) return;

  let imageURL = '';
  if (file) {
    imageURL = URL.createObjectURL(file);
  }

  const date = new Date().toLocaleDateString('de-DE');

  const review = {
    name,
    title,
    text,
    stars,
    date,
    verified: Math.random() > 0.5,
    helpful: 0,
    image: imageURL
  };

  reviews.unshift(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  renderAll();

  document.getElementById('review_name').value = '';
  document.getElementById('review_title').value = '';
  document.getElementById('review_input').value = '';
  document.getElementById('review_image').value = '';
}

function renderAll(){
  renderReviews();
  renderSummary();
  renderBreakdown();
  renderFilters();
}

function renderReviews(){
  const list = document.getElementById('review_list');
  list.innerHTML = '';

  let filtered = reviews;
  if (activeFilter !== 'all') {
    filtered = reviews.filter(r => r.stars == activeFilter);
  }

  filtered.forEach((r, index) => {
    const item = document.createElement('div');
    item.className = 'review-item';

    const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);

    item.innerHTML = `
      <div class="review-stars">${stars}</div>
      <div class="review-title">${r.title}</div>
      <div class="review-meta">
        Reviewed by ${r.name} · ${r.date}
        ${r.verified ? '<span class="review-badge">Verified Purchase</span>' : ''}
      </div>
      <div>${r.text}</div>
      ${r.image ? `<img src="${r.image}" class="review-image">` : ''}
      <div class="review-helpful" onclick="markHelpful(${index})">
        Helpful (${r.helpful})
      </div>
      <div class="review-helpful" onclick="deleteReview(${index})">
        Delete Review
      </div>
    `;

    list.appendChild(item);
  });
}

function markHelpful(i){
  reviews[i].helpful++;
  localStorage.setItem('reviews', JSON.stringify(reviews));
  renderReviews();
}

function deleteReview(i){
  reviews.splice(i, 1);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  renderAll();
}

function renderSummary(){
  const summary = document.getElementById('review_summary');
  if (!reviews.length) {
    summary.innerHTML = 'No reviews yet.';
    return;
  }

  const avg = (reviews.reduce((a, b) => a + b.stars, 0) / reviews.length).toFixed(1);
  const stars = '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg));

  summary.innerHTML = `
    <div style="font-size:1.4rem;color:#f5c518;">${stars}</div>
    <div>${avg} out of 5</div>
    <div>${reviews.length} total ratings</div>
  `;
}

function renderBreakdown(){
  const breakdown = document.getElementById('review_breakdown');
  breakdown.innerHTML = '';

  for (let i = 5; i >= 1; i--) {
    const count = reviews.filter(r => r.stars === i).length;
    const percent = reviews.length ? (count / reviews.length) * 100 : 0;

    breakdown.innerHTML += `
      <div>${i} star</div>
      <div class="review-bar">
        <div class="review-bar-fill" style="width:${percent}%"></div>
      </div>
    `;
  }
}

function renderFilters(){
  const filters = document.getElementById('review_filters');
  filters.innerHTML = `
    <button class="btn-ghost" onclick="setFilter('all')">All</button>
    <button class="btn-ghost" onclick="setFilter(5)">5 Stars</button>
    <button class="btn-ghost" onclick="setFilter(4)">4 Stars</button>
    <button class="btn-ghost" onclick="setFilter(3)">3 Stars</button>
    <button class="btn-ghost" onclick="setFilter(2)">2 Stars</button>
    <button class="btn-ghost" onclick="setFilter(1)">1 Star</button>
  `;
}

function setFilter(f){
  activeFilter = f;
  renderReviews();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
    setLanguage(currentLanguage);
  });
