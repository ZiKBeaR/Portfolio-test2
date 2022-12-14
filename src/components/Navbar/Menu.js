import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { file } from '../../data'
import './Navbar.css'

const MenuNavbar = () => {
    const [click, setClick] = useState(false)
    return (
        <div className='navbar'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            {file.map((item)=> {
              return(
                <li className='liclass'>
                  <Link to={item.href} className='nav-items'>{item.name}</Link>
                </li>
              )
            })} 
            </ul>
            <div className='hamburger' onClick={() => setClick(!click)}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}
            </div>
        </div>
    )
}

export default MenuNavbar