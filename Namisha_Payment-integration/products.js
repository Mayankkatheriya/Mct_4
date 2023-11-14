const cart = [];

function addToCart(productTitle, productPrice) {
    cart.push({ title: productTitle, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    // Update cart count
    cartCount.textContent = cart.length;

    // Clear existing cart items
    cartItems.innerHTML = '';

    // Display cart items in the cart page
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - Rs. ${item.price}`;
        cartItems.appendChild(li);
    });
}

// Function to open the cart page
function openCartPage() {
    updateCart();
    const cartPage = document.getElementById('cart-page');
    cartPage.style.display = 'flex';

}

// Function to close the cart page
function closeCartPage() {
    const cartPage = document.getElementById('cart-page');
    cartPage.style.display = 'none';
}

// Function to render product containers
async function renderProducts() {
    const productsContainer = document.getElementById('products-container');

    try {
        // Fetch data from products.json
        const response = await fetch('products.json');
        const products = await response.json();

        products.forEach(product => {
            const container = document.createElement('div');
            container.classList.add('product-container');

            // Add product details to the container
            container.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.rating}</p>
                <p class="shades">${product.shades} shades</p>
                <span class="special"> Rs. ${product.specialPrice}<p class="price">Rs. ${product.price}</p></span>
                <button class="pay-now" onclick="handlePayment('${product.title}', ${product.specialPrice}, '${product.image}')">Buy Now</button>
                <button class="cart" onclick="addToCart('${product.title}', ${product.specialPrice})"><i class="fa-solid fa-cart-shopping" id="cart-icons"> Add to Cart</i></button>
            `;

            productsContainer.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to handle payment using Razorpay
function handlePayment(productTitle, productPrice, productImage) {
    const options = {
        key: 'rzp_test_DhnX2ljNSBBudR', // Razorpay API key
        amount: productPrice * 100, // Amount in paisa
        currency: 'INR',
        name: productTitle,
        description: `Payment for ${productTitle}`,
        image: productImage,
        handler: function (response) {
            alert(`Payment successful for ${productTitle}!`);
            // Implement logic to update cart, etc.
        },
        prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: 'XXXXXXXXXX',
        },
        notes: {
            address: 'Customer Address',
        },
        theme: {
            color: '#F37254', // Replace with your desired color
        },
    };

    const rzp = new Razorpay(options);
    rzp.open();
}


// Call the renderProducts function to display product containers
renderProducts();

