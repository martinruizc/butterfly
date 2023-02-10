import _ from 'underscore'
import { getQuestions } from './getQuestions'


export const randomQuestions = async() => {
    const {data} = await getQuestions()
    return _.shuffle( data )
}