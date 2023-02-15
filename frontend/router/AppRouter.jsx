import {Routes, Route, Navigate} from 'react-router-dom'
import { ConfirmationComponet } from '../src/Components/Confirmation'
import { MoodSelesctedComponent } from '../src/Components/MoodSelected'
import { HomePage } from '../src/Pages/HomePage'
import { QuestionsComponent } from '../src/Pages/QuestionsPage'

export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path='question' element={<QuestionsComponent/>}>
                    <Route path=':moodId' element={<QuestionsComponent/>}/>
                    <Route path="success" element={<ConfirmationComponet/>}/>
                </Route>

            </Routes>
        </>
    )
}