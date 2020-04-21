const express = require('express')
require('./db/mongoose')
const readingRouter = require('./routers/reading')

const app = express()
app.use(express.json())
app.use(readingRouter)

// app.listen(3000)
app.listen(process.env.PORT, '0.0.0.0')
