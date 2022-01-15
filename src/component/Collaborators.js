import React from 'react'
import './Collaborators.css'
import samsung from '../img/samsung.png';
import asus from '../img/asus.png';
import delonghi from '../img/DeLonghi.png';
import lenovo from '../img/Lenovo.png';
import panasonoic from '../img/Panasonic.png';

const Collaborators = () => {
    return (
        <div className='box-coll'>
            <div className='box-img'>
                <img src={samsung} alt="Samsung" /> 
                <img src={asus} alt="Asus" /> 
                <img src={delonghi} alt="DeLonghi" /> 
                <img src={lenovo} alt="Lenovo" /> 
                <img src={panasonoic} alt="Panasonic" /> 
            </div>
        </div>
    )
}

export default Collaborators
