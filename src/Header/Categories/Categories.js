import React from 'react'
import './Categories.css'

function Categories() {
    return (
        <ul className='menu-categories'> 
            <li className='menu-categories_item'>
                <a href='#' className='menu-categories_link'>Товары для дома</a>
            </li>
            <li className='menu-categories_item'>
                <a href='#' className='menu-categories_link'>Товары для машины</a>
            </li>
            <li className='menu-categories_item'>
                <a href='#' className='menu-categories_link'>Техно</a>
            </li>
            <li className='menu-categories_item'>
                <a href='#' className='menu-categories_link'>Подарки</a>
            </li>
            <li className='menu-categories_item'>
                <a href='#' className='menu-categories_link'>Удиви!</a>
            </li>     
        </ul>
    )
}

 export default Categories
