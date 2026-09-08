/* =========================================================
   MACHINERY SHOP
   MAIN SCRIPT
   Cart + Customer Profile + Account + WhatsApp
   ========================================================= */


/* =========================================================
   1. ADD TO CART TOAST
   ========================================================= */

function injectToastStyles() {
    if (document.getElementById("machinery-toast-style")) return;

    const style = document.createElement("style");
    style.id = "machinery-toast-style";

    style.textContent = `
        .machinery-toast {
            position: fixed;
            left: 50%;
            bottom: 85px;
            transform: translateX(-50%) translateY(20px);
            background: #16a34a;
            color: white;
            padding: 12px 18px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0 8px 25px rgba(0,0,0,0.20);
            z-index: 99999;
            opacity: 0;
            pointer-events: none;
            transition: all 0.25s ease;
            max-width: 90%;
            text-align: center;
        }

        .machinery-toast.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;

    document.head.appendChild(style);
}

function showAddToCartToast(productName) {
    injectToastStyles();

    let toast = document.getElementById("machinery-add-cart-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "machinery-add-cart-toast";
        toast.className = "machinery-toast";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `✓ "${escapeHTML(productName)}" কার্টে যোগ হয়েছে`;
    toast.classList.add("show");

    clearTimeout(window.machineryToastTimer);

    window.machineryToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================================================
   2. CUSTOM MACHINERY SHOP MODAL
   ========================================================= */

function injectCustomModal() {
    if (document.getElementById("machinery-custom-modal")) return;

    const style = document.createElement("style");
    style.id = "machinery-custom-modal-style";

    style.textContent = `
        .machinery-custom-modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.55);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            z-index: 100000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.25s ease;
        }

        .machinery-custom-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .machinery-custom-modal-box {
            width: 100%;
            max-width: 390px;
            background: #ffffff;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 15px 45px rgba(0,0,0,0.25);
            transform: scale(0.88);
            transition: transform 0.25s ease;
        }

        .machinery-custom-modal.active .machinery-custom-modal-box {
            transform: scale(1);
        }

        .machinery-custom-modal-header {
            background: #16a34a;
            color: #ffffff;
            padding: 16px 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            font-size: 17px;
        }

        .machinery-custom-modal-close {
            border: none;
            background: transparent;
            color: white;
            font-size: 22px;
            cursor: pointer;
            line-height: 1;
        }

        .machinery-custom-modal-body {
            padding: 22px 20px 10px;
            text-align: center;
            color: #374151;
            font-size: 15px;
            line-height: 1.6;
        }

        .machinery-custom-modal-icon {
            font-size: 38px;
            margin-bottom: 8px;
        }

        .machinery-custom-modal-footer {
            padding: 15px 20px 20px;
            text-align: center;
        }

        .machinery-custom-modal-btn {
            min-width: 120px;
            border: none;
            background: #16a34a;
            color: white;
            padding: 11px 22px;
            border-radius: 7px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
        }

        .machinery-custom-modal-btn:hover {
            opacity: 0.9;
        }
    `;

    document.head.appendChild(style);

    const modal = document.createElement("div");
    modal.id = "machinery-custom-modal";
    modal.className = "machinery-custom-modal";

    modal.innerHTML = `
        <div class="machinery-custom-modal-box">

            <div class="machinery-custom-modal-header">
                <span>⚙️ Machinery Shop</span>

                <button
                    type="button"
                    class="machinery-custom-modal-close"
                    onclick="closeMachineryModal()"
                >×</button>
            </div>

            <div class="machinery-custom-modal-body">
                <div class="machinery-custom-modal-icon">📝</div>

                <div id="machinery-custom-modal-message">
                    দয়া করে প্রয়োজনীয় তথ্য পূরণ করুন।
                </div>
            </div>

            <div class="machinery-custom-modal-footer">
                <button
                    type="button"
                    class="machinery-custom-modal-btn"
                    onclick="closeMachineryModal()"
                >
                    ঠিক আছে
                </button>
            </div>

        </div>
    `;

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeMachineryModal();
        }
    });

    document.body.appendChild(modal);
}

function showCustomModal(message) {
    /*
       Checkout.html-এ যদি আগে থেকেই customModal থাকে,
       সেটাই ব্যবহার করা হবে।
    */

    const existingModal = document.getElementById("customModal");
    const existingMessage = document.getElementById("customModalMessage");

    if (existingModal && existingMessage) {
        existingMessage.innerText = message;
        existingModal.classList.add("active");
        return;
    }

    injectCustomModal();

    const modal = document.getElementById("machinery-custom-modal");
    const messageBox = document.getElementById("machinery-custom-modal-message");

    if (messageBox) {
        messageBox.innerText = message;
    }

    if (modal) {
        modal.classList.add("active");
    }
}

function closeCustomModal() {
    const existingModal = document.getElementById("customModal");

    if (existingModal) {
        existingModal.classList.remove("active");
    }

    closeMachineryModal();
}

function closeMachineryModal() {
    const modal = document.getElementById("machinery-custom-modal");

    if (modal) {
        modal.classList.remove("active");
    }
}


/* =========================================================
   3. CUSTOMER PROFILE
   ========================================================= */

function getCustomerProfile() {
    try {
        const profile = JSON.parse(
            localStorage.getItem("customerProfile")
        );

        if (profile && typeof profile === "object") {
            return profile;
        }

        return null;

    } catch (error) {
        return null;
    }
}

function saveCustomerProfile(profile) {
    if (!profile || typeof profile !== "object") return;

    const cleanProfile = {
        name: String(profile.name || "").trim(),
        phone: String(profile.phone || "").trim(),
        address: String(profile.address || "").trim()
    };

    localStorage.setItem(
        "customerProfile",
        JSON.stringify(cleanProfile)
    );
}


/* =========================================================
   4. PROFILE CHECK
   ========================================================= */

function isCustomerProfileComplete() {
    const profile = getCustomerProfile();

    return !!(
        profile &&
        profile.name &&
        profile.phone &&
        profile.address
    );
}

function requireCustomerProfile() {
    const profile = getCustomerProfile();

    if (
        profile &&
        profile.name &&
        profile.phone &&
        profile.address
    ) {
        return true;
    }

    showCustomModal(
        "অর্ডার করার জন্য আগে আপনার নাম, মোবাইল নম্বর এবং পূর্ণাঙ্গ ঠিকানা দিন। আপনি Account থেকে তথ্য Save করতে পারেন।"
    );

    setTimeout(() => {
        const accountDrawer = document.getElementById("account-drawer");

        if (accountDrawer) {
            accountDrawer.classList.add("active");
            renderAccountDrawer(true);
        }
    }, 350);

    return false;
}


/* =========================================================
   5. CART
   ========================================================= */

function getCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem("cart")
        );

        return Array.isArray(cart) ? cart : [];

    } catch (error) {
        return [];
    }
}

function saveCart(cartData) {
    if (!Array.isArray(cartData)) {
        cartData = [];
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cartData)
    );
}

function addToCart(productId) {

    if (!requireCustomerProfile()) {
        return;
    }

    const prod = Array.isArray(window.products)
        ? window.products.find(p => p.id === productId)
        : (
            typeof products !== "undefined"
                ? products.find(p => p.id === productId)
                : null
        );

    if (!prod) {
        showCustomModal("এই প্রোডাক্টটি পাওয়া যাচ্ছে না।");
        return;
    }

    let cart = getCart();

    const existingIndex = cart.findIndex(
        item => item.id === productId
    );

    if (existingIndex !== -1) {

        cart[existingIndex].quantity =
            (Number(cart[existingIndex].quantity) || 1) + 1;

    } else {

        cart.push({
            id: prod.id,
            name: prod.bnName || prod.name || prod.title || "Product",
            price: Number(prod.price) || 0,
            image: prod.image || "",
            quantity: 1
        });
    }

    saveCart(cart);

    updateCartCount();
    showCart();
    renderYouMayAlsoLike();

    showAddToCartToast(
        prod.bnName || prod.name || prod.title || "Product"
    );
}


/* =========================================================
   6. ADD TO CART FROM SUGGESTIONS
   ========================================================= */

function addToCartFromSuggestion(productId) {

    if (!requireCustomerProfile()) {
        return;
    }

    const prod = Array.isArray(window.products)
        ? window.products.find(p => p.id === productId)
        : (
            typeof products !== "undefined"
                ? products.find(p => p.id === productId)
                : null
        );

    if (!prod) {
        showCustomModal("এই প্রোডাক্টটি পাওয়া যাচ্ছে না।");
        return;
    }

    let cart = getCart();

    const existingIndex = cart.findIndex(
        item => item.id === productId
    );

    if (existingIndex !== -1) {

        cart[existingIndex].quantity =
            (Number(cart[existingIndex].quantity) || 1) + 1;

    } else {

        cart.push({
            id: prod.id,
            name: prod.bnName || prod.name || prod.title || "Product",
            price: Number(prod.price) || 0,
            image: prod.image || "",
            quantity: 1
        });
    }

    saveCart(cart);

    updateCartCount();
    showCart();
    renderYouMayAlsoLike();

    showAddToCartToast(
        prod.bnName || prod.name || prod.title || "Product"
    );
}


/* =========================================================
   7. CART COUNT
   ========================================================= */

function updateCartCount() {

    const cart = getCart();

    const totalQty = cart.reduce(
        (sum, item) =>
            sum + (Number(item.quantity) || 1),
        0
    );

    const ids = [
        "cart-count",
        "header-cart-count"
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);

        if (el) {
            el.innerText = totalQty;
        }
    });

    document.querySelectorAll(".cart-count").forEach(el => {
        el.innerText = totalQty;
    });
}


/* =========================================================
   8. REMOVE CART ITEM
   ========================================================= */

function removeFromCart(productId) {

    let cart = getCart();

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart(cart);

    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
}


/* =========================================================
   9. CHANGE CART QUANTITY
   ========================================================= */

function changeCartQuantity(productId, change) {

    let cart = getCart();

    const index = cart.findIndex(
        item => item.id === productId
    );

    if (index === -1) return;

    cart[index].quantity =
        (Number(cart[index].quantity) || 1) + change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);

    updateCartCount();
    showCart();
    renderYouMayAlsoLike();
}


/* =========================================================
   10. CART TOTAL
   ========================================================= */

function getCartTotal() {

    const cart = getCart();

    return cart.reduce((total, item) => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        return total + (price * quantity);

    }, 0);
}


/* =========================================================
   11. PRODUCT IMAGE
   ========================================================= */

function getProductImage(product) {

    if (!product) {
        return "";
    }

    if (product.image) {
        return product.image;
    }

    if (product.images && Array.isArray(product.images)) {
        return product.images[0] || "";
    }

    return "";
}


/* =========================================================
   12. SHOW CART DRAWER
   ========================================================= */

function showCart() {

    const container =
        document.getElementById("cart-items") ||
        document.getElementById("cart-drawer-items");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {

        container.innerHTML = `
            <div style="
                padding:25px 15px;
                text-align:center;
                color:#6b7280;
            ">
                <div style="font-size:35px;margin-bottom:8px;">🛒</div>
                <p style="font-weight:bold;">
                    আপনার কার্ট খালি
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = cart.map(item => {

        const quantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const image =
            item.image || "";

        return `
            <div class="cart-item"
                 style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:10px;
                 ">

                <div style="
                    display:flex;
                    align-items:center;
                    gap:10px;
                    min-width:0;
                ">

                    ${
                        image
                        ? `
                            <img
                                src="${escapeAttribute(image)}"
                                alt="${escapeAttribute(item.name || "Product")}"
                                style="
                                    width:55px;
                                    height:55px;
                                    object-fit:cover;
                                    border-radius:6px;
                                    border:1px solid #e5e7eb;
                                "
                            >
                        `
                        : ""
                    }

                    <div style="min-width:0;">
                        <div style="
                            font-weight:bold;
                            font-size:14px;
                            margin-bottom:4px;
                        ">
                            ${escapeHTML(item.name || "Product")}
                        </div>

                        <div style="
                            color:#16a34a;
                            font-weight:bold;
                            font-size:13px;
                        ">
                            ৳${price.toLocaleString()}
                        </div>

                        <div style="
                            display:flex;
                            align-items:center;
                            gap:5px;
                            margin-top:6px;
                        ">
                            <button
                                type="button"
                                onclick="changeCartQuantity('${escapeAttribute(item.id)}', -1)"
                                style="
                                    width:26px;
                                    height:26px;
                                    border:1px solid #ddd;
                                    background:#f3f4f6;
                                    border-radius:4px;
                                    cursor:pointer;
                                "
                            >−</button>

                            <span style="
                                min-width:24px;
                                text-align:center;
                                font-weight:bold;
                            ">
                                ${quantity}
                            </span>

                            <button
                                type="button"
                                onclick="changeCartQuantity('${escapeAttribute(item.id)}', 1)"
                                style="
                                    width:26px;
                                    height:26px;
                                    border:1px solid #ddd;
                                    background:#f3f4f6;
                                    border-radius:4px;
                                    cursor:pointer;
                                "
                            >+</button>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onclick="removeFromCart('${escapeAttribute(item.id)}')"
                    style="
                        border:none;
                        background:#dc2626;
                        color:white;
                        padding:6px 8px;
                        border-radius:5px;
                        cursor:pointer;
                        font-size:12px;
                    "
                >
                    🗑️
                </button>

            </div>
        `;

    }).join("");
}


