
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react"
import axios from 'axios'
import { randomQuestions } from "./helpers/randomQuestions"

import { MoodComponent } from '../Components/Mood'
import { MoodSelesctedComponent } from '../Components/MoodSelected'
import  {RatingComponent} from '../Components/Scores'
import { QuestionCard } from '../Components/QuestionCard'


export const QuestionsComponent = () => {

    const [questions, setQuestiones] = useState([])
    const [selector, setSelector] = useState()
    const [comment, setComment] = useState(false)



    const getQuestions = async() =>{
        const newQuestions = await randomQuestions()
        setQuestiones(newQuestions)
    }


    useEffect(() => {
        getQuestions()
    },[])


    
    const handleSelectChange = ({ value }) => {
        setComment(true)
        setSelector(value)
    }


    const handleSubmit = async() => {
        console.log(info);
        // await axios.post(`/api/products` , info)

    }
        
    return (
        <div id="questionPage">
            <MoodSelesctedComponent value={2}/>
            <h3>Do you agree with the following statements:</h3>
        <form>
            <Row className='row ml-5'>
                {questions.map((question) => (
                    <Col key={question._id}>
                        <QuestionCard question={question}/>
                    </Col>
                ))
            }
            </Row>

        

        </form>
        </div>
        

    )
}