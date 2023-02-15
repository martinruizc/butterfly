import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { randomQuestions } from '../Pages/helpers/randomQuestions'
import { QuestionCard } from './QuestionCard'

export const Question = () => {

    const [questions, setQuestiones] = useState([])
    
    const getQuestions = async () =>{
        const newQuestions = await randomQuestions()
        setQuestiones(newQuestions)
    }


    useEffect(() => {
        getQuestions()
    },[])

    
  return (
    <Row className='row ml-5'>
    {questions.map((question) => (
        <Col key={question._id}>
            <QuestionCard question={question}/>
        </Col>
    ))
}
    </Row>
  )
}
