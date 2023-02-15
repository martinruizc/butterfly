import images from '../assets/images'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getMoodDetail } from './helpers/getMoodDetail'
import { Card, Col, Row } from 'react-bootstrap'



export const MoodSelesctedComponent = () =>{

    const {moodId} = useParams()
    const [mood, SetMood] = useState([])

    const getData = async (id) => {
        const data = await getMoodDetail(id)
        SetMood(data)
    }

    useEffect(()=> {
        getData(moodId)
    },[])    



    

        
    return (
        <Col className='ml-5'>
            <Row>
                <p>{mood.message}</p>
            </Row>
            <Row>
                <img src={mood.image} alt={mood.name} />
            </Row>
        </Col>
        
    )
}