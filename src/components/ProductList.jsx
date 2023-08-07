import React from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://64d08fddff953154bb79132d.mockapi.io/items')
            .then((res) => { return res.json() })
            .then((json) => setItems(json))
    }, []);

    return (
        <div className="content__items">
            {items.map((obj) => <ProductCard
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