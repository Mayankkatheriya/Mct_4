let bill = document.querySelectorAll('.bill');
let first = document.querySelector('.page')
let total_Price = document.querySelector('.total')
let print = document.querySelector('.print');
// console.log(first);
// console.log(bill);



function shift_Price() {
    let name = document.querySelectorAll('.name');
    name.forEach((ele) => {
        ele.addEventListener('keyup', function (e) {
            if (e.key === 'Enter' && ele.value.length > 0) {
                ele.parentElement.children[2].focus();
            }

        })
    })
}
shift_Price();

function add_Entery() {
    let price = document.querySelectorAll('.price');
    price.forEach(element => {
        element.addEventListener('keyup', function (e) {
            if (e.key === 'Enter' && element.parentElement.children[1].value.length == 0) {
                alert('Enter prododut name');
            }
            else if (e.key === 'Enter' && element.value.length > 0) {
                new_listAppend();

            }

        })
    });
}
add_Entery()


function total(price) {
    bill = document.querySelectorAll('.bill');
    let t = 0;
    // console.log(price);

    price.forEach((ele) => {
        t += parseInt(ele.value)

    })
    // console.log(t);
    total_Price.innerHTML = `Total: ${t}
    <span class="items">items:${bill.length-1}</span>
    `
    delete_Items();
    

}

print.addEventListener('click', function () {
    print.style.display = 'none'

    let del = document.querySelectorAll('.delete');
    // console.log(del);
    del.forEach(element => {
        element.classList.add('del-non')
    })

    let bill = document.querySelectorAll('.bill');

    console.log(bill[bill.length - 1]);
    bill[bill.length - 1].remove()


    bill.forEach((ele) => {
        ele.classList.add('list-whilePrint')
    })


    total_Price.classList.add('while-print')

    window.print();
    new_listAppend();
    del.forEach(element => {
        element.classList.remove('del-non')
    })
    total_Price.classList.remove('while-print')
    print.style.display = 'block'
    bill.forEach((ele) => {
        ele.classList.remove('list-whilePrint')
    })



});



const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let time = date.toTimeString().slice(0, 8)
let month = date.getMonth()
let dat = date.getDate()
let year = date.getFullYear();
let day = weekday[date.getDay()];

// console.log(time,month,dat,year,day);

let tim = document.querySelector('.date');
tim.innerHTML = `
    Time: ${time} (${day})
    <p>Date: ${dat}-${month}-${year}</p>
`
function delete_Items() {
    let del = document.querySelectorAll('.delete');
    del.forEach((ele) => {
        ele.addEventListener('click', function (e) {
            e.target.parentElement.remove();
        })
    })
    // total()
}
delete_Items();
function new_listAppend() {
    let price = document.querySelectorAll('.price');
    let newDiv = document.createElement('li')
    newDiv.classList.add('bill')
    newDiv.innerHTML = `
            <p>*</p>
            <input type="text"  class="name">
            <input type="number" class="price">
            <i class="fa-solid fa-trash delete"></i>
            `

    first.append(newDiv)
    let l = first.children.length
    first.children[l - 1].children[1].focus();
    // console.log(first.children[l-1].children[1]);
    // console.log(first.children.length);
    total(price);
    add_Entery();
    shift_Price();
    print.style.display = 'block'
}
