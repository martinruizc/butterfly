import axios from 'axios'

export const getMoods =  async () => {
    const {data} = await axios.get('api/moods')
    return data
}