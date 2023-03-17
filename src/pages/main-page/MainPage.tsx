import React from 'react';
import './mainPage.scss';
import SearchBar from '../../components/search-bar/SearchBar';
import productDB from '../../db/productDB';
import Product from '../../components/product/Product';

export const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <SearchBar />
        <div className="products">
          {productDB.map((el, i) => (
            <Product product={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
