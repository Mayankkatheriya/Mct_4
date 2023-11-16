// let input = document.getElementById("todo-input");
// let todoLane = document.getElementById("todo-lane");
// let cancel_btn = document.getElementById("cancel");

let Add_Board = document.querySelector("#Add_Board");
let out_div = document.querySelector(".swim");


Add_Board.addEventListener("click",() => {
    AppendDiv();
});


function AppendDiv(){
    console.log("Clicked on Add Board Button");

    const new_div =  document.createElement("div");
    new_div.classList.add("swim-lane");

    let form = document.createElement("form");
    form.setAttribute('id','todo-form');

    form.innerHTML = ` 
    <input type="text"  id="todo-input" placeholder ='Enter Board Name'/>
    <div class='div_flex'> 
    <button type = 'submit' id ='final_add_board' class='button_all'>CREATE BOARD </button>
    <button type='button' id='cancel'><i class="fa-solid fa-x"></i></button>  
    </div> `;

    new_div.appendChild(form);
    out_div.appendChild(new_div);

    let input = document.getElementById("todo-input");
    
    form.addEventListener("submit",(e) =>{
    const value = input.value;
    e.preventDefault();
    
    console.log(value,"+++++Ater submission of the form ")

    if(!value) return;
    const head_div = document.createElement('div');
    head_div.classList.add('head_and_delete')
    head_div.innerHTML = `<h3 class='heading'>${value}</h3>  <span><i class="fa-solid fa-delete-left"></i></span>  `;
    
    new_div.insertBefore(head_div,form);
    // input.value = "";
    
    });
    
};


