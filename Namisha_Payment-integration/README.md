# Beauty Products Website

Welcome to the Beauty Products website! Select your shade and explore a wide range of beauty products. This website provides a user-friendly interface to view and purchase beauty products with ease
.
## Shop Now
Explore our beauty products now! Click the [`Shop Now`](https://mayankkatheriya.github.io/Mct_4/Namisha_Payment-integration/) button to view the available products.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/161afa9f-8dba-4763-8b52-1e07ad99a8cb)

## Introduction
This HTML, CSS, and JavaScript-based website allows users to browse various beauty products, add them to the cart, and make secure payments using the Razorpay API. The website is designed with a responsive layout and features a modern and attractive design.

## Project Structure
The project is organized into several key directories:

- **css:** Contains the stylesheets used for styling the website. `products.css` handles the styling of product-related elements.

- **img:** Houses images used in the project. The beauty product images are stored here.

- **js:** Contains JavaScript files. `products.js` includes functions for handling product-related interactions, while `razorpay-script.js` holds the Razorpay integration script.

- **sounds:** Includes sound files for a delightful user experience.
  - The `thank-you-for-shopping-garvins.mp3` file plays when a successful purchase occurs.
  - The `mixkit-software-interface-start-2574.wav` file plays when item added to cart.
  - The `error-126627.mp3` file plays when same item get clicked which already added to cart.

- **vendor:** Holds external libraries and stylesheets, such as `animate.css`, `toastr.min.css`, and `font-awesome.min.css`.

- **clipart image:** `png-clipart-person-s-lip-illustration-make-up-for-ever-cosmetics-make-up-artist-eye-shadow-logo-forever-miscellaneous-angle.png` Incorporates an eye-catching clipart image in the header for a visually appealing introduction.

## Features
- **Responsive Design:** The website is designed to be accessible and visually appealing on various devices, ensuring a seamless experience for users.
 
![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/dc5cd807-a290-4c37-861a-a55cc29461fb) ![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/77810dcf-3c1f-4b24-b6e5-1a2ad2bce132)


- **Dynamic Rendering:** JavaScript is used to dynamically render product containers on the main page. The `renderProducts` function fetches product data from `products.json` and creates product containers dynamically, allowing for easy addition of new products without modifying the HTML code.

![Dynamic Rendering](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/9265bf56-80a6-4339-852d-073e2b7a29b8)

- **Interactive Hover Effects:** Product containers have interactive hover effects, providing a visually pleasing experience for users. The CSS styles for `:hover` enhance the appearance of product containers when users interact with them.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/434dccca-5d1a-46c0-9e1b-1932aa8bc0f5)

## Local Storage Functionality in cart
To enhance user experience and make the shopping cart persistent across page reloads, local storage functionality has been implemented. Follow the steps below to understand the recent additions:

1. **Initialization of Cart Key and Array:**
   - A constant `cartKey` and an array `cart` have been declared in the `js/products.js` file.
   - `cartKey` is set as 'cart', representing the key for storing/retrieving data in/from local storage.
   - The `cart` array holds the cart items.

   ```javascript
   const cartKey = 'cart';
   let cart = [];
- **Real-time Cart Updates:** The Toastr library is employed to show real-time cart updates and notifications. When a user adds a product to the cart, Toastr displays a notification, enhancing the user experience by providing feedback on their actions.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/90d28793-9672-4c9c-a782-9fc9ac949409)

- **Notification for Added Items:** When a product is added to the cart, a green notification bar (`#added`) appears at the top with notification sound, providing a clear indication to the user.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/324d3c43-49e9-407c-9d2f-8f5175d01f6b)

- **Notification for already item in cart:** When a user clicks again on the same item in the cart, a yellow notification bar (`#added`) appears at the top with alert sound,

  - **Notification for cart cleared:** When products cleared from the cart, a blue notification bar (`#added`) appears at the top, providing a   clear indication to the user.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/ffbf0554-c945-4635-baed-cc7b0a6b639e)

- **Razorpay Integration:** Secure payments are facilitated through the integration of the Razorpay API. The `handlePayment` function uses Razorpay to handle the payment process when a user clicks the "Buy Now" button.
 
![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/30763ffa-4f88-4074-9ff8-b88edd3719b0)
- **Smooth Scroll Functionality:** The website features smooth scroll functionality for a better user experience. When users scroll, the navigation bar's background color changes, providing a subtle visual effect.
 
  ![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/7191ed55-69da-4efb-93b1-3df004aa9e71)

## Getting Started
1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Mayankkatheriya/Mct_4.git
