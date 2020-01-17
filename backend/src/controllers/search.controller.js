const Dev = require('../models/dev.model')
const parseStringArray = require('../helpers/parseStringArray.helper')


module.exports = {
    async index(req, resp){

        const { latitude, longitude, techs } = req.query

        const techArray = parseStringArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return resp.json(devs)
    }
}