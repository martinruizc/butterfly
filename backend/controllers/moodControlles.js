import asyncHandler from 'express-async-handler'
import { Mood } from '../models/moodModel.js'

export const getMood = asyncHandler(async (req, res) => {
    const mood = await Mood.find({})
    res.json(mood)

})



export const getMoodById = asyncHandler(async(req, res) => {
    const mood = await Mood.findById(req.params.id)

    if(mood) {
        res.json(mood)
    } else {
        res.status(404)
        throw new Error('Mood not found')
    }
})