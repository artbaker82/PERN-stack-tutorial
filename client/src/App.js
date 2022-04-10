import React, { Fragment, useEffect, useState, createContext } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

export const AppContext = createContext()
function App() {

  //lift state up to app level
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleTodoUpdate = () => getTodos()

  useEffect(() => {
    getTodos()
  }, [])

  const context = {
    handleTodoUpdate,
    todos
  }

  return (
    <AppContext.Provider value={context}>
      <Fragment>
        <div className="container">
          <AddTodo />
          <ListTodos />
        </div>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;
