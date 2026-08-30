/* =========================================
   MACHINERY SHOP
   MAIN SCRIPT
   PRODUCT + SEARCH + CATEGORY + CART
   ========================================= */


/* =========================================
   CART SYSTEM
========================================= */

let cart = JSON.parse(
    localStorage.getItem("machineryCart")
) || [];


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "machineryCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   ADD TO CART
========================================= */

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

    saveCart();

    updateCartCount();

    alert("✅ " + name + " কার্টে যোগ হয়েছে!");

}


/* =========================================
   CART COUNT
========================================= */

function updateCartCount() {

    const cartCount = cart.reduce(
        (total, product) =>
            total + Number(product.quantity || 0),
        0
    );

    document
        .querySelectorAll("#cart-count")
        .forEach(function(element) {

            element.innerText = cartCount;

        });

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }

    cart.splice(index, 1);

    saveCart();

    updateCartCount();

    showCart();

}


/* =========================================
   CHANGE CART QUANTITY
========================================= */

function changeCartQuantity(index, change) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

    updateCartCount();

    showCart();

}


/* =========================================
   CART TOTAL
========================================= */

function getCartTotal() {

    return cart.reduce(
        (total, product) =>
            total +
            (
                Number(product.price) *
                Number(product.quantity)
            ),
        0
    );

}


/* =========================================
   SHOW CART
========================================= */

function showCart() {

    const cartContainer =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");

    if (!cartContainer) {
        return;
    }

    cartContainer.innerHTML = "";


    /* EMPTY CART */

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="no-result">
                🛒<br><br>
                আপনার Cart এখনো খালি।
                <br><br>
                <a href="index.html">
                    Shopping শুরু করুন →
                </a>
            </div>
        `;

        if (totalElement) {

            totalElement.innerText = "৳ 0";

        }

        return;
    }


    /* CART ITEMS */

    cart.forEach(function(product, index) {

        const item =
            document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <h3>
                ${product.name}
            </h3>

            <p>
                দাম: ৳ ${Number(
                    product.price
                ).toLocaleString()}
            </p>

            <div class="cart-quantity">

                <button
                    type="button"
                    onclick="changeCartQuantity(${index}, -1)"
                >
                    −
                </button>

                <strong>
                    ${product.quantity}
                </strong>

                <button
                    type="button"
                    onclick="changeCartQuantity(${index}, 1)"
                >
                    +
                </button>

            </div>

            <p>
                Subtotal:
                <strong>
                    ৳ ${
                        (
                            Number(product.price) *
                            Number(product.quantity)
                        ).toLocaleString()
                    }
                </strong>
            </p>

            <button
                type="button"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>

        `;

        cartContainer.appendChild(item);

    });


    /* TOTAL */

    if (totalElement) {

        totalElement.innerText =
            "৳ " +
            getCartTotal().toLocaleString();

    }

}


/* =========================================
   PRODUCT IMAGE
========================================= */

function getProductImage(product) {

    if (!product.image) {

        return "⚙️";

    }


    const image =
        String(product.image);


    /* IMAGE FILE */

    if (
        image.includes("/") ||
        image.includes(".jpg") ||
        image.includes(".jpeg") ||
        image.includes(".png") ||
        image.includes(".webp") ||
        image.includes(".gif")
    ) {

        return `
            <img
                src="${image}"
                alt="${product.name}"
                loading="lazy"
                style="
                    width:100%;
                    height:100%;
                    object-fit:contain;
                "
                onerror="
                    this.style.display='none';
                "
            >
        `;

    }


    /* EMOJI / TEXT */

    return image;

}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(product) {

    const oldPrice =
        product.oldPrice
            ? `
                <div class="old-price">
                    ৳ ${
                        Number(
                            product.oldPrice
                        ).toLocaleString()
                    }
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


    const page =
        product.page ||
        "product.html";


    return `

        <div
            class="product"
            data-name="${String(
                product.name
            ).toLowerCase()}"

            data-category="${String(
                product.category || ""
            ).toLowerCase()}"
        >


            <a
                href="${page}"
                class="product-image"
            >

                ${badge}

                ${getProductImage(product)}

            </a>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                ${rating}


                <div class="price">
                    ৳ ${
                        Number(
                            product.price
                        ).toLocaleString()
                    }
                </div>


                ${oldPrice}


                <a
                    href="${page}"
                    class="view-product"
                >
                    View Product
                </a>

            </div>

        </div>

    `;

}


/* =========================================
   LOAD PRODUCTS
========================================= */

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

        container.innerHTML = `
            <div class="no-result">
                ❌ Product loading error.
                <br><br>
                products.js check করুন।
            </div>
        `;

        return;
    }


    container.innerHTML =
        products
            .map(createProductCard)
            .join("");

}


/* =========================================
   SEARCH PRODUCTS
========================================= */

function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) {
        return;
    }


    const search =
        input.value
            .toLowerCase()
            .trim();


    const productCards =
        document.querySelectorAll(
            ".product"
        );


    let visibleProducts = 0;


    productCards.forEach(function(product) {

        const name =
            product
                .getAttribute("data-name") || "";


        const text =
            product.innerText
                .toLowerCase();


        const match =
            search === "" ||
            name.includes(search) ||
            text.includes(search);


        if (match) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    showNoResult(
        visibleProducts === 0 &&
        search !== ""
    );

}


/* =========================================
   SEARCH SETUP
========================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        searchProducts
    );


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                searchProducts();

            }

        }
    );

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory(category) {

    const productCards =
        document.querySelectorAll(
            ".product"
        );


    const selectedCategory =
        String(category)
            .toLowerCase()
            .trim();


    let visibleProducts = 0;


    productCards.forEach(function(product) {

        const productCategory =
            String(
                product.getAttribute(
                    "data-category"
                ) || ""
            )
            .toLowerCase()
            .trim();


        /*
           "all" = সব product
        */

        const match =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        if (match) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    showNoResult(
        visibleProducts === 0
    );


    /*
       Search box clear
    */

    const input =
        document.getElementById(
            "searchInput"
        );

    if (input) {

        input.value = "";

    }

}


/* =========================================
   NO RESULT MESSAGE
========================================= */

function showNoResult(show) {

    let message =
        document.getElementById(
            "no-product-result"
        );


    if (!show) {

        if (message) {

            message.remove();

        }

        return;

    }


    if (message) {
        return;
    }


    const container =
        document.querySelector(
            ".products"
        );


    if (!container) {
        return;
    }


    message =
        document.createElement("div");


    message.id =
        "no-product-result";


    message.className =
        "no-result";


    message.innerHTML = `
        🔍<br><br>
        কোনো Product পাওয়া যায়নি।
        <br>
        অন্য কিছু Search করুন।
    `;


    container.appendChild(message);

}


/* =========================================
   FOCUS SEARCH
========================================= */

function focusSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    setTimeout(function() {

        if (input) {

            input.focus();

            input.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }, 200);

}


/* =========================================
   VIEW ALL PRODUCTS
========================================= */

function showAllProducts() {

    const productCards =
        document.querySelectorAll(
            ".product"
        );


    productCards.forEach(function(product) {

        product.style.display = "";

    });


    showNoResult(false);


    const input =
        document.getElementById(
            "searchInput"
        );


    if (input) {

        input.value = "";

    }

}


/* =========================================
   START WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProducts();

        setupSearch();

        updateCartCount();

        showCart();

    }
);
