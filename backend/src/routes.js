const { Router } = require('express')
const DevControlller = require('./controllers/dev.controller')

const routes = Router()

routes.post('/devs', DevControlller.post)

module.exports = routes