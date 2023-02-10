import {Routes, Route} from 'react-router-dom'
import { ConfirmationComponet } from '../src/Components/Confirmation'
import { HomePage } from '../src/Pages/HomePage'
import { QuestionsComponent } from '../src/Pages/Questions'

export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="question" element={<QuestionsComponent/>}/>
                <Route path="question/success" element={<ConfirmationComponet/>}/>

            </Routes>
        </>
    )
}