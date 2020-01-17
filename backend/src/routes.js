const { Router } = require('express')
const axios = require('axios')

const routes = Router()

routes.post('/devs', async (req, resp) => {
    const { github_username } = req.body

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    console.log(apiResponse.data)

    return resp.json({ message: 'Hello World vrau'})
})

module.exports = routes