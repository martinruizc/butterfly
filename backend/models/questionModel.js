import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    field: {
        type: String, 
        required: true,
    },

    question: {
        type: String,
        required: true
    },
})

export const Question = mongoose.model('Question', questionSchema)