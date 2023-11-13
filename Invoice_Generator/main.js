let bill = document.querySelectorAll('.bill');
let first= document.querySelector('.page')
console.log(first);
console.log(bill);

function add_Entery(){
    let price=document.querySelectorAll('.price');
    price.forEach(element => {
        element.addEventListener('keyup',function(e){
            if(e.key === 'Enter'){
                let newDiv=document.createElement('div')
            newDiv.innerHTML=`
            <input type="text">
            <input type="number" class="price">
            `
            first.append(newDiv)
            add_Entery();

            }
            
        })
    });
}
add_Entery()