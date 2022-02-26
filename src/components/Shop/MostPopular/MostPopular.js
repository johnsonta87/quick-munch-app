import React from 'react';
import { ProductListStyles } from '../ProductList.styles';

export default function MostPopular() {
  const products = [
    {
      id: 1,
      title: 'Extra Beef Burger',
      rating: 4.8,
      price: 9.99,
    },
  ];

  if (!products.length) return null;

  return (
    <ProductListStyles>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>{product.title}</div>
            <div>{product.rating}</div>
            <div>{product.price}</div>
          </li>
        ))}
      </ul>
    </ProductListStyles>
  );
}
