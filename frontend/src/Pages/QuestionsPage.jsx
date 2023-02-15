import { MoodSelesctedComponent } from '../Components/MoodSelected'
import { Question } from '../Components/Question'


export const QuestionsComponent = () => {



    return (
        <div id="questionPage">
            {/* <MoodSelesctedComponent/> */}
            <h3>Do you agree with the following statements:</h3>
            <Question/>
        </div>
        

    )
}