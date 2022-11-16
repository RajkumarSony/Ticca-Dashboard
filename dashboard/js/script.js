const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

// ===

const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

function close1(){
    var close_btns = document.getElementById("box-1")
    close_btns.style.display = "none";
}
function close2(){
    var close_btns = document.getElementById("box-2")
    close_btns.style.display = "none";
}
function close3(){
  var close_btns = document.getElementById("box-3")
  close_btns.style.display = "none";
}
function close4(){
  var close_btns = document.getElementById("box-4")
  close_btns.style.display = "none";
}

function minimize1(){
  var x = document.getElementById("box-details-1");

  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function minimize2(){
  var x = document.getElementById("box-details-2")

  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function minimize3(){
  var x = document.getElementById("box-details-3")

  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}

function minimize4(){
  var x = document.getElementById("box-details-4")

  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}


