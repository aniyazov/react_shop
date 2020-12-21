import React from 'react'
import './ArrBook.css';


function ArrBook() {
    return (
        <div className='ArrBook'> 
            <div className='leftSide'>
                <h2 className='leftSideH'>Билл Гейтс порекомендовал пять книг на лето 2020 года</h2>
                <p>Сооснователь Microsoft Билл Гейтс уже 10 лет ведет онлайн-блог 
                    «Записки Гейтса» (The Gates Notes) — миллиардер пишет о лидерстве, инновациях, образовании, 
                    здоровье и благотворительности. 
                    Регулярной рубрикой стали книжные советы.</p>
            </div>
            <div className='rightSide'>
                <img src='https://freepngimg.com/thumb/bill_gates/23883-1-bill-gates-photos.png' className='authorBlockImg'/>
                <div className='authorBlock'></div>
            </div>
        </div>
    )
}

export default ArrBook
