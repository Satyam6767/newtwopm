const express = require('express')
const router = express.Router();
const StudentData= require('../Models/StudentData')


router.get('/', function(req, res){
    res.send('hello world')
})

router.get('/apple', function(req, res){
    res.send('this is apple page')
})

router.post('/studentdata', async(req, res)=>{
    try{
        const data = req.body;
        const newStudent = new StudentData(data);
        const response = await newStudent.save();
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

router.get('/studentdata', async(req, res)=>{
    try{
        const data = await StudentData.find();
        res.status(200).json(data)
        console.log("data fetched")
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

router.put('/:id', async(req, res)=>{
    try{

        const studentId = req.params.id;
        const studentData = req.body;

        const response = await StudentData.findByIdAndUpdate(
            studentId,
            studentData,
            {
                new: true,
                runValidators: true
            }
        )
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})




router.delete('/:id', async(req, res)=>{
    try{

        const studentId = req.params.id;
        const response = await StudentData.findByIdAndDelete(studentId)
        res.status(200).json({message: "student recorrd deleted"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "something error"})
    }
})

module.exports = router;