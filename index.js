const express = require('express')
const app = express()
const PORT = 5000
const router = require('./routes/api.js')
const server = require('http').Server(app)
const dashboard = require('./controllers/dashboard-middleware.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(dashboard)

app.use('/status', express.static('public'))
app.use('/', router)

server.listen(PORT)
