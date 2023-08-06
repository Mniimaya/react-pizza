import React from 'react'
import ProductCard from './ProductCard'
import pizzaData from '../assets/pizzaData.json'

function ProductList() {
    return (
        <div className="content__items">
            {pizzaData.map((obj) => <ProductCard
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                key={obj.id}
            />)}
        </div>
    )
}

export default ProductList