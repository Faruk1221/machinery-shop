// ===============================
// Machinery Shop - Cart System
// ===============================

let cart = JSON.parse(localStorage.getItem("machineryCart")) || [];

// Add product to cart
function addToCart(name, price) {

    const existingProduct = cart.find(product => product.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("machineryCart", JSON.stringify(cart));

    alert(name + " কার্টে যোগ হয়েছে!");

    updateCartCount();
}


// Update cart count
function updateCartCount() {

    const cartCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    const cartElement = document.querySelector(".cart");

    if (cartElement) {
        cartElement.innerHTML = "🛒 " + cartCount;
    }
}


// Remove product from cart
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "machineryCart",
        JSON.stringify(cart)
    );

    showCart();
    updateCartCount();
}


// Calculate total price
function getCartTotal() {

    return cart.reduce(
        (total, product) =>
            total + (product.price * product.quantity),
        0
    );
}


// Show cart
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


    cart.forEach((product, index) => {

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <h3>${product.name}</h3>

            <p>
                দাম: ৳ ${product.price}
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
            "৳ " + getCartTotal();

    }
}


// Run when page loads
document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        showCart();

    }
);
