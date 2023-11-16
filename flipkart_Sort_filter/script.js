import { productData } from "./data.js";
let container = document.querySelector("#productList");
let sortingBtn = [...document.querySelectorAll(".sort-item")];
let fAssuredbox = document.querySelector("#fassured");
let deliverybox = document.querySelector("#delivery");
let emiBox = document.querySelector("#noCost");
let offerFilter = [...document.querySelectorAll('input[name="discount"]')];
let ratingFilter = [...document.querySelectorAll('input[name="rating"]')];
let minPrice = document.querySelector(".min")
let maxPrice = document.querySelector(".max")


// -------------------display-items----------------
const displayProducts = (data = productData) => {
  container.innerHTML = "";
  data.forEach((product) => {
    let fAssured = "";
    let freeDelivery = "";
    let BankOffer = "";
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

// -----------no cost EMI filter------------
emiBox.addEventListener("change", (e) => {
  let filteredProduct = productData;
  if (e.target.checked) {
    filteredProduct = productData.filter((item) => item.noCostEMI == true);
  }
  displayProducts(filteredProduct);
});

// -----------discount filter------------
offerFilter.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        let filtervalue = e.target.value;
        let filteredProduct=[];
        filteredProduct = productData.filter((item) => item.discountPrice >= filtervalue);
        displayProducts(filteredProduct);
    })
})

// -----------rating filter------------
ratingFilter.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        let filtervalue = e.target.value;
        let filteredProduct=[];
        filteredProduct = productData.filter((item) => item.rating >= filtervalue);
        displayProducts(filteredProduct);
    })
})


// ----------------price range filter----------------
let rangeMin = 100;
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

// Function for changing price on sliding the price bar
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
    }
    minRange = parseInt(rangePrice[0].value);
    maxRange = parseInt(rangePrice[1].value);
        let filteredProduct=[];
        filteredProduct = productData.filter((item) => item.specialPrice >= minRange && item.specialPrice <= maxRange );
        displayProducts(filteredProduct);
  });
});

// Filter on basis of price range input
rangePrice.forEach((ele) => {
    ele.addEventListener("change", ()=>{
        let minRange = parseInt(rangePrice[0].value);
        let maxRange = parseInt(rangePrice[1].value);
        let filteredProduct=[];
        filteredProduct = productData.filter((item) => item.specialPrice >= minRange && item.specialPrice <= maxRange );
        displayProducts(filteredProduct);
    })
})

window.onload = () => displayProducts(productData);
