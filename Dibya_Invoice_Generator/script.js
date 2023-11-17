// ==================GLOBAL VARIABLE

let add_Btn = document.querySelector(".add-btn"),
  list_Item = document.querySelector(".list-item"),
  list_Items = document.querySelector(".list-items"),
  AMOUNT = 0,
  chargeAdd = document.querySelector('.charge-Add'),
  InvoiceTotal = document.querySelector('.InvoiceTotal');
let company = document.getElementById('company'), billTo = document.getElementById('BillTo'), dateIss = document.getElementById('dateIss'), payT = document.getElementById('payT');
let invoNo = document.getElementById('invoNo');
let charge_Put_T = document.querySelector('.charge-put-Tax'), charge_Put_D = document.querySelector('.charge-put-Dis'), charge_Put_Sh = document.querySelector('.charge-put-ship');
let ne = document.getElementById('note');


// ================INVOICE NUMBER ADD
invoNo.addEventListener('keyup', function () {
  document.getElementById('invNoDA').textContent = invoNo.value
})

// ======================ADD LIST TO ITEM
add_Btn.addEventListener("click", AddList);

function AddList() {

  // TotalCount(list_Item.children[list_Item.children.length - 1]);
  let lis = document.createElement("li");
  lis.classList.add("item");
  lis.innerHTML = `
                    <input type="text" name="" id="text" required>
                <input type="number" id="number1" required>
                <input type="number" id="number2" required value="1">
                <input class="total" type="number" id="total" value="" required>
        <button class="add">add</button>
        <div id="error-box"></div>
    `;
  list_Item.appendChild(lis);
  add_Btn.style.display = 'none'
  addBtn()
  list_Detail();
}
// =============ADD BUTTON TO ADD MORE ITEMS
function addBtn() {
  let addB = document.querySelector('.add')
  var errorBox = document.getElementById('error-box');
  addB.addEventListener('click', function () {
    if (validateForm(list_Item.children[list_Item.children.length - 1])) {
      TotalCount(list_Item.children[list_Item.children.length - 1]);
      AddList_InVoice(list_Item.children[list_Item.children.length - 1])
      addB.classList.add('p')
      addB.classList.remove('add')

      errorBox.remove()
      add_Btn.style.display = 'block'
    }

  })
}
addBtn();

// ======================ADD DETAILS  TO FINAL
function list_Detail() {

  let Item = document.querySelectorAll(".item");
  // console.log(Item);
  Item.forEach((ele) => {
    ele.children[1].addEventListener("change", (e) => {
      ele.children[2].value = 1;
      let a = ele.children[1].value,
        b = ele.children[2].value;
      let res = total(a, b);
      // console.log(res);
      ele.children[3].value = res;
      TotalChange();
    });
    ele.children[2].addEventListener("change", (e) => {
      let a = ele.children[1].value,
        b = ele.children[2].value;
      let res = total(a, b);
      // console.log(res);
      ele.children[3].value = res;
      TotalChange();
    });
  });
}
list_Detail();
// ============CALCULATE TOTAL
function total(a, b) {
  return eval(a * b);
}



function TotalChange() {
  let TotalA = document.querySelectorAll(".total");
  TotalA.forEach((ele) => {
    console.log(ele.value);
  });
}



// ==========ADD DETAIL TO INVOICE
function AddList_InVoice(deta) {
  // console.log(deta);
  let lis = document.createElement("li");
  lis.classList.add("items");
  lis.innerHTML = `
    <p style="width: 40%;text-transform: uppercase;text-align: left; padding-left: 50px">${deta.children[0].value}</p>
                        <p>${deta.children[1].value}</p>
                        <p>${deta.children[2].value}</p>
                        <p>${deta.children[3].value}</p>

    `;
  list_Items.append(lis)
}

// =======================CALCULATE TOTAL
function TotalCount(det) {
  let add = parseInt(det.children[3].value);
  AMOUNT += add;
  document.querySelector('.subA').innerHTML = `${AMOUNT}`
  document.querySelector('.sub-A').textContent = `${AMOUNT}`
}






