let bill = document.querySelectorAll('.bill');
let first= document.querySelector('.page')
let c=2;
// console.log(first);
// console.log(bill);



function shift_Price(){
    let name=document.querySelectorAll('.name');
    name.forEach((ele) =>{
        ele.addEventListener('keyup',function(e){
            if(e.key==='Enter' && ele.value.length>0){
                ele.parentElement.children[2].focus();
            }
            
        })
    })
}
shift_Price();

function add_Entery(){
    let price=document.querySelectorAll('.price');
    price.forEach(element => {
        element.addEventListener('keyup',function(e){
            if(e.key === 'Enter' && element.parentElement.children[1].value.length==0){
                alert('Enter prododut name');
            }
            else if(e.key === 'Enter' && element.value.length>0){
                element.disabled=true
                let newDiv=document.createElement('li')
                newDiv.classList.add('bill')
            newDiv.innerHTML=`
            <p>${c}</p>
            <input type="text"  class="name">
            <input type="number" class="price">
            `
            c++;
            first.append(newDiv)
            let l=first.children.length
            first.children[l-1].children[1].focus();
            // console.log(first.children[l-1].children[1]);
            // console.log(first.children.length);
            total(price);
            add_Entery();
            shift_Price();

            }
            
        })
    });
}
add_Entery()

let total_Price = document.querySelector('.total')
function total(price){
    let t=0;
    // console.log(price);
    price.forEach((ele) =>{
        t+=parseInt(ele.value)
        
    })
    // console.log(t);
    total_Price.innerText=`Total: ${t}`

}
let print =document.querySelector('.print');
print.addEventListener('click',function(){
    print.style.display='none'
    
    let inp =document.querySelectorAll('input');
    
    window.print();
    

});

    
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date =new Date();
let time=date.toTimeString().slice(0,8)
let month= date.getMonth()
let dat= date.getDate()
let year=date.getFullYear();
let day = weekday[date.getDay()];

console.log(time,month,dat,year,day);

let tim =document.querySelector('.date');
tim.innerHTML=`
    Time: ${time} (${day})
    <p>Date: ${dat}-${month}-${year}</p>
`