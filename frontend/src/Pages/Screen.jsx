
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { MoodComponent } from '../Components/Mood'
import { getMoods } from './helpers/getMoods'

export const ScreenComponent = () => {
    
    const [moods, setmoods] = useState([])


    const getNewMoods = async() =>{
        const newMood = await getMoods()
        setmoods(newMood)
    }


    useEffect(() => {
        getNewMoods()
    },[])





    return (
        <div id='card'>
            <h3><span>DEMO INC.</span> would like to know:</h3>
            <h1>How is your week going?</h1>
            <Row className='column ml-5 '>
                {moods.map((mood) => (
                    <Row key={mood._id}>
                        <MoodComponent mood={mood}/>
                    </Row>
                ))
            }
            </Row>
            <div>
                <p> Your answer will always remain anonymous</p>
            </div>
        </div>
    )    
}