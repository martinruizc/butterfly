import { Link } from "react-router-dom"
import images from '../assets/images'
import { getmood } from "./helpers/mood"


export const MoodComponent = () => {

    const clickHandler = ({target}) => {
        return target.name  
    }

    return(
        
    <div id='images'>

    <Link to={'/question'} className='img'>
        <img src={images.VeryUnhappy} name={1} onClick={clickHandler} alt=""/>
    </Link>

    <Link to={'/question'} className='img' >
         <img src={images.Unhappy} name={2} onClick={clickHandler} alt=""/>
    </Link>

    <Link to={'/question'} className='img'>
        <img src={images.neutral} name={3} onClick={clickHandler} alt=""/> 
    </Link>

    <Link to={'/question'} className='img' >
        <img src={images.happy} name={4} onClick={clickHandler} alt=""/>
    </Link>

    <Link to={'/question'} className='img' >
        <img src={images.VeryHappy} name={5} onClick={clickHandler} alt=""/>
    </Link>

    
    </div>
    

    )
}

