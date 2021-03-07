const Driver = require('../utils/Driver')
const User = require('../utils/User')
const RoomRequest = require('../utils/RoomRequest')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Query = {
    getDriver: async () => {
        return await Driver.find()
    },
    getUser: async () => {
        return await User.find()
    },
    getRoomRequest: async () => {
        return await RoomRequest.find()
    },
}

module.exports = Query