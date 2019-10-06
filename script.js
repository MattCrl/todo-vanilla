const todoField = document.getElementById("new-todo")
const todoList  = document.getElementById("todo-list")
const clearAllButton = document.getElementById("clearAllButton")
let taskNumber = 1

todoField.addEventListener("keypress", function(e) {
  console.log(e.which)
  console.log(todoField.value)
  let keyPressed = e.which
  if (keyPressed === 13) {
    todoList.innerHTML += `<li class="list-group-item" id="task-${taskNumber}"><input type="checkbox" id="checkbox-${taskNumber}"> ${todoField.value} <span class="pull-right remove-button" id="remove-task-${taskNumber}"><i class="fa fa-times"></i></span></li>`
    todoField.value = ''
    taskNumber += 1
  }
})

clearAllButton.addEventListener("click", function() {
  console.log("test")
  todoList.innerHTML = "";
  taskNumber = 1
})

document.addEventListener("click", function() {
  console.log(this)
})
console.log(this)