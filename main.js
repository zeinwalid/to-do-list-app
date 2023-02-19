const list = document.querySelector(".list");

const toDoInput = document.getElementById("to-do-input");

const submitBtn = document.getElementById("submit-btn");

let darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode");
});
submitBtn.addEventListener("click",()=>{
    getData(toDoInput);
});



function getData(input){
    let data = input.value;
    if(data == ""){
        return
    }
    if (data != ""){
        addData(data);
    }
}
function addData(text){
    let toDo = document.createElement("div");
        toDo.className = "to-do";
        let doneBtn = document.createElement("input");
        Object.assign(doneBtn,{
            className : "check",
            type:"radio",
        }).onclick = () =>{
            completed(doneBtn);
        }
        toDo.innerHTML = `
            <p>${text}</p>
        `;
        toDo.append(doneBtn);
        list.append(toDo);
}

function completed(elem){
    let task = elem.parentElement;

    task.classList.add("completed");

    setTimeout(()=>{
        task.remove()
    },600)
}
