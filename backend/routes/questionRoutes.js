import express from "express"
import { addFeedback } from "../controllers/feedbackController.js"
import { getQuestions } from "../controllers/questionController.js"


export const router = express.Router()
router.route('/').get(getQuestions).post(addFeedback)