let cart = [];
let total = 0;

function addToCart(itemId) {
    const item = document.querySelector(`.menu-item[data-id="${itemId}"]`);
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseFloat(item.getAttribute('data-price'));

    // Check if item already exists in cart
    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    }

    // Update total
    total += itemPrice;

    // Update cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Clear existing items
    cartItems.innerHTML = '';

    // Add items to cart UI
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update cart count and total
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Order placed! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCartUI();
}