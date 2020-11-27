import React from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import Logo from './logo.png'
import Categories from './Categories/Categories'
import UserPanel from './UserPanel/UserPanel'

function Header() {
    return (
        <header className='header'>
            <div className='header_top'>
                <div className='container'>
                    <div className='header_top-inner'>
                        <Nav/>
                        <a href='#' className='logo'>
                            <img className='logo' src={Logo} width='90px' height='90px'/>
                        </a>
                        <div className='header_box'>
                            <p className='header_adress'>
                                +998 (99) 823-43-23
                            </p>
                        </div>
                        <UserPanel/>
                    </div>
                   
                </div>
            </div>
            <div className='header_bottom'>
                <div className='container'>
                    <div className='header_bottom-inner'>
                        <Categories/>   
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
