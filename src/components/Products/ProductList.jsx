import React from 'react'
import ProductCard from './ProductCard'
import Skeleton from './Skeleton'

function ProductList() {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://64d08fddff953154bb79132d.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
                setIsLoading(false)
            })
    }, []);

    return (
        <div className="content__items">
            {
                isLoading ? [...new Array(6)].map(() => <Skeleton />) : items.map((obj) => (
                    <ProductCard title={obj.title}
                        price={obj.price}
                        image={obj.imageUrl}
                        sizes={obj.sizes}
                        types={obj.types}
                        key={obj.id}
                    />
                ))
            }
        </div>
    )
}

// {items.map((obj) => isLoading ? <Skeleton /> :
//                 <ProductCard
//                     title={obj.title}
//                     price={obj.price}
//                     image={obj.imageUrl}
//                     sizes={obj.sizes}
//                     types={obj.types}
//                     key={obj.id}
//                 />)}

export default ProductList