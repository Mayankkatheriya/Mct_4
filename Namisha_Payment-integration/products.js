const cartKey = 'cart';
let cart = [];

const productsContainer = document.getElementById('products-container');

toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "timeOut": "2000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  // Function to retrieve cart data from local storage
function getCartFromStorage() {
    const storedCart = localStorage.getItem(cartKey);
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}

// Function to save cart data to local storage
function saveCartToStorage() {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(productTitle, productPrice) {
    const isAlreadyAdded = cart.some(item => item.title === productTitle);
    const alertSound = new Audio('error-126627.mp3');
    alertSound.preload = 'auto';
    const addToCartSound = new Audio('mixkit-software-interface-start-2574.wav');
    addToCartSound.preload = 'auto';



    if (isAlreadyAdded) {
        toastr.warning(`${productTitle} is already in the cart!`);
        alertSound.play();
    } else {
        cart.push({ title: productTitle, price: productPrice });
        updateCart();
        // Display the toastr notification for item added to cart
        toastr['success'](`${productTitle} added to cart!`);

        // Save the updated cart to local storage
        saveCartToStorage();
        addToCartSound.play();
    }
}
// Add this function to clear the cart
function clearCart() {
    cart = []; // Clear the cart array
    updateCart(); // Update the cart display
    toastr.info('Cart cleared'); // Display toastr notification
    saveCartToStorage(); // Save the updated cart to local storage
}

// Function to update the cart display
// Function to updateCart function to include a message when the cart is empty
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    // Update cart count
    cartCount.textContent = cart.length;

    // Clear existing cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        // include a message when the cart is empty
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartItems.appendChild(emptyCartMessage);
        emptyCartMessage.style.textAlign ="center";
    } else {
        // Display cart items in the cart page
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="cart-item">
                    <h2>${item.title}</h2>
                    <p class="special-price">Rs. ${item.price}</p>
                    <button onclick="removeCartItem(${index})">Remove</button> <!-- New button -->
                </div>
            `;
            cartItems.appendChild(li);
        });
    }
}
// Add this function to remove a specific item from the cart
function removeCartItem(index) {
    const removedItem = cart[index].title;
    cart.splice(index, 1); // Remove the item from the cart array
    updateCart(); // Update the cart display
    toastr.info(`${removedItem} removed from the cart`); // Display toastr notification
    saveCartToStorage(); // Save the updated cart to local storage
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

// Function to handle payment using Razorpay
function handlePayment(productTitle, productPrice, productImage) {
    // Save the current cart to local storage before processing payment
    saveCartToStorage();
}

// Call the function to retrieve cart data from local storage when the page loads
getCartFromStorage();
// Function to render product containers
async function renderProducts() {
    

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
                <button class="cart" onclick="addToCart('${product.title}', ${product.specialPrice})"><i class="fa-solid fa-cart-shopping" id="cart-icons"> Add to Cart</i></button>
                <p class = "rating">${product.rating}</p>
                <p class="shades">${product.shades} shades</p>
                <span class="special"> Rs. ${product.specialPrice}<p class="price">Rs. ${product.price}</p></span>
                <button class="pay-now" onclick="handlePayment('${product.title}', ${product.specialPrice}, '${product.image}')">Buy Now</button>
                
            `;

            productsContainer.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to handle payment using Razorpay
function handlePayment(productTitle, productPrice, productImage) {
    // Preload the audio
    const successSound = new Audio('thank-you-for-shopping-garvins.mp3');
    successSound.preload = 'auto';

    const options = {
        key: 'rzp_test_DhnX2ljNSBBudR', // Razorpay API key
        amount: productPrice * 100, // Amount in paisa
        currency: 'INR',
        name: productTitle,
        description: `Payment for ${productTitle}`,
        image: productImage,
        handler: function (response) {
            alert(`Payment successful for ${productTitle}!`);
            // Play the preloaded success sound
            successSound.play();
            
            
          
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


//Scroll Js
let navbar= document.querySelector("header")
let topBtn = document.querySelector("#top");
document.addEventListener("scroll", (e) => {
    if (e.target.scrollingElement.scrollTop > 150) {
      navbar.style.backgroundColor = "rgba(3, 47, 93, 0.8)";
      topBtn.style.display = "flex";
    } else {
      navbar.style.backgroundColor = "rgb(3, 47, 93)";
      topBtn.style.display = "none";
    }
  });
  