import { useState } from 'react'
import { Card } from "react-bootstrap"
import { RatingComponent } from './Scores'

export const QuestionCard = ({question}) => {

  const [rating, setRating] = useState(0)




  return (
    <Card className="my-2 p-3 rounded" style={{ width: '35rem' }}>
      <Card.Body>
        <Card.Title className='category'>
          {question.field}
        </Card.Title>
        <Card.Text className='p'>
          {question.question}
        </Card.Text>

        <RatingComponent rating={rating} onRating={(rate) => setRating(rate)}/>

      </Card.Body>
      <Card.Link>
        <p>Add comment </p>
      </Card.Link>
 

    </Card>

  
                            
    
 

  )
}
