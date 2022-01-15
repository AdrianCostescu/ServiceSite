import React from 'react'
import { useNavigate } from 'react-router';
import './Slide.css'
import slide from '../img/slide.png';

const Slide = () => {

    let navigate = useNavigate();

    return (
        <div className='slide-box'>
            <div className='img-box'>
                <img src={slide} alt="Slide" />
                <div className='content-box'>
                    <h1>Send to your expert's</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut odio error, perspiciatis sit iste reprehenderit similique obcaecati aperiam voluptatibus maxime animi. Mollitia atque officia nesciunt asperiores nulla sit soluta sed.</p>
                    <button onClick={() => {navigate('/form')}}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Slide
