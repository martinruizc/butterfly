
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import { randomQuestions } from "./helpers/randomQuestions"

import { MoodComponent } from '../Components/Mood'
import { MoodSelesctedComponent } from '../Components/MoodSelected'
import  {RatingComponent} from '../Components/Scores'


export const QuestionsComponent = () => {

    const [questions, setQuestiones] = useState([])
    const [selector, setSelector] = useState()
    const [comment, setComment] = useState(false)
    const [rating, setRating] = useState(0)


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

            <MoodSelesctedComponent value={3}/>
            <h3>Do you agree with the following statements:</h3>
        <form>
            {
                questions.map((ques) => (
                    <div key={ques._id} id='card-ques'>
                        <div className='field'>
                            <p>{ques.field}</p>
                        </div>
                        <div>
                            <h3>{ques.question}</h3>
                        </div>


                        <RatingComponent rating={rating} onRating={(rate) => setRating(rate)} />


                        {
                            (comment) && (
                                <textarea
                                id={`comment_${ques?._id}`}
                                className=""
                                placeholder="Anything to add?"
                                name={`comment_${ques?.id}`}

                            />
                            )
                        }
                        <div>
                            <p className='ques-box' onClick={handleSelectChange}>Add comment</p>
                        </div>

                    </div>
                

                ))
            }
        
            <div id="opt-message">
                    
                    <p>Anything to add? (Optional) </p>
                    <textarea placeholder="Express yourself freely and safely. This will always remian anonymous"></textarea>
            </div>
            <Link to={'success'}>
            <button onClick={handleSubmit}>Save</button></Link>
        </form>
        </div>
        

    )
}