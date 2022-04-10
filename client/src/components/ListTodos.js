import React, { Fragment, useContext } from 'react'
import EditTodo from './EditTodo'
import { AppContext } from '../App'
//TODO Adding and editing a todo updates db, but app is not reflecting those changes
// the changes are reflected on refresh
//find a way to send state back to this component.

//lift state up to app level, and use useContext
// useContext hook :)
const ListTodos = () => {
  const { todos, handleTodoUpdate: updateParent } = useContext(AppContext)
  
  //delete todo
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      })
      updateParent()
    } catch (err) {
      console.error(err.message)
    }
  }
  
  return (
    <Fragment> 
      <table className="table table-striped mt-3">
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
                <tr key={todo.todo_id}>
                  <th scope="row">{todo.todo_id}</th>
                  <td>{todo.description}</td>
                  <td>
                    <EditTodo todo={todo} />
                  </td>
                  <td>
                    <button 
                      className='btn btn-danger'
                      onClick={() => handleDelete(todo.todo_id)}
                    >Delete</button>
                  </td>
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
