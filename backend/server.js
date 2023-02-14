import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { router as questionRoutes } from './routes/questionRoutes.js'
import { router as moodRoutes } from './routes/moodRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json()
)

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/questions', questionRoutes )
app.use('/api/moods', moodRoutes )

const PORT = process.env.PORT
app.listen(PORT, 
    console.log('Server is running')
    )