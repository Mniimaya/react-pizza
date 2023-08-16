import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slises/filterSlice';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ProductList from '../components/Products/ProductList';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';


function Home() {
    const { categoryId, sort } = useSelector(state => state.filterSlice);
    const dispatch = useDispatch();

    const categoriesItems = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const order = sort.sortProperty.includes("-", "") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const serach = searchValue ? `&search=${searchValue}` : "";

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    React.useEffect(() => {
        setIsLoading(true);
        axios.get(`https://64d08fddff953154bb79132d.mockapi.io/items?${!serach ? "page=" + currentPage + "&" : ""}limit=4&${category}&sortBy=${sortBy}&order=${order}${serach}`)
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [categoryId, sort, searchValue, currentPage]);


    return (
        <>
            <div className="content__top">
                {!serach && <Categories categoriesItems={categoriesItems} value={categoryId} onClickCategory={onClickCategory} />}
                <Sort />
            </div>
            <h2 className="content__title">{`${categoriesItems[categoryId]} пиццы`}</h2>
            <ProductList value={items} statusLoading={isLoading} searchValue={searchValue} />
            {!categoryId && !serach && (<Pagination onChangePage={(number) => setCurrentPage(number)} countProducts={items} />)}

        </>

    )
}

export default Home