/* =========================================================
   13. YOU MAY ALSO LIKE
   ========================================================= */

function renderYouMayAlsoLike() {

    const container =
        document.getElementById(
            "you-may-also-like-container"
        );

    if (!container) return;

    const allProducts =
        typeof products !== "undefined"
            ? products
            : [];

    const cart = getCart();

    const cartIds = cart.map(item => item.id);

    const suggestions = allProducts
        .filter(product => !cartIds.includes(product.id))
        .slice(0, 4);

    if (suggestions.length === 0) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = suggestions.map(product => {

        const name =
            product.bnName ||
            product.name ||
            product.title ||
            "Product";

        const price =
            Number(product.price) || 0;

        const image =
            getProductImage(product);

        return `
            <div style="
                background:white;
                border:1px solid #e5e7eb;
                border-radius:8px;
                padding:10px;
            ">

                ${
                    image
                    ? `
                        <img
                            src="${escapeAttribute(image)}"
                            alt="${escapeAttribute(name)}"
                            style="
                                width:100%;
                                height:110px;
                                object-fit:contain;
                                border-radius:6px;
                                margin-bottom:8px;
                            "
                        >
                    `
                    : ""
                }

                <div style="
                    font-size:13px;
                    font-weight:bold;
                    margin-bottom:5px;
                ">
                    ${escapeHTML(name)}
                </div>

                <div style="
                    color:#16a34a;
                    font-weight:bold;
                    margin-bottom:8px;
                ">
                    ৳${price.toLocaleString()}
                </div>

                <button
                    type="button"
                    onclick="addToCartFromSuggestion('${escapeAttribute(product.id)}')"
                    style="
                        width:100%;
                        padding:8px;
                        border:none;
                        border-radius:5px;
                        background:#16a34a;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                        font-size:12px;
                    "
                >
                    Add to Cart
                </button>

            </div>
        `;

    }).join("");
}


