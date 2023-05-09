const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://moseeqi123:moseeqi123@cluster0moseeqi.zmhmuqi.mongodb.net/moseeqi?retryWrites=true&w=majority', (err, db) => {
    if (!err) {
        console.log('MongoDB connection succeeded');
        // var dbo = db("moseeqi123")
    }

    else {
        console.log('Error in DB connection :' + JSON.stringify(err, undefined, 2));
    }
})

module.exports = mongoose;