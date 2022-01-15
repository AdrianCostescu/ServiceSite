import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';
import { GiAutoRepair } from 'react-icons/gi';
import { IoMenu } from 'react-icons/io5';
import RightMenu from './RightMenu';

const Menu = ({menuClick, setMenuClick}) => {

    const clickHandler = () => {
        setMenuClick(true);
        console.log(menuClick);
    }

    return (
        <div className='menu-box'>
            <div className='logo'>
                <Link to='/'><GiAutoRepair fontSize='60px' color='#FFFFFF'/></Link>
                <Link to='/'><h1>REPAIR EXPERT</h1></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/review'>Review</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                </ul>
            </nav>
            <div className='menu-small'>
                <IoMenu fontSize='30px' onClick={clickHandler}/>
            </div>
            {menuClick && <RightMenu menuClick = {menuClick} setMenuClick={setMenuClick}/>}
        </div>
    )
}

export default Menu
