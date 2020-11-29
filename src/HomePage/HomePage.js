import React from 'react'
import HotSale from './banner.webp'
import './HomePage.css'
import Week from './Week/Week'
import Products from './Products/Products'
import Footer from '../Footer/Footer'

function HomePage() {
    return (
        <div className='HomePage'>
            <img src={HotSale} className='HotSale'/> 
            <Week/>
            <Products/>
            <Footer/>
        </div>
        
    )
}

export default HomePage
