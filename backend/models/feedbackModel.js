import mongoose from 'mongoose'

const feedbackShema = mongoose.Schema({
    raiting: { type: Number, required: true},
    comment: {type: String, required: true},
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
})

export const Feedback = mongoose.model('Feedback', feedbackShema)