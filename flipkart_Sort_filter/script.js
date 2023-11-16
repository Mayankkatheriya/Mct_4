import { productData } from "./data.js";
let container = document.querySelector("#productList");
let sortingBtn = [...document.querySelectorAll(".sort-item")];
let fAssuredbox = document.querySelector("#fassured");
let deliverybox = document.querySelector("#delivery");
let emiBox = document.querySelector("#noCost");
let offerFilter = document.querySelector("name");
console.log(offerFilter);

// -------------------display-items----------------
const displayProducts = (data = productData) => {
  container.innerHTML = "";
  data.forEach((product) => {
    let fAssured = "";
    let freeDelivery = "";
    let BankOffer = ""
    if (product.flipkartAssured) {
      fAssured = "./Assests/251-2512713_best-offer-best-offer-icon-png.png";
    }
    if (product.deliveryIn1Day == true) {
      freeDelivery = "Delivery in 1 Day";
    }
    if (product.noCostEMI == true) {
        BankOffer = "Bank Offer";
      }
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
    <img class="productImage" src="${product.image}" alt="">
    <span class="productName">${product.title}</span>
    <div class="rating">
        <div class="ratingContainer">
            <span class="rating-value">${product.rating}</span>
        </div>
        <span class="ratingCount">(${product.ratingCount})</span>
        <img class="f-assured" src="${fAssured}" alt="">
    </div>
    <div class="price">
        <span class="newPrice">₹${product.specialPrice}</span>
        <del class="oldPrice">₹${product.price}</del>
        <div class="discountContainer">
            <span class="discount">₹${product.discountPrice}</span><span> off</span>
        </div>
    </div>
    <span class="delivery" name="Free">${freeDelivery}</span>
    <span class="bankOffer" name="Free">${BankOffer}</span>`;

    // Append the div to the product-list
    container.appendChild(div);
  });
};

// ------------sort-functions----------------
sortingBtn.forEach((e) => {
  e.addEventListener("click", (ele) => {
    sortingBtn.forEach((btn) => {
      btn.removeAttribute("id");
    });
    ele.target.id = "selected";
    let copiedData = JSON.parse(JSON.stringify(productData));
    if (ele.target.innerText == "Price -- Low to High") {
      copiedData = copiedData.sort((a, b) => {
        return a.specialPrice - b.specialPrice;
      });
      displayProducts(copiedData);
    } else if (ele.target.innerText == "Price -- High to Low") {
      copiedData = copiedData.sort((a, b) => {
        return b.specialPrice - a.specialPrice;
      });
      displayProducts(copiedData);
    } else if (ele.target.innerText == "Popularity") {
      copiedData = copiedData.sort((a, b) => {
        return b.popularity - a.popularity;
      });
      displayProducts(copiedData);
    }
  });
});

// -----------f-assured filter------------
fAssuredbox.addEventListener("change", (e) => {
  let filteredProduct = productData;
  if (e.target.checked) {
    filteredProduct = productData.filter(
      (item) => item.flipkartAssured == true
    );
  }
  displayProducts(filteredProduct);
});

// -----------one day delivery filter------------
deliverybox.addEventListener("change", (e) => {
  let filteredProduct = productData;
  if (e.target.checked) {
    filteredProduct = productData.filter((item) => item.deliveryIn1Day == true);
  }
  displayProducts(filteredProduct);
});

// -----------no codt EMI filter------------
emiBox.addEventListener("change", (e) => {
    let filteredProduct = productData;
    if (e.target.checked) {
      filteredProduct = productData.filter((item) => item.noCostEMI == true);
    }
    displayProducts(filteredProduct);
  });

window.onload = () => displayProducts(productData);
