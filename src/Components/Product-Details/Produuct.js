// Product.js
import React from 'react';
import { productData } from './recipdata';
import Price from './Price';
import AdditionalInfo from './AdditionalInfo';

const Product = ({ productId }) => {
  const product = productData[productId];

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <h1 style={{ textAlign: 'justify', fontSize: '18px', fontFamily: 'serif' }}>
        {product.name}
      </h1>

      {/* Automatically Calculated Price Section */}
      <Price currentPrice={product.price.current} originalPrice={product.price.original} />

      <h2 style={{ textAlign: 'start', fontFamily: 'serif' }}>Product Description</h2>
      <ul style={{ textAlign: 'justify', listStyle: 'circle' }}>
        {/* Check if additionalInfo exists and display the table */}
        {product.additionalInfo && product.additionalInfo.length > 0 && (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            {/* <thead>
              <tr>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Label</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Value</th>
              </tr>
            </thead> */}
            <tbody>
              {product.additionalInfo.map((info, index) => (
                <tr key={index}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                    <strong>{info.label}:</strong>
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Print Benefits regardless of the table */}
        <h2 style={{ textAlign: 'start' }}>Benefits</h2>
        {product.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Additional Info Component */}
      <AdditionalInfo />
    </div>
  );
};

export default Product;
