import React from 'react'
import './MiniSlide.css'
import map from '../img/map.png';
import repair from '../img/repair.png';
import quality from '../img/quality.png';
import doctor from '../img/doctor.png';

const MiniSlide = () => {
    return (
        <div className='color'>
        <div className='miniSlide-box'>
            <div className='first-box'>
                <img src={map} alt="Logo" /> 
                <p>WORLDWIDE COVERAGE</p>
            </div>
            <div className='first-box'>
                <img src={repair} alt="Logo" /> 
                <p>FAST REPAIR</p>
            </div>
            <div className='first-box'>
                <img src={quality} alt="Logo" /> 
                <p>WARRANTY ON REPAIR</p>
            </div>
            <div className='first-box'>
                <img src={doctor} alt="Logo" /> 
                <p>QUICK DIAGNOSTICS</p>
            </div>
        </div>
        </div>
    )
}

export default MiniSlide
