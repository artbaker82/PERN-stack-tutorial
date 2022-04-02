const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db');
//middleware
app.use(cors())
//allows us to get json from request.body
app.use(express.json())

//routes

//create a todo

app.post('/todos', async (req,res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    )
    res.json(newTodo)
  } catch (error) {
    console.log(error)
  }
})

//get all

//get a todo

//update

//deleta







app.listen(5000, () => {
  console.log('server has started on port 5000')
})