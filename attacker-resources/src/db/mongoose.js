const mongoose = require('mongoose')

// process.env.MONGODB_URI

console.log(process.env.MONGODB_URI)
mongoose.connect('mongodb://user:password1@ds247827.mlab.com:47827/heroku_29r51ncj', {
    useNewUrlParser: true,
    useCreateIndex: true
})