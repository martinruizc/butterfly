import asyncHandler from 'express-async-handler'
import { Question } from '../models/questionModel.js'

export const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({})
    res.json(questions)

})