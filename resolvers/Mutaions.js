const Driver = require('../utils/Driver')
const User = require('../utils/User')
const RoomRequest = require('../utils/RoomRequest')


const Mutation = {
    registerDriver: async (
        _, { DriverInput: { name, surname, email, password, idnumber, phnumber } }
    ) => {
        const driver = new Driver({
            name,
            surname,
            email,
            password,
            idnumber,
            phnumber,
        });
        return await driver.save();
    },
    registerCar: async (
        _, { ItemCar: { driverId, carType, carOption } }
    ) => {
        const driver = await Driver.findById(driverId);

        if (driver) {
            driver.car.unshift({
                carType,
                carOption
            });
        }
        return await driver.save();
    },

    deleteDriver: async (_, { id }) => {
        return await Driver.findByIdAndDelete(id)
    },

    registerUser: async (_, { name, surname, email, password, idnumber, phnumber }) => {
        const user = new User({ name, surname, email, password, idnumber, phnumber })
        return await user.save()
    },
    deleteUser: async (_, { id }) => {
        return await User.findByIdAndDelete(id)
    },
    addRoomRequest: async (_,{ carType,dateTime } ) => {
        const roomRequest = new RoomRequest({
            carType,
            dateTime,
        });
        return await roomRequest.save();
    },
    
}

module.exports = Mutation;
