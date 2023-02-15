import axios from 'axios'

export const getMoodDetail =  async (id) => {
    const { data } = await axios.get(`/api/moods/${id}`)
    return data
}