/* =========================================================
   14. DRAWERS
   ========================================================= */

function toggleMenuDrawer() {

    const drawer =
        document.getElementById("side-menu-drawer");

    if (!drawer) return;

    drawer.classList.toggle("active");
}


function toggleCartDrawer() {

    const drawer =
        document.getElementById("cart-drawer");

    if (!drawer) return;

    drawer.classList.toggle("active");

    if (drawer.classList.contains("active")) {
        showCart();
        renderYouMayAlsoLike();
    }
}


function toggleAccountDrawer() {

    const drawer =
        document.getElementById("account-drawer");

    if (!drawer) return;

    const opening =
        !drawer.classList.contains("active");

    drawer.classList.toggle("active");

    if (opening) {
        renderAccountDrawer();
    }
}


/* =========================================================
   15. PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

    const name =
        product.bnName ||
        product.title ||
        product.name ||
        "Product";

    const price =
        Number(product.price) || 0;

    const oldPrice =
        Number(product.oldPrice) || 0;

    const image =
        getProductImage(product);

    const discount =
        oldPrice > price
            ? Math.round(
                ((oldPrice - price) / oldPrice) * 100
              )
            : 0;

    return `
        <div class="product-card">

            <a
                href="product.html?id=${encodeURIComponent(product.id)}"
                style="text-decoration:none;color:inherit;"
            >

                ${
                    image
                    ? `
                        <img
                            src="${escapeAttribute(image)}"
                            alt="${escapeAttribute(name)}"
                            class="product-image"
                        >
                    `
                    : `
                        <div class="product-image"
                             style="
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                font-size:45px;
                             ">
                            🛠️
                        </div>
                    `
                }

            </a>

            <div class="product-info">

                <a
                    href="product.html?id=${encodeURIComponent(product.id)}"
                    style="text-decoration:none;color:inherit;"
                >
                    <h3>
                        ${escapeHTML(name)}
                    </h3>
                </a>

                ${
                    oldPrice > price
                    ? `
                        <div>
                            <span style="
                                color:#16a34a;
                                font-weight:bold;
                                font-size:18px;
                            ">
                                ৳${price.toLocaleString()}
                            </span>

                            <span style="
                                color:#9ca3af;
                                text-decoration:line-through;
                                margin-left:5px;
                                font-size:13px;
                            ">
                                ৳${oldPrice.toLocaleString()}
                            </span>
                        </div>
                    `
                    : `
                        <div style="
                            color:#16a34a;
                            font-weight:bold;
                            font-size:18px;
                        ">
                            ৳${price.toLocaleString()}
                        </div>
                    `
                }

                ${
                    discount
                    ? `
                        <span style="
                            display:inline-block;
                            margin-top:5px;
                            background:#fee2e2;
                            color:#dc2626;
                            padding:3px 6px;
                            border-radius:4px;
                            font-size:11px;
                            font-weight:bold;
                        ">
                            ${discount}% OFF
                        </span>
                    `
                    : ""
                }

                ${
                    product.rating
                    ? `
                        <div style="
                            margin-top:5px;
                            color:#f59e0b;
                            font-size:13px;
                        ">
                            ⭐ ${product.rating}
                            ${
                                product.reviews
                                ? `(${product.reviews})`
                                : ""
                            }
                        </div>
                    `
                    : ""
                }

                <button
                    type="button"
                    onclick="addToCart('${escapeAttribute(product.id)}')"
                    class="view-product"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   16. LOAD PRODUCTS
   ========================================================= */

