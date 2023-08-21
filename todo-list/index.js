const todoForm = document.querySelector('.new-todo')
const todosContainer = document.querySelector('.todos')

let todos = []

const saveTodosInLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}

const saveTodo = (todo) => {
  todos.push(todo)
  saveTodosInLocalStorage()
}

const deleteTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId)
  saveTodosInLocalStorage()
}

const updateTodo = (todoId) => {
  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        completed: !todo.completed,
      }
    }
    return todo
  })
  saveTodosInLocalStorage()
}

const displayTodosFromLocalStorage = () => {
  const todosLocalStorage = JSON.parse(
    window.localStorage.getItem('todos')
  )
  todos = todosLocalStorage || []
  const html = todos
    .map((todo) => {
      let classname = 'todo'
      if (todo.completed) classname += ' completed'
      return `<div id="${todo.id}" class="${classname}">${todo.todo}</div>`
    })
    .join(' ')

  todosContainer.innerHTML = html
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const todoInput = todoForm.querySelector('input')

  if (!todoInput.value.length) return
  const id = window.crypto.randomUUID()
  const todoItem = {
    todo: todoInput.value,
    completed: false,
    id,
  }

  const newTodo = document.createElement('div')
  newTodo.innerHTML = todoInput.value
  newTodo.className = 'todo'
  newTodo.id = id

  todosContainer.append(newTodo)
  saveTodo(todoItem)

  todoInput.value = ''
})

todosContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('completed')
    updateTodo(e.target.id)
  }
})

todosContainer.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('todo')) {
    e.target.remove()
    deleteTodo(e.target.id)
  }
})

displayTodosFromLocalStorage()
