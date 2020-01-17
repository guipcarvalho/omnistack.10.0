const { Router } = require('express')
const DevControlller = require('./controllers/dev.controller')
const SearchControlller = require('./controllers/search.controller')

const routes = Router()

routes.get('/devs', DevControlller.index)
routes.post('/devs', DevControlller.store)

routes.get('/search', SearchControlller.index)

module.exports = routes