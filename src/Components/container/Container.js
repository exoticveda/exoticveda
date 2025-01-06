import React from 'react';
import './container.css';
import img from './banner-1571858_1920.jpg'
const Container = () => {
  return (
    <div className='rr2'>
      <div>
        <img src={img} style={{ maxWidth: '100%', minWidth: '100%' }} alt='exotic veda-revaais '  loading="lazy" ></img>
      </div>
      <div className='Container-Section'  >
        <p >
          Crafted by nature enthusiasts who were inspired by the rich traditions of Ayurveda, Exotic Veda was born out of a desire to create natural products that truly honor the beauty of your skin and hair. Frustrated by synthetic options that lacked authenticity, we turned to ancient wisdom to develop pure, effective solutions for holistic well-being.
        </p>
        <button className='btn' style={{marginTop:'20px'}}><a href='https://revaais.com/'> Explore Our Store</a></button>
      </div>


    </div>
  );
};

export default Container;
