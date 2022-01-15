import React from 'react'
import './Check.css'

const Check = () => {

    const clickHandler = () => {
        alert("You will receive a email with the repair status soon!")
    }

    return (
        <div className='check-box'>
            <div className='check-title'>
                <h1>Check repair status</h1>
            </div>
            <div className='check-input'>
                <input type="text"  className='input-first' placeholder='Service code' required/>
                <input type="text"  className='input-second' placeholder="Email" required/>
                <button onClick={clickHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Check
