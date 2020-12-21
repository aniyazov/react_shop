import React from 'react'
import HotSale from './banner.webp'
import './HomePage.css'
import Week from './Week/Week'
import Products from './Products/Products'
import Footer from '../Footer/Footer'
import NewArr from './NewArr/NewArr'
import ArrBook from './Books/ArrBook'



function HomePage(props) {
    return (
        <div className='HomePage'>
            <img src={HotSale} className='HotSale'/> 
            <Week/>
            <Products  intProd = {props.intProd}/>
            <ArrBook/>
            <Footer/>
        </div>
        
    )
}

export default HomePage
