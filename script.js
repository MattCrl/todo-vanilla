const todoField = document.getElementById("new-todo")
const todoList  = document.getElementById("todo-list")

todoField.addEventListener("keypress", function(e) {
  console.log(e.which)
  console.log(todoField.value)
  let keyPressed = e.which
  if (keyPressed === 13) {
    todoList.innerHTML += `<li> ${todoField.value} </li>`
  }
})