/* =========================================
   MACHINERY SHOP
   MAIN SCRIPT
   PRODUCT DISPLAY + BANGLA SEARCH + FILTER + CART
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

    document.querySelectorAll("#cart-count")
        .forEach(element => {
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

    updateCartCount();

    showCart();
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
                Number(product.quantity || 0)
            ),
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

    if (!cartContainer) return;

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

            <p>
                দাম: ৳ ${Number(product.price)
                    .toLocaleString("bn-BD")}
            </p>

            <p>
                Quantity: ${product.quantity}
            </p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartContainer.appendChild(item);
    });


    if (totalElement) {

        totalElement.innerText =
            "৳ " +
            getCartTotal()
                .toLocaleString("bn-BD");
    }
}


/* =========================
   PRODUCT IMAGE
========================= */

function getProductImage(product) {

    if (
        product.image &&
        typeof product.image === "string" &&
        (
            product.image.includes("/") ||
            /\.(jpg|jpeg|png|webp|avif|svg)$/i
                .test(product.image)
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
   SEARCH KEYWORD DATABASE
   =========================
   বাংলা + English
*/

const searchKeywords = {

    "কাপ সিলার":
        ["cup sealer", "cup sealing", "কাপ সিলিং", "কাপ সিলার"],

    "কাপ সিলিং মেশিন":
        ["cup sealer", "cup sealing machine", "কাপ সিলার"],

    "কটন ক্যান্ডি":
        ["cotton candy", "candy floss", "কটন ক্যান্ডি"],

    "সুগারকেন":
        ["sugarcane", "sugar cane", "আখ", "আখের জুস"],

    "জুস":
        ["juice", "juice machine", "জুস মেশিন"],

    "পপকর্ন":
        ["popcorn", "popcorn machine", "পপকর্ন মেশিন"],

    "ওয়াফেল":
        ["waffle", "waffle maker", "ওয়াফেল মেকার"],

    "ক্রেপ":
        ["crepe", "crepe maker", "ক্রেপ মেকার"],

    "ডোনাট":
        ["donut", "donut maker", "ডোনাট মেশিন"],

    "ফ্রেঞ্চ ফ্রাই":
        ["french fry", "french fries", "fry cutter", "ফ্রেঞ্চ ফ্রাই"],

    "ব্লেন্ডার":
        ["blender", "commercial blender", "ব্লেন্ডার"],

    "পিজ্জা":
        ["pizza", "pizza oven", "পিজ্জা ওভেন"],

    "ফ্রায়ার":
        ["fryer", "deep fryer", "ফ্রায়ার"],

    "শাওয়ারমা":
        ["shawarma", "shawarma machine", "শাওয়ারমা"],

    "বরফ":
        ["ice", "ice crusher", "ice cube", "বরফ"],

    "আইস ক্রাশার":
        ["ice crusher", "ice crushing", "আইস ক্রাশার"],

    "আইস মেশিন":
        ["ice cube machine", "ice making machine", "আইস মেশিন"],

    "ড্রিল":
        ["drill", "drill machine", "electric drill", "ড্রিল"],

    "স্ক্রু ড্রাইভার":
        ["screwdriver", "electric screwdriver", "স্ক্রু ড্রাইভার"],

    "ভ্যাকুয়াম":
        ["vacuum", "vacuum cleaner", "ভ্যাকুয়াম ক্লিনার"]
};


/* =========================
   NORMALIZE SEARCH
========================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .trim()
        .replace(/[.,!?।,:;\/\\\-]+/g, " ")
        .replace(/\s+/g, " ");
}


/* =========================
   GET SEARCH TERMS
========================= */

function getSearchTerms(search) {

    const normalized =
        normalizeText(search);

    let terms = [normalized];

    Object.keys(searchKeywords)
        .forEach(function(key) {

            const normalizedKey =
                normalizeText(key);

            if (
                normalized === normalizedKey ||
                normalized.includes(normalizedKey) ||
                normalizedKey.includes(normalized)
            ) {

                terms = terms.concat(
                    searchKeywords[key]
                );
            }
        });

    return [...new Set(
        terms
            .map(normalizeText)
            .filter(Boolean)
    )];
}


/* =========================
   PRODUCT SEARCH TEXT
========================= */

function getProductSearchText(product) {

    let text = [

        product.name,

        product.category,

        product.categoryName,

        product.subCategory,

        product.description,

        product.seller

    ];


    if (product.specifications) {

        Object.values(
            product.specifications
        ).forEach(value => {
            text.push(value);
        });
    }


    return normalizeText(
        text.join(" ")
    );
}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {

    const oldPrice =
        product.oldPrice
            ? `
                <div class="old-price">
                    ৳ ${Number(product.oldPrice)
                        .toLocaleString("bn-BD")}
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
            data-name="${normalizeText(product.name)}"
            data-category="${normalizeText(product.category)}"
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
                    ৳ ${Number(product.price)
                        .toLocaleString("bn-BD")}
                </div>

                ${oldPrice}

                <a
                    href="${product.page || "product.html"}"
                    class="view-product"
                >
                    বিস্তারিত দেখুন →
                </a>

            </div>

        </div>
    `;
}


/* =========================
   LOAD PRODUCTS
========================= */

function loadProducts(list = products) {

    const container =
        document.querySelector(".products");

    if (!container) return;


    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) {

        container.innerHTML =
            `
            <div class="no-result">
                <h3>পণ্য লোড করা যাচ্ছে না</h3>
                <p>products.js চেক করুন।</p>
            </div>
            `;

        return;
    }


    if (!list.length) {

        container.innerHTML =
            `
            <div class="no-result">
                <h3>😔 কোনো পণ্য পাওয়া যায়নি</h3>
                <p>
                    অন্য নামে বা অন্য পণ্য দিয়ে
                    আবার চেষ্টা করুন।
                </p>
            </div>
            `;

        return;
    }


    container.innerHTML =
        list.map(createProductCard).join("");
}


/* =========================
   SEARCH PRODUCTS
========================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    const search =
        normalizeText(input.value);


    if (!search) {

        loadProducts(products);

        return;
    }


    const terms =
        getSearchTerms(search);


    const filteredProducts =
        products.filter(function(product) {

            const productText =
                getProductSearchText(product);


            return terms.some(function(term) {

                return productText
                    .includes(term);

            });

        });


    loadProducts(filteredProducts);


    const productsSection =
        document.getElementById("products");

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================
   SEARCH INPUT
========================= */

function setupSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    input.addEventListener(
        "input",
        function() {

            searchProducts();

        }
    );


    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchProducts();

            }

        }
    );
}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

    if (
        typeof products === "undefined" ||
        !Array.isArray(products)
    ) {
        return;
    }


    const selectedCategory =
        normalizeText(category);


    const filteredProducts =
        products.filter(function(product) {

            const productCategory =
                normalizeText(product.category);


            return (
                productCategory ===
                selectedCategory
            );

        });


    loadProducts(filteredProducts);


    const input =
        document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }


    const section =
        document.getElementById("products");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================
   SHOW ALL PRODUCTS
========================= */

function showAllProducts() {

    const input =
        document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }

    loadProducts(products);
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

            input.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
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
