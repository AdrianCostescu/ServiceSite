import React from 'react'
import { Link } from 'react-router-dom';
import './Content.css'
import { useNavigate } from 'react-router';
import sound from '../img/sound.png';
import large from '../img/large.png';
import small from '../img/smal.png';
import laptop from '../img/laptop.png';
import phone from '../img/phone.png';
import monitor from '../img/monitor.png';

const Content = () => {

    let navigate = useNavigate();

    return (
        <div className='mainContent'>
            <div className='title-content'>
                <h1>SERVICES OFFERED</h1>
                <p>Don't worry, no matter the problems, we have solutions for each of them. Find out the details about the object you want to repair and the prices for it.</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={sound} alt="Sound" />
                <p>AUDIO-VIDEO &amp; FOTO</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={large} alt="Large" />
                <p>large appliances</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={small} alt="Small" />
                <p>small appliances</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={laptop} alt="Laptop" />
                <p>laptop &amp; IT</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={phone} alt="Phone" />
                <p>Smartphone &amp; tablet</p>
            </div>
            <div className='content-boxM' onClick={() => {navigate('/form')}}>
                <img src={monitor} alt="Monitor" />
                <p>TV &amp; monitor</p>
            </div>
        </div>
    )
}

export default Content
