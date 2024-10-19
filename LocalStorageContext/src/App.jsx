import React, { useEffect, useState } from 'react'
import { TodoContext, TodoProvider, useTodo } from './context/TodoContext'
import TodoForm from './components/TodoForm';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), value: todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => todo.id === prevTodo.id ? { todo } : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodo((prev) => prev.map((todo) => todo.id === id ? { ...prev, completed: !todo.completed } : todo))
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data && data.length > 0) {
      setTodo(data);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todo])


  return (
    <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div>
        <TodoForm />
        {todo.map((todo)=>(
          <div key={todo.value}>
            <Todoitems todo={todo}/>
          </div>
        ))}
      </div>
    </TodoProvider>
  )
}

export default App