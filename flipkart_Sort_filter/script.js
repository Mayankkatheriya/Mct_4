// Function to create a new product container
function createProductContainer(product) {
    const productList = document.getElementById('productList');
  
    // Create a container with inner HTML
    const container = document.createElement('div');
    container.classList.add('product-card');
    container.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.title}">
      <div>${product.title}</div>
      <div>Rating: ${product.rating}</div>
      <span class="special"> Rs. ${product.specialPrice}<p class="price">Rs. ${product.price}</p></span>
      <p>Flipkart Assured: ${product.flipkartAssured ? 'Yes' : 'No'}</p>
    `;
  
    // Append the container to the product-list
    productList.appendChild(container);
  }
  
  // Simulate an asynchronous data fetching operation
  async function fetchData() {
    return new Promise((resolve) => {
      // Import the products array from data.js
      import('./data.js').then((module) => {
        resolve(module.default);
      });
    });
  }
  
  // Use async/await to fetch and process the data
  async function processProducts() {
    const productData = await fetchData();
  
    // Loop through the product data and create containers for each product
    productData.forEach((product) => {
      createProductContainer(product);
    });
  }
  
  // Call the function to initiate the data fetching and processing
  processProducts();
  