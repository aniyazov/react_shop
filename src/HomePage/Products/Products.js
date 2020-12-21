import React from 'react';
import './Products.css';
import Product from './Product/Product'


function Products(props) {
    console.log(props)
    return (
        <div className='productsContent'>
            <h2 className='productsContentDep'>Популярные товары:</h2>
            { props.intProd.map((p) => (
                    <Product image={p.image} name = {p.name} price = {p.price} description = {p.description}/>
                ))
            }

            <a className='productItemMainLink' href='#'>
                Посмотреть все товары
            </a>
            
        </div>
        
    )
}

export default Products;
