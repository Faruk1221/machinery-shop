/* =========================================
   MACHINERY SHOP
   MAIN SCRIPT
   PRODUCT DISPLAY + SEARCH + CART
   ========================================= */


/* =========================
   CART SYSTEM
========================= */

let cart = JSON.parse(
    localStorage.getItem("machineryCart")
) || [];


function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            quantity: 1
        });

    }

    localStorage.setItem(
        "machineryCart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("✅ " + name + " কার্টে যোগ হয়েছে!");
}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    const cartCount = cart.reduce(
        (total, product) =>
            total + Number(product.quantity || 0),
        0
    );

    const elements =
        document.querySelectorAll("#cart-count");

    elements.forEach(function(element) {

        element.innerText = cartCount;

    });
}


/* =========================
   REMOVE CART ITEM
========================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "machineryCart",
        JSON.stringify(cart)
    );

    showCart();
    updateCartCount();
}


/* =========================
   CART TOTAL
========================= */

function getCartTotal() {

    return cart.reduce(
        (total, product) =>
            total +
            (Number(product.price) *
            Number(product.quantity)),
        0
    );
}


/* =========================
   SHOW CART
========================= */

function showCart() {

    const cartContainer =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");

    if (!cartContainer) {
        return;
    }

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>আপনার Cart এখনো খালি।</p>";

        if (totalElement) {
            totalElement.innerText = "৳ 0";
        }

        return;
    }


    cart.forEach(function(product, index) {

        const item =
            document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <h3>${product.name}</h3>

            <p>দাম: ৳ ${Number(product.price).toLocaleString()}</p>

            <p>Quantity: ${product.quantity}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartContainer.appendChild(item);

    });


    if (totalElement) {

        totalElement.innerText =
            "৳ " +
            getCartTotal().toLocaleString();

    }
}


/* =========================
   PRODUCT IMAGE
========================= */

function getProductImage(product) {

    if (
        product.image &&
        (
            product.image.includes("/") ||
            product.image.includes(".jpg") ||
            product.image.includes(".png") ||
            product.image.includes(".webp")
        )
    ) {

        return `
            <img
                src="${product.image}"
                alt="${product.name}"
                style="
                    width:100%;
                    height:100%;
                    object-fit:contain;
                "
                onerror="this.style.display='none';"
            >
        `;

    }

    return product.image || "⚙️";
}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {

    const oldPrice =
        product.oldPrice
            ? `
                <div class="old-price">
                    ৳ ${Number(
                        product.oldPrice
                    ).toLocaleString()}
                </div>
              `
            : "";


    const badge =
        product.badge
            ? `
                <span class="offer">
                    ${product.badge}
                </span>
              `
            : "";


    const rating =
        product.rating
            ? `
                <div class="rating">
                    ⭐⭐⭐⭐⭐ ${product.rating}
                </div>
              `
            : "";


    return `
        <div
            class="product"
            data-name="${product.name.toLowerCase()}"
            data-category="${product.category}"
        >

            <div class="product-image">

                ${badge}

                ${getProductImage(product)}

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                ${rating}

                <div class="price">
                    ৳ ${Number(
                        product.price
                    ).toLocaleString()}
                </div>

                ${oldPrice}


                <a
                    href="${product.page}"
                    class="view-product"
                >
                    View Product
                </a>

            </div>

        </div>
    `;
}


/* =========================
   LOAD PRODUCTS
========================= */

function loadProducts() {

    const container =
        document.querySelector(".products");

    if (!container) {
        return;
    }

    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) {

        container.innerHTML =
            "<p>Product loading error.</p>";

        return;
    }


    container.innerHTML =
        products
            .map(createProductCard)
            .join("");

}


/* =========================
   SEARCH PRODUCTS
========================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const search =
        input.value
            .toLowerCase()
            .trim();


    const productCards =
        document.querySelectorAll(".product");


    productCards.forEach(function(product) {

        const text =
            product.innerText.toLowerCase();


        if (
            search === "" ||
            text.includes(search)
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================
   SEARCH INPUT
========================= */

function setupSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }

    input.addEventListener(
        "input",
        searchProducts
    );

}


/* =========================
   FOCUS SEARCH
========================= */

function focusSearch() {

    setTimeout(function() {

        const input =
            document.getElementById("searchInput");

        if (input) {

            input.focus();

        }

    }, 300);

}


/* =========================
   START WEBSITE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProducts();

        setupSearch();

        updateCartCount();

        showCart();

    }
);
