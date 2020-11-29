import React from 'react'
import './Product.css'
import BasketPic from './basket.svg';
import ProductImage from './product1.jpg'

function Product() {
    return (
            <a className='productItem' href='#'>
                <img className='productItemImg' src={ProductImage}/>
                <h4 className='productItemTitle'>Настольная игра "Буритто" </h4>
                <p className='productItemPrice'>250 000 сум</p>
                <button className='productItemBasket'>
                    <img src={BasketPic} />
                </button>
            </a>
    )
}

export default Product
