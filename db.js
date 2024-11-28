const mongoose = require('mongoose')


const MongoLink = process.env.MongoURL

mongoose.connect(MongoLink, 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
)

const db = mongoose.connection;
db.on('connected', () => {
    console. log("Connected to Mongo DB server");
});

db. on('error', ( err) => {
    console. log("Error while connecting", err);
});
    
    







