import React from 'react'
import { assets } from '../products/Assets/prodimg/assets'
const Specialoffers = () => {
    return (
        <div className='grdiid'>
            <img src={assets.offers} style={{ minWidth: '100%', maxWidth: '100%' }}  alt='special offers  revaais -exoticveda'/>
            <img src={assets.offers1} style={{ minWidth: '100%', maxWidth: '100%' }}  alt=' 5% discount of all  products  on revaais.com'/>
            <img src={assets.offers1} style={{ minWidth: '100%', maxWidth: '100%' }} alt='revaais discount  code -REVAAis First order  ' />
            <img src={assets.offers} style={{ minWidth: '100%', maxWidth: '100%' }}  alt='launching soon products  '/>
        </div>
    )
}

export default Specialoffers
