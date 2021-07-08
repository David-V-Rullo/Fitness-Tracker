const router = require('express').Router()
const db = require('../models')

router.get('/workouts', async (req, res) => {
    console.log('GET route')
    try {
        const data = await db.Workout.aggregate([
        {
            $addFields: 
            {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }])
        res.json(data)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/workouts', async (req, res) => {
    console.log("POST route")
    try {
        const newWorkout = {
            day: new Date(new Date().setDate(new Date().getDate() - 1)),
            exercises: []
        }
        const data = await db.Workout.create(newWorkout)
        res.json(data)
    }

    catch (err){
        console.log(err)
    }
})

router.put("/workouts/:id", async (req, res) => {
    console.log("PUT route")
    console.log(req.params.id)
    try {
        const data = await db.Workout.updateOne(
            { _id: req.params.id },
            { $push: { exercises: req.body }}
        )
        res.json(data)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/workouts/range', async (req, res) => {
    console.log("GET workout range route")
    try {
        const data = await db.Workout.aggregate([
            {
                $addFields:
                {
                    totalDuration: { $sum: "$exercises.duration"}
                }
            }
        ])
        console.log(data)
        res.json(data)
    }

    catch (err) {
        console.log(err)
    }
})

module.exports = router



