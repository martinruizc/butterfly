import { useState } from 'react'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { RatingComponent } from './Scores'

export const MoodComponent = ({mood}) => {

//   const [rating, setRating] = useState(0)



  return (
    <Card className="fs">
        <Link to={`question`}>
            <Card.Img src={mood.image} style={{ width: '4rem'}}/>
        </Link>
    </Card>

  
                            
    
 

  )
}
