import React from 'react'
import './Treat.css'
import { Link } from 'react-router-dom'
const Treatment = () => {
  return (
    <>
      <div className='Treat'>

        <div className='hh'>
          <h1>Ultimate Skincare, Diet, and Hair Care Recipes Tips with Exotic Veda Products </h1>
        </div>
        <p>Elevate your beauty and wellness routine with our curated recipes and expert tips, featuring the finest Exotic Veda products. Whether you're looking to rejuvenate your skin, enhance your diet, or strengthen your hair, we’ve got you covered. Discover how to blend our natural powders and oils into DIY face masks, nourishing smoothies, and revitalizing hair treatments. Unlock the full potential of nature’s best with easy-to-follow guides that bring the power of Ayurveda to your everyday life.</p>

      </div>
      <div style={{ textAlign: 'center' }}>
        <button className='  btn' style={{ marginBottom: '30px' }}><Link to='/products'>Learn More</Link></button>
      </div>
    </>
  )
}

export default Treatment
