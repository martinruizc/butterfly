
import {Link} from 'react-router-dom'
import { MoodComponent } from '../Components/Mood'
import { QuestionsComponent } from './Questions'




export const ScreenComponent = () => {
    
    return (
        <div id='card'>
            <h3><span>DEMO INC.</span> would like to know:</h3>
            <h1>How is your week going?</h1>
            <MoodComponent />
            <div>
                <p> Your answer will always remain anonymous</p>
            </div>
        </div>
    )    
}