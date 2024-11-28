const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fname : {
       type: String,
    //    required: true
    },
    age : {
        type: Number
    },
    id :{
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: String,
        // required: true
    }
})

const Student = mongoose.model('StudentData', studentSchema)

module.exports = Student;

