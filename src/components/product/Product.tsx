import IProduct from '../../models/products';
import './product.scss';

import React, { Component } from 'react';

interface Props {
  product: IProduct;
}

interface RatingProps {
  rating: number;
}

const capitilizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const setGoodsItemName = (item: IProduct) => `${capitilizeFirstLetter(
  item.brand,
)} 
  ${item.name} 
  ${item.category === 'laptops' ? item.displaySize : ''} 
  ${
    item.storage && item.category !== 'watches' && item.brand !== 'samsung'
      ? item.storage
      : ''
  } 
  ${
    (item.category !== 'headphones' && item.category !== 'watches') ||
    item.brand !== 'apple'
      ? item.color
      : ''
  } 
  ${item.model}`;

export const Rating = (props: RatingProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.03 12.44"
          className="product-info-rating-star"
          key={i}
        >
          <path
            fill="#7c7b80"
            d="M2.5,12.33c.12,.09,.26,.13,.41,.1s.32-.11,.5-.24l3.1-2.28,3.11,2.28c.18,.13,.35,.21,.5,.24s.29,0,.41-.1c.12-.09,.19-.21,.22-.36,.03-.15,0-.33-.07-.54l-1.22-3.64,3.13-2.25c.18-.13,.31-.26,.38-.4s.08-.28,.04-.42c-.05-.14-.14-.25-.28-.32s-.32-.1-.54-.1l-3.84,.02L7.17,.65c-.07-.21-.16-.38-.27-.49-.11-.11-.24-.16-.39-.16s-.28,.05-.38,.16c-.11,.11-.2,.27-.27,.49l-1.17,3.66-3.84-.02c-.23,0-.41,.03-.54,.1-.14,.07-.23,.18-.28,.32-.05,.14-.04,.29,.04,.42,.07,.14,.2,.27,.38,.4l3.13,2.25-1.22,3.64c-.07,.21-.1,.39-.07,.54s.1,.27,.22,.36h0Z"
          />
        </svg>,
      );
    } else {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.03 12.44"
          className="product-info-rating-star"
          key={i}
        >
          <path
            fill="#c2c2c7"
            d="M2.5,12.33c.12,.09,.26,.13,.41,.1s.32-.11,.5-.24l3.1-2.28,3.11,2.28c.18,.13,.35,.21,.5,.24s.29,0,.41-.1c.12-.09,.19-.21,.22-.36,.03-.15,0-.33-.07-.54l-1.22-3.64,3.13-2.25c.18-.13,.31-.26,.38-.4s.08-.28,.04-.42c-.05-.14-.14-.25-.28-.32s-.32-.1-.54-.1l-3.84,.02L7.17,.65c-.07-.21-.16-.38-.27-.49-.11-.11-.24-.16-.39-.16s-.28,.05-.38,.16c-.11,.11-.2,.27-.27,.49l-1.17,3.66-3.84-.02c-.23,0-.41,.03-.54,.1-.14,.07-.23,.18-.28,.32-.05,.14-.04,.29,.04,.42,.07,.14,.2,.27,.38,.4l3.13,2.25-1.22,3.64c-.07,.21-.1,.39-.07,.54s.1,.27,.22,.36h0Z"
          />
        </svg>,
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
        <img
          src={this.currProduct.imgs[0]}
          alt="product"
          className="product-image"
        />
        <div className="product-info">
          <div className="product-info-name">
            {setGoodsItemName(this.currProduct)}
          </div>
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
