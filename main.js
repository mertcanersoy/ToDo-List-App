const addTodo = document.getElementById("btn-add");
const newTodo = document.getElementById("new-todo");
const todoBox = document.getElementById("task-todo-box");
let removeTodoBtn = document.querySelectorAll(".fa-times");
const clearBtn = document.querySelector("#clear-all");


const addTodoClick = () => {
  console.log("add içinde");
  if (newTodo.value == "") {
    alert("Please type your ToDo");
  }
  else {
    var li_el = document.createElement("li");
    li_el.innerText = newTodo.value;
    var i_el = document.createElement("i");
    i_el.classList = "fas fa-times";
    li_el.appendChild(i_el);
    todoBox.appendChild(li_el);
    newTodo.value = "";
    removeTodoBtn = document.querySelectorAll(".fa-times");
    for (let i = 0; i < removeTodoBtn.length; i++) {
      removeTodoBtn[i].addEventListener("click", removeTodoBtnClick);
    }
  }
}

function removeTodoBtnClick() {
  console.log("remove func içine girdi");
  let remove = this.parentElement;
  remove.remove();
}

function clearBtnClick() {
  let clear = document.querySelectorAll("li");
  for (let i = 0; i < clear.length; i++) {
    clear[i].remove();
  }
}



addTodo.addEventListener("click", addTodoClick);
clearBtn.addEventListener("click", clearBtnClick);
