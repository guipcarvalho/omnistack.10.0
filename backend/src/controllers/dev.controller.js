const axios = require('axios')
const Dev = require('../models/dev.model')
const parseStringArray = require('../helpers/parseStringArray.helper')

module.exports = {
    async index(req, resp) {
        const devs = await Dev.find()

        return resp.json(devs)
    },

    async store(req, resp) {
        const { github_username, techs, latitude, longitude} = req.body

        let dev = await Dev.findOne({ github_username })

        if(!dev) {
    
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
            console.log(apiResponse.data)
        
            const { name = login, avatar_url, bio } = apiResponse.data
        
            const techsArray = parseStringArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
    
        return resp.json(dev)
    }
}