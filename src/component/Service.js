import React from 'react'
import './Service.css'
import slide from '../img/fast.png';

const Service = () => {
    return (
        <div className='slide-boxx'>
            <div className='slide-about'>
                <img src={slide} alt="Slide" />
                <div className='slide-about-text'>
                    <h1>OUR MISSION</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita nisi cumque ab unde labore repudiandae! Esse sit fugit adipisci et quae voluptas ipsam distinctio nulla aliquid impedit, alias veniam!</p>
                </div>
            </div>
        </div>
        
    )
}

export default Service
