import React from 'react'
import  './UserPanel.css';
import UserPic from './user.svg';
import BasketPic from './basket.svg';

function UserPanel() {
    return (
        <div className='header_box'> 
            <ul className='user-list'>
                <li className='user-list_item'>
                    <a className='user-list_link'>
                        <img src={UserPic}></img>
                    </a>
                </li>
                <li className='user-list_item'>
                    <a className='user-list_link'>
                        <img src={BasketPic}></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

 export default UserPanel
