const express = require('express')
const cors = require('cors')
const app = express()

//middleware
app.use(cors())
//allows us to get json from request.body
app.use(express.json())



app.listen(5000, () => {
  console.log('server has started on port 5000')
})