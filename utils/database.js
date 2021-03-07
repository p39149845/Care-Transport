const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:1234@testapi.f7gds.mongodb.net/MongoTest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connect'))
    .catch(err => console.log(err))