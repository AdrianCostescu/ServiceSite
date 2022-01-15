import React from 'react'
import '../component/About.css'
import phone from '../img/phonee.png';


const About = () => {
    return (
        <div className='all-about'>
            <div className='box-about'>
                <img src={phone} alt='Phone' />
                <p>0725 374 600</p>
            </div>
            <div className='contact-service'>
                <h1>CONTACT SERVICE</h1>
                <p>service@expert-repair.ro</p>
            </div>
            <div className='contact-service'>
                <h1>CONTACT OFFICE CENTRAL</h1>
                <p>office@xpert-repair.ro</p>
            </div>
            <div className='contact-service'>
                <h1>RECLAMAȚII ȘI SESIZĂRI</h1>
                <p>reclamatii@xpert-repair.ro</p>
            </div>
            <div className='contact-service'>
                <h1>PROGRAM CALL CENTER ȘI CURIER</h1>
                <p>Luni - Vineri: 09:00 - 18:00</p>
            </div>
            <div className='contact-service'>
                <h1>PROGRAM SERVICE</h1>
                <p>Luni - Vineri: 09:00 - 18:00</p>
                <p>Sambata: 10:00 - 14:00</p>
            </div>
        </div>
    )
}

export default About
