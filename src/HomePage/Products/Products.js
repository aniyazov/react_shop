import React from 'react';
import './Products.css';
import Product from './Product/Product'


function Products() {
    return (
        <div className='productsContent'>
            <h2 className='productsContentDep'>Популярные товары:</h2>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <a className='productItemMainLink' href='#'>
                Посмотреть все товары
            </a>
            
        </div>
        
    )
}

export default Products;
