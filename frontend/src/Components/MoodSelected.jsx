import images from '../assets/images'
import { useState } from "react"
import { useEffect } from 'react'
import { getmood } from './helpers/mood'

const value = getmood()

export const MoodSelesctedComponent = (getmood) =>{
    const [valueMood, setValueMood] = useState({
        src: '',
        text: '',
    })

    const {src, text} = valueMood
    
    useEffect(()=> {
        setValueMood(getImageValue(value))
    },[])


    const getImageValue = (value) => {
        const data = (value === 1) ? {
            src: images.VeryUnhappy,
            text: 'Oops, something needs to change. Thank you for your Feedback'
        } : (value === 2) ? {
            src: images.Unhappy,
            text: 'Mmmmh, things should improve. Thank you for your Feedback.'
        } : (value === 3) ? {
            src:  images.neutral,
            text: 'OK… things could be better. Thank you for your Feedback'
        } : (value === 4) ? {
            src:  images.happy,
            text: ' Great! Thank you for your Feedback.'
        } : (value === 5) ? {
            src: images.VeryHappy,
            text: 'Awesome! Thank you for your Feedback.'
        } : {
            src: null,
            text: 'Choose'
        }
        
        return data
    }

        
    return (
        <div className='flex'>
            <img src={images.EditIcon} alt="" />
            <p>{text}</p>
            <img src={src} className='mood'/>
        </div> 
        
    )
}