import React from 'react'
import HotSale from './banner.webp'
import './HomePage.css'
import Week from './Week/Week'

function HomePage() {
    return (
        <div className='HomePage'>
            <img src={HotSale} className='HotSale'/> 
            <Week/>
                       
        </div>
        
    )
}

export default HomePage
