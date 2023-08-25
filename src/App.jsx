import { useState } from 'react'
import './App.css'
import AddTodoForm from './AddTodoForm'
import ShowTodo from './ShowTodo'

function App() {

  const [todos, setTodos] = useState([{todo: "Lägg till nya items", id: 1}, {todo: "Ta bort items", id: 2}])

  const updateTodos = (getItem) => {
    setTodos([...todos, {todo: getItem, id: todos.length+1}])
  }

  const removeTodo = (getId) => {
    setTodos(todos.filter(item => item.id !== getId));
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
