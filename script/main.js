window.onload = function() {
	var todolist = [];
	var list = document.querySelector('ul');


	add_item.addEventListener("click", function() {
		var item = {};
		var new_item = document.getElementById("input_item").value;
		if (new_item === "") {
			alert("What need to do?");
		} else {
			item.todo = new_item;
			item.check = false;
			todolist.push(item);
			print_todo_item();
			document.getElementById("input_item").value = "";
			}
	})

	function print_todo_item() {
		while (list.lastChild) {
			list.removeChild(list.lastChild);
		}
		todolist.forEach(function(item) {
			var out_li = document.createElement("li");	
			out_li.innerHTML = item.todo;
			out_ul.appendChild(out_li);
			
			if (item.check) {
			out_li.classList.add('checked');
			}
		});
	}


	list.addEventListener("click", function() {
		event.target.classList.add('checked');
	})

	clear_item.addEventListener("click", function() {
		
		while (list.lastChild) {
			list.removeChild(list.lastChild);
		}
	})
	
	clear_item.addEventListener("click", function() {
		todolist.length = 0;
	})

}


