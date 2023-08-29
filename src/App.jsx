import { useEffect, useState } from 'react'
import './App.css'
import AddTodoForm from './AddTodoForm'
import ShowTodo from './ShowTodo'

function App() {

  const [todos, setTodos] = useState([])

  const getTodos = () => {
    fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
  }

  useEffect(()=> {
    getTodos()
  }, [])

  const updateTodos = (getItem) => {
    //setTodos([...todos, {todo: getItem, id: todos.length+1}])
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({todo: getItem, id: Date.now()})
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      getTodos()
    })
  }

  const removeTodo = (getId) => {
    //setTodos(todos.filter(item => item.id !== getId));
    fetch("http://localhost:3000/todos/" + getId , {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      getTodos()
    })

  }

  return (

      <div>
        <h1>Todo</h1>
        <AddTodoForm updateTodos={updateTodos}/>

      {todos.map(item => (
        <ShowTodo todo={item.todo} key={item.id} id={item.id} removeTodo={removeTodo}/>
      ))}

      </div>

  )
}

export default App
