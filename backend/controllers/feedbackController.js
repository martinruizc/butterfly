import asyncHandler from 'express-async-handler'
import { Feedback } from '../models/feedbackModel.js'


export const addFeedback = asyncHandler(async(req, res) => {
    const {raiting, comment } = req.body
    
    const feedback = new Feedback({
        raiting,
        comment,
    })

    const createdFeeback = await feedback.save()
    res.status(201).json(createdFeeback)
})


