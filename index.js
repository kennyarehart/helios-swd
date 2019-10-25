const express = require('express')
const log = require('log')
const app = express()
const PORT = 5000
const router = require('./routes/api.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(PORT, () => log(`Listening on port ${PORT}`))
