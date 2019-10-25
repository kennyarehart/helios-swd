const express = require('express')
const app = express()
const expressSM = require('express-status-monitor')
const PORT = 5000
const router = require('./routes/api.js')
const log = require('log')

app.use(expressSM())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(PORT, () => log(`Listening on port ${PORT}`))
