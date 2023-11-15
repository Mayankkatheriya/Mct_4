let bill = document.querySelectorAll(".bill");
let first = document.querySelector(".page");
let total_Price = document.querySelector(".total");
let print = document.querySelector(".print");
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
let amount = 0;
let number = document.querySelector(".number"),
  btn = document.querySelector(".btn");
let edit = document.querySelector(".edit");

// console.log(time,month,dat,year,day);

let tim = document.querySelector(".date");
tim.innerHTML = `
    Time: ${time} (${day})
    <p>Date: ${dat}-${month}-${year}</p>
`;

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
function new_listAppend() {
  let price = document.querySelectorAll(".price");
  let newDiv = document.createElement("li");
  newDiv.classList.add("bill");
  newDiv.innerHTML = `
            <p>*</p>
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





number.addEventListener("keyup", () => {
  if (number.value.length == 10) {
    number.disabled = true;
    edit.style.display = "block";
  }
});
edit.addEventListener("click", () => {
  number.disabled = false;
  number.value = "";
  edit.style.display = "";
});

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
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Items:${bill.length - 1}</span>
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

  bill.forEach((ele) => {
    ele.classList.add("list-whilePrint");
  });

  btn.classList.add("while-print");
  edit.style.display = "non";

  window.print();
  new_listAppend();
  del.forEach((element) => {
    element.classList.remove("del-non");
  });
  btn.classList.remove("while-print");
  print.style.display = "block";
  bill.forEach((ele) => {
    ele.classList.remove("list-whilePrint");
  });
  edit.style.display = "block";
});

add_Entery();
shift_Price();


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
});











