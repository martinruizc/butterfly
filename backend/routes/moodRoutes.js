import express from "express"
import { getMood, getMoodById } from '../controllers/moodControlles.js'
export const router = express.Router()

router.route('/').get(getMood)
router.route('/:id').get(getMoodById)