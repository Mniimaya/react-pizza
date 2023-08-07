import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductList from './components/Products/ProductList';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
