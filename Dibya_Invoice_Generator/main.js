// ======================= GLOBAL VARIABLE ===================
let bill = document.querySelectorAll(".bill"),
  first = document.querySelector(".page"),
  total_Price = document.querySelector(".total"),
  print = document.querySelector(".print"),
  formfill = document.querySelector(".main-block"),
  form = document.querySelector("form"),
  shopDetail = document.querySelector(".shop-detail"),
  bill_btn = document.querySelector(".bill-btn"),
  bil_Detail = document.querySelector(".bill-detail"),
  bod = document.querySelector("body"),
  key = document.querySelector(".key"),
  billID = document.querySelector(".bill-Id"),
  pay = document.querySelector(".pay"),
  amount = 0,
  number = document.querySelector(".number"),
  btn = document.querySelector(".btn"),
  edit = document.querySelector(".edit"),
  cus_de = document.querySelector(".customer-Detail");
  // console.log(formfill);

// ======================= GLOBAL VARIABLE ===================

// ============GET PRESENT DATE AND TIME inset =============
function dateTime() {
  d =DateP();
  let tim = document.querySelector(".date");
  // tim.classList.add('animate__animated animate__fadeInLeft')
  tim.innerHTML = `
    Time: ${d.time} <i style="color: #fff;">(${d.day.slice(0, 3)})</i>
    <p>Date: ${d.dat}-${d.month}-<i style="">${d.year}</i></p>
`;
}

// PRESENT DATE AND TIME FUNCTION==================
dateTime();

function DateP() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let time = date.toTimeString().slice(0, 8);
  let month = date.getMonth();
  let dat = date.getDate();
  let year = date.getFullYear();
  let day = weekday[date.getDay()];
  return {
    time: time,
    month: month,
    dat: dat,
    year: year,
    day: day,
  };
}

// SHIFT FOCUS TO PRICE FROM PRODUCT DERAIL===============
function shift_Price() {
  let name = document.querySelectorAll(".name");
  name.forEach((ele) => {
    ele.addEventListener("keyup", function (e) {
      if (e.key === "Enter" && ele.value.length > 0) {
        ele.parentElement.children[3].focus();
      }
    });
  });
}

function add_Entery() {
  let price = document.querySelectorAll(".price");
  price.forEach((element) => {
    element.addEventListener("keyup", function (e) {
      if (
        e.key === "Enter" &&
        element.parentElement.children[1].value.length == 0
      ) {
        alert("Enter prododut name");
      } else if (e.key === "Enter" && element.value.length > 0) {
        element.disabled = true;
        element.parentElement.children[4].classList.remove("del-non");
        new_listAppend();
      }
    });
  });
}
// APPEND NEW LIST OF PRODOCT DETAIL===============
function delete_Items() {
  let del = document.querySelectorAll(".delete");

  del.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      let price = document.querySelectorAll(".price");
      // console.log(price);
      // console.log(price[0,price.length-2]);
      let newArr = Array.from(price).map((ele) => {
        if (ele.value.length > 0) {
          return ele;
        }
        return;
      });
      total(newArr);
    });
  });
}
// COUNT OF NO OF PRODUCT===================
function Number_PieceIncrease() {
  // console.log(piece);
  let piece = document.querySelectorAll(".piece");
  // console.log(piece);
  piece.forEach((ele) => {
    ele.addEventListener("input", function (e) {
      // console.log(piece);
      let price = document.querySelectorAll(".price");
      // console.log(price);
      // console.log(price[0,price.length-2]);
      let newArr = Array.from(price).map((ele) => {
        if (ele.value.length > 0) {
          return ele;
        }
        return;
      });
      //    console.log(newArr);
      total(newArr);
    });
  });
}

// Number_PieceIncrease();

// delete_Items();
// INNER HTML OF NEW LIST================
function new_listAppend() {
  let price = document.querySelectorAll(".price");
  let newDiv = document.createElement("li");
  newDiv.classList.add("bill");
  newDiv.innerHTML = `
            <p style="display: none;">*</p>
            <input type="text"  class="name-sc name">
            <input type="number" value="1" class="piece">
            <input type="number" class="name-sc price">
            <i class="fa-solid fa-trash delete del-non"></i>
            `;

  first.append(newDiv);
  let l = first.children.length;
  first.children[l - 1].children[1].focus();
  // console.log(first.children[l-1].children[1]);
  // console.log(first.children.length);
  total(price);
  add_Entery();
  shift_Price();
  print.style.display = "block";
}
number.addEventListener('click',function(){
  number.value='91'
})
// MOBILE NO COUNT FUNCTION============
number.addEventListener("keyup", () => {
  

  if (number.value.length == 12) {
    number.disabled = true;
    edit.style.display = "block";
  }
});
// HIDE EDIT BTN WHEN PRINT =====================
edit.addEventListener("click", () => {
  number.disabled = false;
  number.value = "";
  edit.style.display = "none";
});
// COUNT TOTAL PRICE ANS TOTAL ITEMS==================
function total(price) {
  bill = document.querySelectorAll(".bill");
  let t = 0;
  // console.log(price);

  price.forEach((ele) => {
    // console.log(ele.parentElement.children[2].value);

    // console.log(typeof(ele));
    if (typeof ele === "object" || typeof ele === "string") {
      let count = parseInt(ele.parentElement.children[2].value);
      // console.log(count,typeof(count));
      t += parseInt(ele.value) * count;
    }
  });
  amount = t;
  // console.log(t);
  total_Price.innerHTML = `Total: ${t}
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Items:${bill.length - 1}</span>
    `;
  delete_Items();
  Number_PieceIncrease();
}