function loadProducts() {

    const container =
        document.getElementById("product-container");

    if (!container) return;

    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) {
        container.innerHTML = `
            <p style="text-align:center;padding:30px;">
                Product loading হচ্ছে...
            </p>
        `;
        return;
    }

    container.innerHTML =
        products.map(createProductCard).join("");
}


/* =========================================================
   17. SEARCH
   ========================================================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const container =
        document.getElementById("product-container");

    if (!input || !container) return;

    const query =
        input.value.trim().toLowerCase();

    if (!query) {
        loadProducts();
        return;
    }

    const results =
        products.filter(product => {

            const searchableText = [
                product.name,
                product.bnName,
                product.title,
                product.category,
                product.categoryName,
                product.subCategory,
                ...(Array.isArray(product.keywords)
                    ? product.keywords
                    : [])
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableText.includes(query);
        });

    if (results.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:40px 15px;
            ">
                <div style="font-size:40px;">🔍</div>
                <h3>কোনো প্রোডাক্ট পাওয়া যায়নি</h3>
                <p style="color:#6b7280;margin-top:6px;">
                    অন্য কোনো নাম দিয়ে আবার চেষ্টা করুন।
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        results.map(createProductCard).join("");
}


function setupSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });
}


/* =========================================================
   18. CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    const container =
        document.getElementById("product-container");

    if (!container) return;

    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) return;

    if (
        !category ||
        category.toLowerCase() === "all"
    ) {
        loadProducts();
        return;
    }

    const selectedCategory =
        category.toLowerCase();

    const results =
        products.filter(product => {

            return (
                String(product.category || "")
                    .toLowerCase() === selectedCategory ||

                String(product.subCategory || "")
                    .toLowerCase() === selectedCategory ||

                String(product.categoryName || "")
                    .toLowerCase() === selectedCategory
            );
        });

    if (results.length === 0) {

        container.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:30px;
            ">
                এই ক্যাটাগরিতে কোনো প্রোডাক্ট পাওয়া যায়নি।
            </div>
        `;

        return;
    }

    container.innerHTML =
        results.map(createProductCard).join("");
}


/* =========================================================
   19. ACCOUNT PROFILE SAVE
   ========================================================= */

