import React, { Fragment, useState, useContext } from 'react'
import { AppContext } from '../App'

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  const {handleTodoUpdate: updateParent} = useContext(AppContext)

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      updateParent()
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#modal_id${todo.todo_id}`}>
        Edit
      </button>

      <div class="modal fade" id={`modal_id${todo.todo_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input 
                type='text' 
                className='form-control' 
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => handleEdit(e)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo