window.onload = function() {
var todolist = [];

add_item.addEventListener("click", function() {
	var item = {};
	if (item.todo = document.getElementById("input_item").value === "") {
		alert("What need to do?")
	} else {
		item.todo = document.getElementById("input_item").value;
		item.check = false;
	 	todolist.push(item);
	 	out(item);
	 	add_item = document.getElementById("input_item").value = ""
	}
})

function out(item) {
	var out_li = document.createElement("li");
	out_li.innerHTML = item.todo;
	out_ul.appendChild(out_li);
}

var list = document.querySelector('ul')
list.addEventListener("click", function() {
	event.target.style.textDecoration = 'line-through';


}, false)

clear_item.addEventListener("click", function() {
	todolist.length = 0;
	while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
})

}


