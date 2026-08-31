/* =========================================
   MACHINERY SHOP - MAIN SCRIPT
   PRODUCT + SEARCH + CATEGORY + CART + DRAWER
   ========================================= */

/* =========================================
   1. WHATSAPP DIRECT ORDER FUNCTION
========================================= */

function sendToWhatsApp(productName, price, quantity = 1) {
    const phoneNumber = "8801973317146"; // এখানে আপনার আসল WhatsApp নম্বরটি দিন (কান্ট্রি কোড সহ)
    const totalPrice = price * quantity;
    
    const message = `হ্যালো! আমি এই প্রোডাক্টটি অর্ডার করতে চাই:\n\n` +
                    `📦 *পণ্য:* ${productName}\n` +
                    `🔢 *পরিমাণ:* ${quantity}\n` +
                    `💰 *মোট মূল্য:* ৳${totalPrice}\n\n` +
                    `দয়া করে পরবর্তী প্রসেসটি জানান।`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
}

/* =========================================
   2. CART STATE MANAGEMENT
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
   3. ADD TO CART & SUGGESTION LOGIC
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
    showCart();
    renderYouMayAlsoLike();
    alert(`"${product.bnName || product.title || product.name}" কার্টে যোগ করা হয়েছে!`);
}

// "You May Also Like" থেকে দ্রুত সাইলেন্টলি কার্টে অ্যাড করা
function addToCartFromSuggestion(productId) {
    if (typeof products === "undefined" || !Array.isArray(products)) return;
    const product = products.find(p => String(p.id) === String(productId));
    if (!product) return;

    let cart = getCart();
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
    showCart();
    renderYouMayAlsoLike();
}

/* =========================================
   4. CART COUNT UPDATE
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
   5. REMOVE & QUANTITY MANAGEMENT
========================================= */

function removeFromCart(index) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);
    saveCart(cart);
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
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
    renderYouMayAlsoLike();
}

/* =========================================
   6. CART TOTAL & DISPLAY (WITH SUGGESTIONS)
========================================= */

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
}

function showCart() {
    const cartContainer = document.getElementById("cart-items") || document.getElementById("cart-drawer-items");
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
        item.style.cssText = "padding: 10px 0; border-bottom: 1px solid #eee;";
        
        const qty = Number(product.quantity) || 1;
        const price = Number(product.price) || 0;
        const subtotal = price * qty;

        item.innerHTML = `
            <h3 style="font-size: 13px; margin-bottom: 4px;">${product.name}</h3>
            <p style="font-size: 12px; color: #555;">দাম: ${price > 0 ? '৳ ' + price.toLocaleString() : 'যোগাযোগ করুন'}</p>
            <div class="cart-quantity" style="display: flex; align-items: center; gap: 8px; margin: 6px 0;">
                <button type="button" onclick="changeCartQuantity(${index}, -1)" style="width: 24px; height: 24px; border: 1px solid #ccc; background: #fff; cursor: pointer;">−</button>
                <strong>${qty}</strong>
                <button type="button" onclick="changeCartQuantity(${index}, 1)" style="width: 24px; height: 24px; border: 1px solid #ccc; background: #fff; cursor: pointer;">+</button>
            </div>
            <p style="font-size: 12px;">Subtotal: <strong>${price > 0 ? '৳ ' + subtotal.toLocaleString() : 'যোগাযোগ করুন'}</strong></p>
            <button type="button" onclick="removeFromCart(${index})" style="color:red; margin-top:5px; background:none; border:none; cursor:pointer; font-size:11px;">Remove</button>
        `;

        cartContainer.appendChild(item);
    });

    if (totalElement) {
        totalElement.innerText = "৳ " + getCartTotal().toLocaleString();
    }
}

// "You May Also Like" Section (Lowest Price to Highest Price Sort)
function renderYouMayAlsoLike() {
    const container = document.getElementById("you-may-also-like-container");
    if (!container || typeof products === "undefined" || !Array.isArray(products)) return;

    const cart = getCart();
    const cartItemIds = cart.map(item => String(item.id));

    // কার্টে না থাকা প্রোডাক্ট দামের ক্রমানুসারে (Lowest -> Highest) সাজানো
    const suggestedProducts = products
        .filter(p => !cartItemIds.includes(String(p.id)))
        .sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));

    if (suggestedProducts.length === 0) {
        container.innerHTML = "<p style='font-size: 11px; color: #777;'>কোনো অতিরিক্ত পণ্য নেই।</p>";
        return;
    }

    container.innerHTML = suggestedProducts.map(product => `
        <div class="suggested-item" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #eee;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 38px; height: 38px; overflow: hidden; border-radius: 6px; background: #f3f4f6;">
                    ${getProductImage(product)}
                </div>
                <div>
                    <h5 style="font-size: 11px; margin: 0; color: #333; font-weight: bold;">${product.bnName || product.title || product.name}</h5>
                    <span style="font-size: 11px; color: #16a34a; font-weight: bold;">৳${Number(product.price).toLocaleString()}</span>
                </div>
            </div>
            <button type="button" onclick="addToCartFromSuggestion('${product.id}')" style="background: #16a34a; color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">
                + Add
            </button>
        </div>
    `).join("");
}

/* =========================================
   7. DRAWER TOGGLES (SIDE MENU & CART)
========================================= */

function toggleMenuDrawer() {
    const menuDrawer = document.getElementById("side-menu-drawer");
    if (menuDrawer) {
        menuDrawer.classList.toggle("open");
    }
}

function toggleCartDrawer() {
    const cartDrawer = document.getElementById("cart-drawer");
    if (cartDrawer) {
        cartDrawer.classList.toggle("open");
        if (cartDrawer.classList.contains("open")) {
            showCart();
            renderYouMayAlsoLike();
        }
    }
}

/* =========================================
   8. PRODUCT IMAGE HELPER
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
   9. PRODUCT CARD UI CREATOR
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
   10. LOAD & RENDER PRODUCTS
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
   11. SEARCH & FILTER
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
   12. INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
    setupSearch();
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
});

// Sync cart across browser tabs
window.addEventListener("storage", function() {
    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
});
