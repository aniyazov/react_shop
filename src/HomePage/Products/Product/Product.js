import React from 'react'
import './Product.css'
import BasketPic from './basket.svg';
import HeartPic from './../../../Header/UserPanel/heart.svg';



function Product(props) {
console.log(props)
    return (
            <a className='productItem' href='#'>
                <div className='productItemImgWrap'>     
                    <img className='productItemImg' src={props.image}/>
                </div>
                <span className='productItemTitle'>{props.name}</span>
                <span className='productItemDiskp'>{props.description} </span>
                <p className='productItemPrice'>{props.price} {' сум'} </p>
                <div className='buttons'> 
                <button className='productItemBasket'>
                    <img src={BasketPic} />
                </button>
                 <button className='productItemBasket heart'>
                    <img src={HeartPic} />
                </button>
                </div>
               
            </a>
    )
}

export default Product