function handleSaveProfile(event) {

    if (event) {
        event.preventDefault();
    }

    const nameEl =
        document.getElementById("acc-name");

    const phoneEl =
        document.getElementById("acc-phone");

    const addressEl =
        document.getElementById("acc-address");

    const name =
        nameEl ? nameEl.value.trim() : "";

    const phone =
        phoneEl ? phoneEl.value.trim() : "";

    const address =
        addressEl ? addressEl.value.trim() : "";

    if (!name || !phone || !address) {

        showCustomModal(
            "দয়া করে আপনার নাম, মোবাইল নম্বর এবং পূর্ণাঙ্গ ঠিকানা দিন।"
        );

        return;
    }

    saveCustomerProfile({
        name,
        phone,
        address
    });

    renderAccountDrawer(false);

    showAddToCartToast(
        "আপনার তথ্য সফলভাবে Save হয়েছে"
    );
}


/* =========================================================
   20. EDIT PROFILE
   ========================================================= */

function editProfile() {
    renderAccountDrawer(true);
}


/* =========================================================
   21. ORDER HISTORY
   ========================================================= */

function getOrderHistory() {

    try {

        const orders =
            JSON.parse(
                localStorage.getItem("orders")
            );

        return Array.isArray(orders)
            ? orders
            : [];

    } catch (error) {
        return [];
    }
}


