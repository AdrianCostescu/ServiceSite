import React from 'react'
import MiniSlide from './MiniSlide';
import Collaborators from './Collaborators';
import suport from '../img/content.png'
import tran from '../img/content2.png'
import fast from '../img/fast.png'
import './SubContent.css'

const SubContent = () => {
    return (
        <div>
            <div className='subContent-box'>
                <div className='subCon'>
                    <img src={suport} alt='support'/>
                    <div className='subCon-text'>
                        <h1>SUPPORT</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime labore fuga tempora nihil facere? Odio itaque doloribus aperiam animi, nulla a pariatur soluta? Ipsum quasi enim fuga perferendis voluptas.</p>   
                    </div>
                </div>
            </div>

            <MiniSlide />

            <div className='subContent-box'>
                <div className='subCon'>
                <img src={tran} alt='transparrncy'/>
                    <div className='subCon-text'>
                        <h1>TRANSPARRNCY</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime labore fuga tempora nihil facere? Odio itaque doloribus aperiam animi, nulla a pariatur soluta? Ipsum quasi enim fuga perferendis voluptas.</p>   
                    </div>
                </div>
            </div>

            <Collaborators />

            <div className='subContent-box'>
                <div className='subCon'>
                    <img src={fast} alt='fast'/>
                    <div className='subCon-text'>
                        <h1>QUICK DIAGNOSTICS</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime labore fuga tempora nihil facere? Odio itaque doloribus aperiam animi, nulla a pariatur soluta? Ipsum quasi enim fuga perferendis voluptas.</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubContent
