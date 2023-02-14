import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { moods } from './data/moods.js'
import { questionMarks } from './data/questions.js'
import { Mood } from './models/moodModel.js'
import { Question } from './models/questionModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Question.deleteMany()        
        await Mood.deleteMany()

        const createdMoods = await Mood.insertMany(moods)

        const createdQuestions = await Question.insertMany(questionMarks)

        console.log('Data imported');
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

const destroyData = async () => {
    try {
        await Question.deleteMany()
        await Mood.deleteMany()
        
        console.log('Data deleted');
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}