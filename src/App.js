import React from "react";

import {
  Route,
  Routes
} from "react-router-dom";

import './scss/app.scss';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import Header from "./components/Header";
import Basket from './pages/Basket'

export const SearchContext = React.createContext("");


function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <React.StrictMode>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="basket" element={<Basket />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </React.StrictMode>
  );
}

export default App;
