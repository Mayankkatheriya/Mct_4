const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");


draggables.forEach((task) => {
    task.addEventListener("dragstart",() =>{
        task.classList.add("is-dragging");
        console.log("Dragging Started")
    });

    task.addEventListener("dragend",() =>{
        task.classList.remove("is-dragging");
        console.log("Dragging Stopped")

    });
});


droppables.forEach((zone) =>{
    zone.addEventListener("dragover",(e)=>{
        e.preventDefault();
        const bottomTask = insertAboveTask(zone,e.clientY);
        const curTask = document.querySelector(".is-dragging");
        // console.log(bottomTask,curTask);

        if(!bottomTask){
            zone.appendChild(curTask);
        }else{
            zone.insertBefore(curTask,bottomTask);
        }
    });
});

const insertAboveTask = (zone,mouseY) =>{
  const els = zone.querySelectorAll(".task:not(.is-dragging)");
  let closetTask = null;  
  let closetOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) =>{
    const { top } = task.getBoundingClientRect(); 

    const offset = mouseY -top;
    console.log(offset);

    if(offset < 0 && offset > closetOffset){
        closetOffset = offset;
        closetTask = task;
    }
  });

  return closetTask;
};