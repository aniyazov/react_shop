import React from 'react'
import './Week.css'
import Img from './img.png'
import './Week.css'

function Week() {
    return (
        <div className='Week'>
            <div className='WeekContent'>
                <h2>Неделя Капитан Марвел</h2>
                <p>Заказывайте эксклюзивные товары по данной тематике</p>
                <a href='#'>Посмотреть</a>
            </div>
            <img src={Img} />
        </div>
    )
}

export default Week
