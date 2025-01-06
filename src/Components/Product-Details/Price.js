// Price.js
import React from 'react';

const Price = ({ currentPrice, originalPrice }) => {
  // Calculate discount if originalPrice is provided
  const discount = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontWeight: 'bold' , fontSize: '24px',}}>${currentPrice.toFixed(2)}</span>
      {originalPrice && (
        <>
          <span style={{ textDecoration: 'line-through', color: 'gray' }}>${originalPrice.toFixed(2)}</span>
          <span style={{ color: 'red', fontWeight: 'bold' }}>{discount}% Off</span>
        </>
      )}
    </div>
  ); 
};

export default Price;
