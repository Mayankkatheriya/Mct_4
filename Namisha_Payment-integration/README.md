<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beauty Products Website</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 20px;
        }

        h1 {
            color: #f32170;
            text-align: center;
            font-size: 2em;
        }

        h2 {
            color: #03605d;
            font-size: 1.5em;
            margin-top: 20px;
        }

        p {
            margin-bottom: 10px;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 5px;
        }

        a {
            color: #3c5aa6;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        #features, #getting-started, #usage, #technologies, #contributing, #license {
            margin-top: 40px;
        }

        #features, #getting-started, #usage, #technologies, #contributing, #license {
            border-top: 2px solid #ccc;
            padding-top: 20px;
        }

        code {
            background-color: #f8f8f8;
            padding: 2px 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1>Beauty Products Website</h1>

    <div id="introduction">
        <h2>Introduction</h2>
        <p>Welcome to the Beauty Products website! Select your shade and explore a wide range of beauty products. This website provides a user-friendly interface to view and purchase beauty products with ease.</p>
    </div>

    <div id="features">
        <h2>Features</h2>
        <ul>
            <li>Responsive design for optimal viewing on various devices.</li>
            <li>Dynamic rendering of product containers using JavaScript.</li>
            <li>Interactive hover effects on product containers.</li>
            <li>Real-time cart updates and notifications using Toastr.</li>
            <li>Razorpay integration for secure and seamless payments.</li>
            <li>Smooth scroll functionality for a better user experience.</li>
        </ul>
    </div>

    <div id="getting-started">
        <h2>Getting Started</h2>
        <p>1. Clone this repository to your local machine.</p>
        <pre><code>git clone https://github.com/your-username/beauty-products.git</code></pre>
        <p>2. Open the <code>index.html</code> file in your web browser.</p>
    </div>

    <div id="usage">
        <h2>Usage</h2>
        <ul>
            <li>Browse through the available beauty products on the main page.</li>
            <li>Click on the "Add to Cart" button to add a product to your cart.</li>
            <li>View your cart by clicking on the cart icon in the header.</li>
            <li>To make a purchase, click the "Buy Now" button, which uses Razorpay for secure payments.</li>
            <li>Enjoy a seamless and enjoyable shopping experience!</li>
        </ul>
    </div>

    <div id="technologies">
        <h2>Technologies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Razorpay API</li>
            <li>Toastr library for notifications</li>
            <li>Animate.css for animated effects</li>
        </ul>
    </div>

    <div id="contributing">
        <h2>Contributing</h2>
        <p>If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Your contributions are always welcome!</p>
    </div>

    <div id="license">
        <h2>License</h2>
        <p>This project is licensed under the <a href="LICENSE">MIT License</a>. Feel free to use and modify the code as per your requirements.</p>
    </div>

</body>
</html>
