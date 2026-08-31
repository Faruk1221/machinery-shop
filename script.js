/* =========================================
   MACHINERY SHOP - MAIN SCRIPT
   PRODUCT + SEARCH + CATEGORY + CART + DRAWER
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
    updateCartCount();
    renderCartDrawer(); // Update side drawer whenever cart updates
}

/* =========================================
   ADD TO CART & QUICK BUY
========================================= */

function addToCart(productId, openDrawer = true) {
    let cart = getCart();

    if (typeof products === "undefined" || !Array.isArray(products)) {
        console.error("products array unavailable!");
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error("Product not found!");
        return;
    }

    const existingIndex = cart.findIndex(item => item.id === productId);

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

    if (openDrawer) {
        toggleCartDrawer(true);
    }
}

// Quick Buy - Directly open Side Cart / Checkout
function quickBuy(productId) {
    addToCart(productId, true);
}

/* =========================================
   CART COUNT UPDATE
========================================= */

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((total, item) => total + (Number(item.quantity) || 1), 0);

    const countById = document.getElementById("cart-count");
    if (countById) {
        countById.innerText = totalQty;
    }

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
    showCart();
}

/* =========================================
   CART TOTAL & DISPLAY (On Cart Page & Drawer)
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
                <a href="index.html">Shopping শুরু করুন →</a>
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
            <button type="button" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(item);
    });

    if (totalElement) {
        totalElement.innerText = "৳ " + getCartTotal().toLocaleString();
    }
}

/* =========================================
   GHORERBAZAR STYLE SIDE-OVER CART DRAWER
========================================= */

function toggleCartDrawer(open) {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("drawer-overlay");
    if (!drawer || !overlay) return;

    if (open) {
        drawer.classList.add("open");
        overlay.classList.add("open");
    } else {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
    }
}

function renderCartDrawer() {
    const drawerContainer = document.getElementById("drawer-cart-items");
    const drawerSubtotal = document.getElementById("drawer-subtotal");
    if (!drawerContainer) return;

    const cart = getCart();
    drawerContainer.innerHTML = "";

    if (cart.length === 0) {
        drawerContainer.innerHTML = `<p style="text-align:center; padding: 20px; color:#6b7280;">আপনার কার্ট খালি!</p>`;
        if (drawerSubtotal) drawerSubtotal.innerText = "৳ 0";
        return;
    }

    cart.forEach((item, index) => {
        const qty = Number(item.quantity) || 1;
        const price = Number(item.price) || 0;
        
        const div = document.createElement("div");
        div.className = "drawer-item";
        div.style.cssText = "display: flex; gap: 10px; margin-bottom: 12px; align-items: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 8px;";
        
        div.innerHTML = `
            <div style="flex-grow:1;">
                <h4 style="font-size:13px; font-weight:bold; margin:0;">${item.name}</h4>
                <div style="font-size:12px; color:#16a34a; font-weight:bold;">৳ ${price.toLocaleString()}</div>
                <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
                    <button type="button" onclick="changeCartQuantity(${index}, -1)" style="width:22px; height:22px;">-</button>
                    <span>${qty}</span>
                    <button type="button" onclick="changeCartQuantity(${index}, 1)" style="width:22px; height:22px;">+</button>
                </div>
            </div>
            <button type="button" onclick="removeFromCart(${index})" style="border:none; background:none; color:#ef4444; cursor:pointer; font-weight:bold;">✕</button>
        `;
        drawerContainer.appendChild(div);
    });

    if (drawerSubtotal) {
        drawerSubtotal.innerText = "৳ " + getCartTotal().toLocaleString();
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
   PRODUCT CARD UI CREATOR (GhorerBazar UI)
========================================= */

function createProductCard(product) {
    const displayName = product.bnName || product.title || product.name;
    const priceDisplay = product.price > 0 
        ? `৳ ${Number(product.price).toLocaleString()}` 
        : "দাম জানতে যোগাযোগ করুন";

    const oldPrice = (product.oldPrice && product.oldPrice > 0)
        ? `<span class="old-price" style="text-decoration:line-through; color:#9ca3af; font-size:12px; margin-left:5px;">৳ ${Number(product.oldPrice).toLocaleString()}</span>`
        : "";

    // Calculate Discount Savings
    const savings = (product.oldPrice && product.oldPrice > product.price)
        ? product.oldPrice - product.price
        : 0;

    const badge = product.badge
        ? `<span class="offer" style="position:absolute; top:8px; left:8px; background:#ef4444; color:white; font-size:10px; padding:2px 6px; border-radius:4px; font-weight:bold; z-index:2;">${product.badge}</span>`
        : "";

    const rating = product.rating
        ? `<div class="rating" style="font-size:12px; color:#f59e0b; margin: 3px 0;">⭐ ${product.rating}</div>`
        : "";

    const page = product.page || `product.html?id=${product.id}`;
    const keywordsAttr = Array.isArray(product.keywords) ? product.keywords.join(" ").toLowerCase() : "";

    return `
        <div
            class="product"
            style="position:relative;"
            data-name="${String(product.name || product.title || "").toLowerCase()}"
            data-bnname="${String(product.bnName || "").toLowerCase()}"
            data-keywords="${keywordsAttr}"
            data-category="${String(product.category || "").toLowerCase()}"
        >
            ${badge}
            <a href="${page}" class="product-image">
                ${getProductImage(product)}
            </a>

            <div class="product-info">
                <h3>${displayName}</h3>
                ${rating}
                <div class="price">${priceDisplay} ${oldPrice}</div>
                ${savings > 0 ? `<div style="font-size:11px; color:#dc2626; font-weight:bold; margin-bottom:5px;">Save ৳ ${savings.toLocaleString()}</div>` : ""}
                
                <div style="display:flex; gap:5px; margin-top:8px;">
                    <button type="button" onclick="addToCart('${product.id}')" class="view-product" style="flex:1; background:#f3f4f6; color:#111; font-size:11px; border:1px solid #ccc; cursor:pointer;">🛒 Cart</button>
                    <button type="button" onclick="quickBuy('${product.id}')" class="view-product" style="flex:1; background:#16a34a; color:white; font-size:11px; border:none; cursor:pointer;">অর্ডার করুন</button>
                </div>
            </div>
        </div>
    `;
}

/* =========================================
   LOAD PRODUCTS & CATEGORY COUNTERS
========================================= */

function renderCategoryCounters() {
    if (typeof products === "undefined" || !Array.isArray(products)) return;
    
    const counts = { all: products.length };
    products.forEach(p => {
        const cat = String(p.category || "").toLowerCase().trim();
        if (cat) counts[cat] = (counts[cat] || 0) + 1;
    });

    for (const cat in counts) {
        const el = document.getElementById(`count-${cat}`);
        if (el) el.innerText = `(${counts[cat]})`;
    }
}

function loadProducts() {
    const container = document.querySelector(".products");

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
    renderCategoryCounters();
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

    const container = document.querySelector(".products");
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
    renderCartDrawer();
});
