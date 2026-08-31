/* =========================================
   MACHINERY SHOP - MAIN SCRIPT
   PRODUCT + SEARCH + CATEGORY + CART
   ========================================= */

/* =========================================
   CART STATE MANAGEMENT
========================================= */

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cartData) {
    localStorage.setItem("cart", JSON.stringify(cartData));
}

/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {
    let cart = getCart();

    if (typeof products === "undefined" || !Array.isArray(products)) {
        console.error("products array unavailable!");
        return;
    }

    const product = products.find(p => String(p.id) === String(productId));

    if (!product) {
        console.error("Product not found!");
        return;
    }

    const existingIndex = cart.findIndex(item => String(item.id) === String(productId));

    if (existingIndex > -1) {
        cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.bnName || product.title || product.name || 'Product',
            price: Number(product.price) || 0,
            image: product.image || '',
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
    alert(`"${product.bnName || product.title || product.name}" কার্টে যোগ করা হয়েছে!`);
}

/* =========================================
   CART COUNT UPDATE
========================================= */

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((total, item) => total + (Number(item.quantity) || 1), 0);

    // Update Bottom & Header Badges
    const countBottom = document.getElementById("cart-count");
    const countHeader = document.getElementById("header-cart-count");
    
    if (countBottom) countBottom.innerText = totalQty;
    if (countHeader) countHeader.innerText = totalQty;

    // Update by Class if available
    document.querySelectorAll(".cart-count").forEach(element => {
        element.innerText = totalQty;
    });
}

/* =========================================
   REMOVE & QUANTITY MANAGEMENT
========================================= */

function removeFromCart(index) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);
    saveCart(cart);
    updateCartCount();
    showCart();
}

function changeCartQuantity(index, change) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;

    cart[index].quantity = (Number(cart[index].quantity) || 1) + change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCount();
    showCart();
}

/* =========================================
   CART TOTAL & DISPLAY
========================================= */

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
}

function showCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (!cartContainer) return;

    const cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="no-result">
                🛒<br><br>
                আপনার Cart এখনো খালি।
                <br><br>
                <a href="index.html" style="color:#16a34a; font-weight:bold;">Shopping শুরু করুন →</a>
            </div>`;

        if (totalElement) totalElement.innerText = "৳ 0";
        return;
    }

    cart.forEach((product, index) => {
        const item = document.createElement("div");
        item.className = "cart-item";
        const qty = Number(product.quantity) || 1;
        const price = Number(product.price) || 0;
        const subtotal = price * qty;

        item.innerHTML = `
            <h3>${product.name}</h3>
            <p>দাম: ${price > 0 ? '৳ ' + price.toLocaleString() : 'যোগাযোগ করুন'}</p>
            <div class="cart-quantity">
                <button type="button" onclick="changeCartQuantity(${index}, -1)">−</button>
                <strong>${qty}</strong>
                <button type="button" onclick="changeCartQuantity(${index}, 1)">+</button>
            </div>
            <p>Subtotal: <strong>${price > 0 ? '৳ ' + subtotal.toLocaleString() : 'যোগাযোগ করুন'}</strong></p>
            <button type="button" onclick="removeFromCart(${index})" style="color:red; margin-top:5px; background:none; border:none; cursor:pointer;">Remove</button>
        `;

        cartContainer.appendChild(item);
    });

    if (totalElement) {
        totalElement.innerText = "৳ " + getCartTotal().toLocaleString();
    }
}

/* =========================================
   PRODUCT IMAGE HELPER
========================================= */

function getProductImage(product) {
    if (!product.image) return "⚙️";

    const image = String(product.image);

    if (
        image.includes("/") ||
        image.includes(".jpg") ||
        image.includes(".jpeg") ||
        image.includes(".png") ||
        image.includes(".webp") ||
        image.includes(".gif")
    ) {
        const displayName = product.bnName || product.name || product.title;
        return `
            <img
                src="${image}"
                alt="${displayName}"
                loading="lazy"
                style="width:100%; height:100%; object-fit:cover;"
                onerror="this.style.display='none';"
            >
        `;
    }

    return image;
}

/* =========================================
   PRODUCT CARD UI CREATOR
========================================= */

function createProductCard(product) {
    const displayName = product.bnName || product.title || product.name;
    const priceDisplay = product.price > 0 
        ? `৳ ${Number(product.price).toLocaleString()}` 
        : "দাম জানতে যোগাযোগ করুন";

    const oldPrice = (product.oldPrice && product.oldPrice > 0)
        ? `<div class="old-price">৳ ${Number(product.oldPrice).toLocaleString()}</div>`
        : "";

    const badge = product.badge
        ? `<span class="offer">${product.badge}</span>`
        : "";

    const rating = product.rating
        ? `<div class="rating">⭐⭐⭐⭐⭐ ${product.rating}</div>`
        : "";

    const page = product.page || `product.html?id=${product.id}`;
    const keywordsAttr = Array.isArray(product.keywords) ? product.keywords.join(" ").toLowerCase() : "";

    return `
        <div
            class="product"
            data-name="${String(product.name || product.title || "").toLowerCase()}"
            data-bnname="${String(product.bnName || "").toLowerCase()}"
            data-keywords="${keywordsAttr}"
            data-category="${String(product.category || "").toLowerCase()}"
        >
            <a href="${page}" class="product-image">
                ${badge}
                ${getProductImage(product)}
            </a>

            <div class="product-info">
                <h3>${displayName}</h3>
                ${rating}
                <div class="price">${priceDisplay}</div>
                ${oldPrice}
                <button type="button" onclick="addToCart('${product.id}')" class="view-product">Add to Cart</button>
            </div>
        </div>
    `;
}

/* =========================================
   LOAD & RENDER PRODUCTS
========================================= */

function loadProducts() {
    const container = document.getElementById("product-container") || document.querySelector(".products");

    if (!container) return;

    if (typeof products === "undefined" || !Array.isArray(products)) {
        container.innerHTML = `
            <div class="no-result">
                ❌ Product loading error.<br><br>
                products.js check করুন।
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(createProductCard).join("");
}

