//일반 변수
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("input");
const ToHello = document.querySelector("#ToHello");
const SavedUserName =localStorage.getItem("username");
//스트링 변수
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//함수
function OnLogin(event)
{
  event.preventDefault();
  const username= loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username",username);
  FToHiSee(username);
}
function FToHiSee(username)
{
  ToHello.innerText = "Hello! "+username;
  ToHello.classList.remove(HIDDEN_CLASSNAME);
}
//실행
if(SavedUserName===null)
{
  loginForm.addEventListener("submit",OnLogin);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else
{
  FToHiSee(SavedUserName);
}