// ===========GET TAX,DIS,SHIPPING VALUE
charge_Put_T.addEventListener('keyup', (e) => {
  // console.log(e.target.value);
  document.querySelector('.charge-Tax').textContent = e.target.value
})
charge_Put_D.addEventListener('keyup', (e) => {
  // console.log(e.target.value);
  document.querySelector('.charge-Dis').textContent = e.target.value
})
charge_Put_Sh.addEventListener('keyup', (e) => {
  // console.log(e.target.value);
  document.querySelector('.charge-Ship').textContent = e.target.value
})


// ===========GET INVOICE COMPLETE
document.querySelector('.generate').addEventListener('click', function () {

  if (validData()) {
    let Tax = document.querySelector('.charge-Tax').textContent, dis = document.querySelector('.charge-Dis').textContent, ship = document.querySelector('.charge-Ship').textContent
    InvoiceTotal.textContent = parseInt(Tax) + parseInt(ship) - parseInt(dis) + AMOUNT
  }


})

// ===========GET INFORMATION OF COMPANT AND CUSTOMER
company.addEventListener('keyup', function () {
  // console.log(company.value);
  document.getElementById('com').textContent = company.value

});
billTo.addEventListener('keyup', function () {
  document.getElementById('bill').textContent = billTo.value
});

dateIss.addEventListener('change', function () {
  // console.log(dateIss.value);
  document.getElementById('date-at').textContent = dateIss.value
});
payT.addEventListener('change', function () {
  document.getElementById('termAt').textContent = payT.value;
});

// ==============CHECK VALIDATION
function validateForm(det) {
  var textValue = document.getElementById('text').value;
  var number1Value = det.children[0].value;
  var number2Value = det.children[1].value;

  var errorBox = document.getElementById('error-box');

  if (textValue === '' || number1Value === '' || number2Value === '') {
    errorBox.textContent = 'Please fill out all fields.';
    errorBox.style.display = 'block';
    return false;
  }

  // If all fields are filled, you can proceed with further actions or form submission.
  // For now, let's just clear the error box.
  errorBox.textContent = '';
  errorBox.style.display = 'none';
  return true
  // If all fields are filled, you can proceed with further actions or form submission.
  // For now, let's just clear the error box.

}


// ===============CHECK ALL DATA
function validData() {
  // let fileInput = document.querySelector('.file-input'),
  input_css = document.querySelector('.input-css'),
    company = document.getElementById('company'),
    BillTo = document.querySelector('#BillTo'),
    dateIss = document.getElementById('dateIss'),
    payT = document.getElementById('payT');

  // Example conditions - replace these with your actual validation rules
  if (
    input_css.value === '' ||
    company.value === '' ||
    BillTo.value === '' ||
    dateIss.value === '' ||
    payT.value === ''
  ) {
    // If any of the fields are empty, display an error or perform required action
    alert('Please fill out all fields.');
    return false;
  }
  else {
    return true
  }


}


// ===========ADD NOTE
ne.addEventListener('keyup', function () {
  document.getElementById('not').textContent = ne.value
});

// ==============PRINT AND SAVA BUTTOM
document.getElementById('pri-btn').addEventListener('click', () => {
  let inv = document.getElementById('invo');
  inv.classList.add('while-pr');
  inv.classList.remove('while-pr');

  document.querySelector('.details').style.display = 'none'
  inv.classList.add('while-pr');
  window.print();
  document.querySelector('.details').style.display = 'flex'
  // inv.style.width='50vw'
  inv.classList.remove('while-pr');

})
document.getElementById('save').addEventListener('click', () => {
  let inv = document.getElementById('page');
  // inv.classList.add('while-pr');
  html2pdf()
    .from(inv)
    .save();

})

// ============TOOGLE KEY
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

var fileInput = document.getElementById('fileInput');

        // Get the image element by its class
        var imageElement = document.querySelector('.l-img');
        imageElement.style.visibility='hidden';

        // Add an event listener to the file input for the change event
        fileInput.addEventListener('change', function() {
          imageElement.style.visibility='visible';
            // Check if a file is selected
            if (fileInput.files.length > 0) {
                // Use FileReader to read the selected file
                var reader = new FileReader();

                reader.onload = function(e) {
                    // Set the src attribute of the image with the data URL of the selected file
                    imageElement.src = e.target.result;
                };

                // Read the selected file as a data URL
                reader.readAsDataURL(fileInput.files[0]);
            } else {
                // Clear the image source if no file is selected
                imageElement.src = '';
            }
        });