/* =========================================
   SEARCH & FILTER
========================================= */

function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const search = input.value.toLowerCase().trim();
    const productCards = document.querySelectorAll(".product");
    let visibleProducts = 0;

    productCards.forEach(function(product) {
        const name = product.getAttribute("data-name") || "";
        const bnName = product.getAttribute("data-bnname") || "";
        const keywords = product.getAttribute("data-keywords") || "";
        const text = product.innerText.toLowerCase();

        const match =
            search === "" ||
            name.includes(search) ||
            bnName.includes(search) ||
            keywords.includes(search) ||
            text.includes(search);

        if (match) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    showNoResult(visibleProducts === 0 && search !== "");
}

function setupSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    input.addEventListener("input", searchProducts);
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
}

function filterCategory(category) {
    const productCards = document.querySelectorAll(".product");
    const selectedCategory = String(category).toLowerCase().trim();
    let visibleProducts = 0;

    productCards.forEach(function(product) {
        const productCategory = String(product.getAttribute("data-category") || "").toLowerCase().trim();
        const match = selectedCategory === "all" || productCategory === selectedCategory;

        if (match) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    showNoResult(visibleProducts === 0);

    const input = document.getElementById("searchInput");
    if (input) input.value = "";
}

function showNoResult(show) {
    let message = document.getElementById("no-product-result");

    if (!show) {
        if (message) message.remove();
        return;
    }

    if (message) return;

    const container = document.getElementById("product-container") || document.querySelector(".products");
    if (!container) return;

    message = document.createElement("div");
    message.id = "no-product-result";
    message.className = "no-result";
    message.innerHTML = `
        🔍<br><br>
        কোনো Product পাওয়া যায়নি।<br>
        অন্য কিছু Search করুন।
    `;

    container.appendChild(message);
}

function focusSearch() {
    const input = document.getElementById("searchInput");
    setTimeout(function() {
        if (input) {
            input.focus();
            input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, 200);
}

function showAllProducts() {
    const productCards = document.querySelectorAll(".product");
    productCards.forEach(function(product) {
        product.style.display = "";
    });

    showNoResult(false);

    const input = document.getElementById("searchInput");
    if (input) input.value = "";
}

/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
    setupSearch();
    updateCartCount();
    showCart();
});

// Sync cart across browser tabs
window.addEventListener("storage", updateCartCount);