print.addEventListener("click", function () {
  print.style.display = "none";

  let del = document.querySelectorAll(".delete");
  // console.log(del);
  del.forEach((element) => {
    element.classList.add("del-non");
  });

  let bill = document.querySelectorAll(".bill");
  bill[bill.length - 1].remove();
  first.classList.add("list-whilePrint");
  // bill.forEach((ele) => {
  //   ele.classList.add("list-whilePrint");
  // });
  // page

  btn.classList.add("while-print");
  edit.style.display = "none";
  key.style.display = "none";
  bill_btn.style.display = "none";
  bod.classList.add("body-border");
  cus_de.classList.add("while-print-de");

  // pay.style.display = "none";
  window.print();
  new_listAppend();
  del.forEach((element) => {
    element.classList.remove("del-non");
  });
  // pay.style.display = "block";
  btn.classList.remove("while-print");
  print.style.display = "block";
  // bill.forEach((ele) => {
  //   ele.classList.remove("list-whilePrint");
  // });
  edit.style.display = "block";
  key.style.display = "block";
  bill_btn.style.display = "block";
  bod.classList.remove("body-border");
  first.classList.remove("list-whilePrint");
  cus_de.classList.remove("while-print-de");
});

add_Entery();
shift_Price();
// TOOGLE KEY BTN Function===================
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// FORM SUBMIT OF SHOP DETAIL====================
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(form.children[1].children[0].value);
  if (
    form.children[1].children[0].value.length > 0 &&
    form.children[1].children[1].value.length > 0 &&
    form.children[1].children[2].value.length > 0
  ) {
    formfill.style.display = "none";

    form.style.display = "none";
    bod.style.display = "block";
    bil_Detail.style.display = "flex";
    shopDetail.style.display = "flex";
    bill_btn.style.display = "block";

    sHop();
  }
});
// console.log(form.children[1].children[0].value);

shopDetail.innerHTML = "";
// SHOP DETAIL DISPLAY AT TOP===================
function sHop() {
  shopDetail.innerHTML = `
<h1 class="animate__animated animate__backInDown">Shop Name:-    <i style="color: black;">${form.children[1].children[0].value}</i></h1>
<h1 class="animate__animated animate__backInDown">Contat No:-    <i style="color: black;">${form.children[1].children[1].value}</i></h1>
<h1 class="animate__animated animate__backInDown">Address:-    <i style="color: black;">${form.children[1].children[2].value}</i></h1>
<h1 class="animate__animated animate__backInDown">GSTNO:-    <i style="color: black;">${form.children[1].children[3].value}</i></h1>
<div class="date animate__animated animate__fadeInLeft"></div>
`;
dateTime();
  key.classList.add("key-bill");
}

// CREATE NEW BILL PAGE WHEN CLICK===================
bill_btn.addEventListener("click", function () {
  sHop();
  bil_Detail.innerHTML = `
  <div class="customer-Detail">
  <div class="costomer-Name">
      <input type="text" class="cus-name" placeholder="Customer Name">
  </div>
  <div class="mobile">
      <input class="number cus-name" type="number" placeholder="Mobile No"> <button class="edit" style="display: none;">edit</button>
      
  </div>
  <div class="date animate__animated animate__fadeInLeft">
      
  </div>

</div>
<div>
<h1 class="bill-Id">Bill Id:</h1>
<div class="bill-head">
  <h2>Product Details</h2>
  <h2 style="position: relative; left: 0;">price</h2>
</div>
<ol class="page">
  <li class="bill">
  <p style="display: none;">*</p>
      <input type="text" class="name-sc name">
      <input type="number" value="1" class="piece" min="1" max="10">
      <input type="number" class="name-sc price">
      <i class="fa-solid fa-trash delete del-non"></i>
  </li>
</ol>
</div>
<div class="btn btn-css">
  <p class="total">Total:0  <span class="items">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Items:0</span></p>
  
  <a style="display: none;"> href="" class="pay "><button class="button-19" value="">pay</button></a>
</div>
<button class="print porint-sc ">print</button>
  `;
  bill = document.querySelectorAll(".bill");
  first = document.querySelector(".page");
  total_Price = document.querySelector(".total");
  let print = document.querySelector(".print");
  formfill = document.querySelector(".main-block");
  form = document.querySelector("form");
  shopDetail = document.querySelector(".shop-detail");
  bill_btn = document.querySelector(".bill-btn");
  billID = document.querySelector(".bill-Id");
  bil_Detail = document.querySelector(".bill-detail");
  // console.log(form);
  btn = document.querySelector(".btn");
  let bod = document.querySelector("body");
  shift_Price();
  add_Entery();
  dateTime();
  Bill_Id();
  print.style.display="none"
});

// Function to generate a random three-digit number
function generateRandomThreeDigitNumber() {
  // Generate a random number between 100 and 999
  var randomNumber = Math.floor(Math.random() * 900) + 100;
  return randomNumber;
}

// Example usage
var randomThreeDigitNumber = generateRandomThreeDigitNumber();
// CREAT A BILL ID==============
function Bill_Id() {
  let num = generateRandomThreeDigitNumber();
  let d = DateP();
  // console.log(d);
  billID.textContent = `
  Bill Id:${d.month}${d.dat}${d.year}${num}
  `;
}
Bill_Id();
