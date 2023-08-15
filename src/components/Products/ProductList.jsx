import React from 'react'
import ProductCard from './ProductCard'
import Skeleton from './Skeleton'

function ProductList({ value, statusLoading, searchValue }) {

    const pizzas = value
        .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false;
        }).map((obj) => <ProductCard {...obj} key={obj.id} />);
    return (
        <div className="content__items">

            {
                pizzas.length > 0 ? (statusLoading ? [...new Array(6)].map(() => <Skeleton />) : pizzas) : <p className="information-text"><span>😕</span><br />Пицца не найдена</p>
            }
        </div>
    )
}

export default ProductList