/* =========================================================
   22. ORDER HISTORY HTML
   ========================================================= */

function renderOrderHistoryHTML() {

    const orders =
        getOrderHistory();

    if (orders.length === 0) {

        return `
            <div style="
                padding:15px;
                background:#f9fafb;
                border-radius:8px;
                text-align:center;
                color:#6b7280;
            ">
                এখনো কোনো অর্ডার নেই।
            </div>
        `;
    }

    return orders
        .slice()
        .reverse()
        .map(order => {

            const items =
                Array.isArray(order.items)
                    ? order.items
                    : [];

            const itemText =
                items
                    .map(item =>
                        `${item.name || "Product"} ×${item.quantity || 1}`
                    )
                    .join(", ");

            return `
                <div style="
                    border:1px solid #e5e7eb;
                    border-radius:8px;
                    padding:12px;
                    margin-bottom:10px;
                    background:white;
                ">

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        gap:8px;
                        margin-bottom:6px;
                    ">
                        <strong>
                            ${escapeHTML(order.orderId || "Order")}
                        </strong>

                        <span style="
                            color:#16a34a;
                            font-weight:bold;
                        ">
                            ৳${Number(order.grandTotal || 0).toLocaleString()}
                        </span>
                    </div>

                    <div style="
                        font-size:12px;
                        color:#6b7280;
                        line-height:1.5;
                    ">
                        ${escapeHTML(itemText)}
                    </div>

                    ${
                        order.date
                        ? `
                            <div style="
                                font-size:11px;
                                color:#9ca3af;
                                margin-top:6px;
                            ">
                                ${escapeHTML(order.date)}
                            </div>
                        `
                        : ""
                    }

                </div>
            `;

        })
        .join("");
}


