import React from 'react'
import './Nav.css'

function Nav() {
    return (
       <nav className='menu'>
            <ul className='menu_list'>
                <li className='menu_item'><a href='#' className='menu_link'>О магазине</a></li>
                <li className='menu_item'><a href='#' className='menu_link'>Бложек</a></li>
                <li className='menu_item'><a href='#' className='menu_link'>Доставка и оплата</a></li>
            </ul>
       </nav>
    )
}

export default Nav
