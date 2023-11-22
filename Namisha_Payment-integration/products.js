// Define a constant variable to store the key for the cart in local storage
const cartKey = 'cart';

// Initialize an empty array to store cart items
let cart = [];

// Get the container for displaying products
const productsContainer = document.getElementById('products-container');

// Configure Toastr (a library for displaying notifications)
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

     // Check if the product is already in the cart
    const isAlreadyAdded = cart.some(item => item.title === productTitle);

    // Create audio elements for notification sounds
    const alertSound = new Audio('error-126627.mp3');
    alertSound.preload = 'auto';
    const addToCartSound = new Audio('mixkit-software-interface-start-2574.wav');
    addToCartSound.preload = 'auto';


 // If the product is already in the cart, show a warning notification
    if (isAlreadyAdded) {
        toastr.warning(`${productTitle} is already in the cart!`);
        alertSound.play();
    } else {
         // If the product is not in the cart, add it, update the display, and show a success notification
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
    toastr.warning(`No item in the cart!`); // Display toastr notification when cart is empty
    saveCartToStorage(); // Save the updated cart to local storage
}
// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
    let totalPrice = 0;

    // Iterate through each item in the cart and add its price to the total
    cart.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}

// Function to update the cart display
// Function to updateCart function to include a message when the cart is empty
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalCartPrice = document.getElementById('total-cart-price'); 

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
        // Display total cart price
        totalCartPrice.textContent = `Total: Rs. ${calculateTotalPrice()}`; // total price of cart items
    }
}
// Function to remove a specific item from the cart
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

       // Loop through each product and create a container
        products.forEach(product => {
            const container = document.createElement('div');
            container.classList.add('product-container');

            // Adding product details to the container
            container.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <button class="cart" onclick="addToCart('${product.title}', ${product.specialPrice})"><i class="fa-solid fa-cart-shopping" id="cart-icons"> Add to Cart</i></button>
                <p class = "rating">${product.rating}</p>
                <p class="shades">${product.shades} shades</p>
                <span class="special"> Rs. ${product.specialPrice}<p class="price">Rs. ${product.price}</p></span>
                <button class="pay-now" onclick="handlePayment('${product.title}', ${product.specialPrice}, '${product.image}')">Buy Now</button>
                
            `;
          // Append the container to the products container
            productsContainer.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

   // Function to handle payment using Razorpay
    function handlePayment(productTitle, productPrice, productImage) {
   // Preload the audio for success notification
    const successSound = new Audio('thank-you-for-shopping-garvins.mp3');
    successSound.preload = 'auto';

 // Configure options for Razorpay
    const options = {
        key: 'rzp_test_DhnX2ljNSBBudR', // Razorpay API key
        amount: productPrice * 100, // Amount in paisa
        currency: 'INR',
        name: productTitle,
        description: `Payment for ${productTitle}`,
        image: productImage,
        handler: function (response) {
             // Show success notification and play the success sound
            toastr['success'](`Payment successful for${productTitle}!`);
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
            color: '#092ca8', // Replace with your desired color
        },
    };
     // Create a Razorpay instance with the options
    const rzp = new Razorpay(options);
    // Open the Razorpay payment dialog
    rzp.open();
    
}
// Function to handle payment using Razorpay in cart
function handlePayment() {
    // Preload the audio for success notification
    const successSound = new Audio('thank-you-for-shopping-garvins.mp3');
    successSound.preload = 'auto';

    // Calculate the total cart price
    const totalCartPrice = calculateTotalPrice();

    // Check if the cart is not empty
    if (totalCartPrice > 0) {
        // Display the total cart price in the button
        document.getElementById('total-cart-price').innerHTML = `Pay Now: Rs. ${totalCartPrice}`;
        
        // Configure options for Razorpay
        const options = {
            key: 'rzp_test_DhnX2ljNSBBudR', // Replace with your Razorpay API key
            amount: totalCartPrice * 100, // Amount in paisa
            currency: 'INR',
            name: 'Glamour Haven', // Replace with your company name
            description: 'Payment for your order',
            image: "profile.jpg",
            handler: function (response) {
                // Show success notification and play the success sound
                toastr['success'](`Payment successful for your order!`);
                // Play the preloaded success sound
                successSound.play();
                
                // Clear the cart after successful payment
                clearCart();
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
                color: '#092ca8', // Replace with your desired color
            },
        };

        // Create a Razorpay instance with the options
        const rzp = new Razorpay(options);

        // Open the Razorpay payment dialog when the "Pay Now" button is clicked
        rzp.open();
    } else {
        toastr.warning('Your cart is empty. Add items to your cart before making a payment.');
    }
}


// Call the renderProducts function to display product containers
renderProducts();


// Scroll Event Listener
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
  