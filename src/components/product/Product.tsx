import IProduct from '../../models/products';
import './product.scss';
import FilledStar from '../../assets/filled-star.svg';
import EmptyStar from '../../assets/empty-star.svg';

import React, { Component } from 'react';

interface Props {
  product: IProduct;
}

interface RatingProps {
  rating: number;
}

const capitilizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const setGoodsItemName = (item: IProduct) => `${capitilizeFirstLetter(item.brand)} 
  ${item.name} 
  ${item.category === 'laptops' ? item.displaySize : ''} 
  ${item.storage && item.category !== 'watches' && item.brand !== 'samsung' ? item.storage : ''} 
  ${
    (item.category !== 'headphones' && item.category !== 'watches') || item.brand !== 'apple'
      ? item.color
      : ''
  } 
  ${item.model}`;

export const Rating = (props: RatingProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(
        <img src={FilledStar} className="product-info-rating-star" alt="filled-star" key={i}></img>
      );
    } else {
      stars.push(
        <img src={EmptyStar} className="product-info-rating-star" alt="filled-star" key={i}></img>
      );
    }
  }

  return <div className="product-info-rating">{stars}</div>;
};

export default class Product extends Component<Props> {
  currProduct: IProduct = this.props.product;

  render() {
    return (
      <div className="product" data-testid="product">
        <img src={this.currProduct.imgs[0]} alt="product" className="product-image" />
        <div className="product-info">
          <div className="product-info-name">{setGoodsItemName(this.currProduct)}</div>
          <div className="product-info-stock">{`Stock: ${this.currProduct.stock}`}</div>
          <Rating rating={this.currProduct.rating} />
          <div className="product-info-price-buy">
            <div className="product-info-price">{`$${this.currProduct.price}`}</div>
            <button className="product-info-buy">Buy</button>
          </div>
        </div>
      </div>
    );
  }
}
