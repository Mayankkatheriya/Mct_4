# Beauty Products Website

Welcome to the Beauty Products website! Select your shade and explore a wide range of beauty products. This website provides a user-friendly interface to view and purchase beauty products with ease.
## Shop Now

Explore our beauty products now! Click the "Shop Now" button below to view the available products.

![image](https://github.com/Mayankkatheriya/Mct_4/assets/126158413/161afa9f-8dba-4763-8b52-1e07ad99a8cb)

## Project Structure
The project is organized into several key directories:

- **css:** Contains the stylesheets used for styling the website. `products.css` handles the styling of product-related elements.

- **img:** Houses images used in the project. The beauty product images are stored here.

- **js:** Contains JavaScript files. `products.js` includes functions for handling product-related interactions, while `razorpay-script.js` holds the Razorpay integration script.

- **sounds:** Includes sound files for a delightful user experience. The `thank-you-for-shopping-garvins.mp3` file plays when a successful purchase occurs.

- **vendor:** Holds external libraries and stylesheets, such as `animate.css`, `toastr.min.css`, and `font-awesome.min.css`.

- **clipart image:** `png-clipart-person-s-lip-illustration-make-up-for-ever-cosmetics-make-up-artist-eye-shadow-logo-forever-miscellaneous-angle.png` Incorporates an eye-catching clipart image in the header for a visually appealing introduction.


## Introduction
This HTML, CSS, and JavaScript-based website allows users to browse various beauty products, add them to the cart, and make secure payments using the Razorpay API. The website is designed with a responsive layout and features a modern and attractive design.

## Features
- **Responsive Design:** The website is designed to be accessible and visually appealing on various devices, ensuring a seamless experience for users.

- **Dynamic Rendering:** JavaScript is used to dynamically render product containers on the main page. The `renderProducts` function fetches product data from `products.json` and creates product containers dynamically, allowing for easy addition of new products without modifying the HTML code.

- **Interactive Hover Effects:** Product containers have interactive hover effects, providing a visually pleasing experience for users. The CSS styles for `:hover` enhance the appearance of product containers when users interact with them.

- **Real-time Cart Updates:** The Toastr library is employed to show real-time cart updates and notifications. When a user adds a product to the cart, Toastr displays a notification, enhancing the user experience by providing feedback on their actions.

- **Razorpay Integration:** Secure payments are facilitated through the integration of the Razorpay API. The `handlePayment` function uses Razorpay to handle the payment process when a user clicks the "Buy Now" button.

- **Smooth Scroll Functionality:** The website features smooth scroll functionality for a better user experience. When users scroll, the navigation bar's background color changes, providing a subtle visual effect.

- **Notification for Added Items:** When a product is added to the cart, a green notification bar (`#added`) appears at the top, providing a clear indication to the user.

## Getting Started
1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Mayankkatheriya/Mct_4.git
