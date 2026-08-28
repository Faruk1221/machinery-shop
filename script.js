/* =========================================
   MACHINERY SHOP
   MAIN JAVASCRIPT
   ========================================= */


/* =========================
   CART SYSTEM
========================= */

let cart = JSON.parse(
    localStorage.getItem("machineryCart")
) || [];


function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();


    alert(
        "✅ " +
        product.name +
        " কার্টে যোগ হয়েছে!"
    );


    updateCartCount();
}


/* =========================
   SAVE CART
========================= */

function saveCart() {

    localStorage.setItem(
        "machineryCart",
        JSON.stringify(cart)
    );

}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    const cartCount = cart.reduce(

        (total, product) =>
            total + product.quantity,

        0

    );


    const cartCountElements =
        document.querySelectorAll(
            "#cart-count"
        );


    cartCountElements.forEach(
        element => {

            element.innerText =
                cartCount;

        }
    );

}


/* =========================
   REMOVE PRODUCT
========================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

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
            (
                Number(product.price) *
                product.quantity
            ),

        0

    );

}


/* =========================
   SHOW CART
========================= */

function showCart() {

    const cartContainer =
        document.getElementById(
            "cart-items"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    if (!cartContainer) {
        return;
    }


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML =
            "<p>আপনার Cart এখনো খালি।</p>";


        if (totalElement) {

            totalElement.innerText =
                "৳ 0";

        }

        return;

    }


    cart.forEach(
        (product, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "cart-item";


            item.innerHTML = `

                <h3>
                    ${product.name}
                </h3>

                <p>
                    দাম: ৳ ${product.price}
                </p>

                <p>
                    Quantity:
                    ${product.quantity}
                </p>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            `;


            cartContainer.appendChild(
                item
            );

        }
    );


    if (totalElement) {

        totalElement.innerText =
            "৳ " + getCartTotal();

    }

}


/* =========================
   HOME PAGE PRODUCTS
========================= */

function renderProducts(
    productList = products
) {

    const productContainer =
        document.querySelector(
            ".products"
        );


    if (!productContainer) {
        return;
    }


    productContainer.innerHTML = "";


    productList.forEach(
        product => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product";


            card.innerHTML = `

                <div class="product-image">

                    ${
                        product.badge
                        ?
                        `<span class="offer">
                            ${product.badge}
                        </span>`
                        :
                        ""
                    }

                    <span>
                        ${product.image}
                    </span>

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>


                    <div class="rating">
                        ⭐⭐⭐⭐⭐
                        ${product.rating}
                    </div>


                    <div class="price">
                        ৳ ${product.price.toLocaleString("en-BD")}
                    </div>


                    <div class="old-price">
                        ৳ ${product.oldPrice.toLocaleString("en-BD")}
                    </div>


                    <a
                        href="${product.page}"
                        class="view-product"
                    >
                        View Product
                    </a>

                </div>

            `;


            productContainer.appendChild(
                card
            );

        }
    );

}


/* =========================
   SEARCH
========================= */

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


    const filteredProducts =
        products.filter(
            product => {

                const searchableText = (

                    product.name +
                    " " +
                    product.categoryName +
                    " " +
                    product.description

                ).toLowerCase();


                return searchableText
                    .includes(search);

            }
        );


    renderProducts(
        filteredProducts
    );

}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(
    category
) {

    if (
        !category ||
        category === "all"
    ) {

        renderProducts();

        return;

    }


    const filteredProducts =
        products.filter(
            product =>
                product.category ===
                category
        );


    renderProducts(
        filteredProducts
    );


    const productSection =
        document.getElementById(
            "products"
        );


    if (productSection) {

        productSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   SEARCH FOCUS
========================= */

function focusSearch() {

    setTimeout(
        function () {

            const input =
                document.getElementById(
                    "searchInput"
                );


            if (input) {

                input.focus();

            }

        },
        300
    );

}


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        showCart();

        renderProducts();


        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchProducts
            );

        }

    }
);
