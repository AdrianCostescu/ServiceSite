import React from 'react'
import { Link } from 'react-router-dom';
import './RightMenu.css'
import { BiX } from 'react-icons/bi';

const RightMenu = ({menuClick, setMenuClick}) => {

    const clickHandler = () => {
        setMenuClick(false)
        console.log(menuClick)
    }

    return (
        <div className='r-menu'>
            <div className='icon-x'>
                <BiX fontSize='40px' onClick={clickHandler}/>
            </div>
             <nav>
                <ul>
                    <li><Link to='/' onClick={clickHandler}>Home</Link></li>
                    <li><Link to='/service' onClick={clickHandler}>Service</Link></li>
                    <li><Link to='/review' onClick={clickHandler}>Review</Link></li>
                    <li><Link to='/about' onClick={clickHandler}>About Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default RightMenu
