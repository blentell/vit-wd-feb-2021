
function submit() {
    
var entry = document.getElementById("task");
var ul = document.getElementById("toDoList");
var li = document.createElement("li");
li.innerText = entry.value;
ul.appendChild(li)

}