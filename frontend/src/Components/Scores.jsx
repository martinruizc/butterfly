import images from '../assets/images'




export const Scores = () => {
    return (
        <div>
            <div className="score-bar">
                <img src={images.StarIcon} alt="" className='star-1' />
                <img src={images.StarIcon} alt="" className='star-2' />
                <img src={images.StarIcon} alt="" className='star-3' />
                <img src={images.StarIcon} alt="" className='star-4' />
                <img src={images.StarIcon} alt="" className='star-5' />
                <img src={images.StarIcon} alt="" className='star-6' />
                <img src={images.StarIcon} alt="" className='star-7' />
                <img src={images.StarIcon} alt="" className='star-8' />
                <img src={images.StarIcon} alt="" className='star-9' />
                <img src={images.StarIcon} alt="" className='star-10' />


            </div>
            <div className="score-labels">
                <p>Disagree</p>
                <p>Agree</p>

            </div>
        </div>

    )
}