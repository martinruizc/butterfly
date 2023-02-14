import mongoose from 'mongoose'

const moodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
    },

    message: {
        type: String, 
        required: true,
    }
})

export const Mood = mongoose.model('Mood', moodSchema)