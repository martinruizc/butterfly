import axios from 'axios'

export const getQuestions =  async () => {
    return await axios.get('api/questions')
}