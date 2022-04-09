import React, { Fragment, useEffect, useState } from 'react'

const ListTodos = () => {
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
  
  useEffect(() => {
    getTodos()
  })

  return (
    <Fragment> 
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo) => {
              return (
                <tr id={todo.todo_id}>
                  <th scope="row">{todo.todo_id}</th>
                  <td>{todo.description}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
