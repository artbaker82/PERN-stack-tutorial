import React, { Fragment, useState, useContext } from 'react'
import { AppContext } from '../App'

const AddTodo = () => {
  const [description, setDescription] = useState('')
  const { handleTodoUpdate: updateParent } = useContext(AppContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      updateParent()
      setDescription('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Fragment>
      <h1 className='text-center mt-5'>
        Todo List
      </h1>

      <form className='d-flex mt-5' onSubmit={handleSubmit}>
        <input 
          type="text" 
          className='form-control' 
          value = {description}
          onChange = {e => setDescription(e.target.value)}
        />
        <button className='btn btn-success mx-1'>Add</button>
      </form>
    </Fragment>
  )
}

export default AddTodo