/* =========================================================
   23. ACCOUNT DRAWER
   ========================================================= */

function renderAccountDrawer(forceEdit = false) {

    const body =
        document.getElementById("account-drawer-body");

    if (!body) return;

    const profile =
        getCustomerProfile();

    if (forceEdit || !profile) {

        body.innerHTML = `
            <div style="padding:15px;">

                <div style="
                    text-align:center;
                    font-size:42px;
                    margin-bottom:10px;
                ">
                    👤
                </div>

                <h3 style="
                    text-align:center;
                    margin-bottom:6px;
                ">
                    ${profile ? "আপনার তথ্য পরিবর্তন করুন" : "Customer Profile"}
                </h3>

                <p style="
                    text-align:center;
                    color:#6b7280;
                    font-size:13px;
                    margin-bottom:18px;
                ">
                    একবার তথ্য Save করলে পরবর্তীতে
                    বারবার লিখতে হবে না।
                </p>

                <form onsubmit="handleSaveProfile(event)">

                    <div style="margin-bottom:12px;">
                        <label style="
                            display:block;
                            font-size:13px;
                            font-weight:bold;
                            margin-bottom:5px;
                        ">
                            নাম *
                        </label>

                        <input
                            type="text"
                            id="acc-name"
                            value="${escapeAttribute(profile?.name || "")}"
                            placeholder="আপনার নাম"
                            required
                            style="
                                width:100%;
                                padding:10px;
                                border:1px solid #d1d5db;
                                border-radius:6px;
                                outline:none;
                            "
                        >
                    </div>

                    <div style="margin-bottom:12px;">
                        <label style="
                            display:block;
                            font-size:13px;
                            font-weight:bold;
                            margin-bottom:5px;
                        ">
                            মোবাইল নম্বর *
                        </label>

                        <input
                            type="tel"
                            id="acc-phone"
                            value="${escapeAttribute(profile?.phone || "")}"
                            placeholder="017xxxxxxxx"
                            required
                            style="
                                width:100%;
                                padding:10px;
                                border:1px solid #d1d5db;
                                border-radius:6px;
                                outline:none;
                            "
                        >
                    </div>

                    <div style="margin-bottom:15px;">
                        <label style="
                            display:block;
                            font-size:13px;
                            font-weight:bold;
                            margin-bottom:5px;
                        ">
                            পূর্ণাঙ্গ ঠিকানা *
                        </label>

                        <textarea
                            id="acc-address"
                            rows="3"
                            placeholder="বাড়ি/রোড, এলাকা, থানা, জেলা"
                            required
                            style="
                                width:100%;
                                padding:10px;
                                border:1px solid #d1d5db;
                                border-radius:6px;
                                resize:vertical;
                                outline:none;
                            "
                        >${escapeHTML(profile?.address || "")}</textarea>
                    </div>

                    <button
                        type="submit"
                        style="
                            width:100%;
                            padding:12px;
                            border:none;
                            border-radius:6px;
                            background:#16a34a;
                            color:white;
                            font-weight:bold;
                            cursor:pointer;
                        "
                    >
                        💾 তথ্য Save করুন
                    </button>

                </form>

            </div>
        `;

        return;
    }


    /* Saved Profile View */

    body.innerHTML = `
        <div style="padding:15px;">

            <div style="
                text-align:center;
                margin-bottom:18px;
            ">

                <div style="
                    width:70px;
                    height:70px;
                    margin:0 auto 10px;
                    border-radius:50%;
                    background:#dcfce7;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:35px;
                ">
                    👤
                </div>

                <h3 style="margin-bottom:4px;">
                    ${escapeHTML(profile.name)}
                </h3>

                <p style="
                    color:#16a34a;
                    font-size:13px;
                    font-weight:bold;
                ">
                    ✓ Customer Profile Saved
                </p>

            </div>

            <div style="
                background:#f9fafb;
                border-radius:8px;
                padding:14px;
                line-height:1.8;
                margin-bottom:15px;
            ">

                <div>
                    <strong>📱 মোবাইল:</strong>
                    ${escapeHTML(profile.phone)}
                </div>

                <div>
                    <strong>📍 ঠিকানা:</strong>
                    ${escapeHTML(profile.address)}
                </div>

            </div>

            <button
                type="button"
                onclick="editProfile()"
                style="
                    width:100%;
                    padding:11px;
                    border:1px solid #16a34a;
                    border-radius:6px;
                    background:white;
                    color:#16a34a;
                    font-weight:bold;
                    cursor:pointer;
                    margin-bottom:10px;
                "
            >
                ✏️ তথ্য পরিবর্তন করুন
            </button>

            <h4 style="
                margin:20px 0 10px;
            ">
                📦 Order History
            </h4>

            ${renderOrderHistoryHTML()}

        </div>
    `;
}


