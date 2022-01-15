import React from 'react'
import '../component/Review.css'

const Review = () => {
    return (
        <div className='review-box'>
            <h1>Your Review</h1>
            <div className='title-review'>
                <p>Title of your review</p>
                <input type='text' required placeholder='Title'/>
            </div>
            <div className='review-people'>
                <p>Your review</p>
                <input type="text" required placeholder='Tell people your review'/>
            </div>
            <div className='title-review'>
                <p>Your name</p>
                <input type='text' required placeholder='Name'/>
            </div>
            <div className='title-review'>
                <p>Your email</p>
                <input type='text' required placeholder='Email'/>
            </div>
            <button>Send</button>
        </div>
    )
}

export default Review
