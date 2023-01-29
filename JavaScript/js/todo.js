//변수
const ToDoForm = document.querySelector("#todo-form");
const ToDoList = document.querySelector("#todo-list");
const ToDoInput = document.querySelector("#todo-form input");

const TODO_KEY = "todos";

let toDos =[];
//함수

function FToDoSave()
{
  localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function FToDoDel(event)
{
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
  FToDoSave();
}

function FToDoPaint(item)
{
  const li = document.createElement("li");
  li.id = item.id;
  const span = document.createElement("span");
  span.innerText = item.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",FToDoDel);
  li.appendChild(button);
  li.appendChild(span);
  ToDoList.appendChild(li);
}

function FToDoDoing(event)
{
  event.preventDefault();
  const NewToDo = ToDoInput.value;
  ToDoInput.value ="";
  const NewToDoObj =
  {
    text:NewToDo,
    id:Date.now(),
  };
  toDos.push(NewToDoObj);
  FToDoPaint(NewToDoObj);
  FToDoSave();
}
//실행
ToDoForm.addEventListener("submit",FToDoDoing);

const SavedToDos = localStorage.getItem(TODO_KEY);

if(SavedToDos!==null)
{
  const RealTD = JSON.parse(SavedToDos);
  toDos = RealTD;
  RealTD.forEach(FToDoPaint);
}