/* =========================================================
   24. WHATSAPP ORDER FROM GLOBAL CART
   ========================================================= */

function sendToWhatsApp() {

    const cart = getCart();

    if (cart.length === 0) {

        showCustomModal(
            "আপনার কার্ট বর্তমানে খালি!"
        );

        return;
    }

    const profile =
        getCustomerProfile();

    if (
        !profile ||
        !profile.name ||
        !profile.phone ||
        !profile.address
    ) {

        showCustomModal(
            "WhatsApp-এ অর্ডার করার আগে আপনার নাম, মোবাইল নম্বর এবং ঠিকানা দিন।"
        );

        return;
    }

    const phoneNumber =
        "8801973317146";

    let productListText = "";
    let total = 0;

    cart.forEach((item, index) => {

        const qty =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const itemTotal =
            price * qty;

        total += itemTotal;

        productListText +=
            `${index + 1}. ${item.name} - ${qty}টি (৳${itemTotal.toLocaleString()})\n`;
    });

    const message =
        `🛒 *নতুন অর্ডার এসেছে!*\n\n` +

        `👤 *কাস্টমার তথ্য:*\n` +
        `• নাম: ${profile.name}\n` +
        `• ফোন: ${profile.phone}\n` +
        `• ঠিকানা: ${profile.address}\n\n` +

        `📦 *প্রোডাক্টের তালিকা:*\n` +
        productListText +

        `\n💵 *উপমোট:* ৳${total.toLocaleString()}\n` +

        `💰 *সর্বমোট:* ৳${total.toLocaleString()}`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* =========================================================
   25. HTML SECURITY HELPERS
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeHTMLAttr(value) {
    return escapeHTML(value);
}

function escapeAttribute(value) {
    return escapeHTML(value);
}


/* =========================================================
   26. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        injectToastStyles();

        loadProducts();

        setupSearch();

        updateCartCount();

        showCart();

        renderYouMayAlsoLike();

    }
);
