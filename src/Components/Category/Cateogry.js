import React from 'react'
import skincare from './Assets/Untitled design (65).png'

import puja from './Assets/pujaritualsexoticveda.png'
import diet from './Assets/Diet.jpg'
import hair from './Assets/Haircare.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../products/Assets/prodimg/assets'

const Cateogry = () => {
    const categories = [
        {
            id: 4,
            link: '/category/puja-items',
            img: puja,
            title: 'Puja Essentials',
            text: 'Decorative items for ceremonies',
            lastUpdated: 'Last updated 3 mins ago '
        },
        {
            id: 1,
            link: '/category/skincare',
            img: skincare,
            title: 'Skin care',
            text: 'Reveal Your Natural Beauty',
        },
        {
            id: 2,
            link: '/category/dietary',
            img: diet,
            title: 'Dietary Use',
            text: 'Healthy Choices, Happy You',
        },
        {
            id: 3,
            link: '/category/haircare',
            img: hair,
            title: 'Hair Care',
            text: 'Revive Your Hair\'s Natural Beauty',
        },
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Our Categories</h1>
            <div className='Container' style={{ width: '100%',marginTop:'0' }}>
                <div className='row'>
                    {categories.map(category => (
                        <div className='col-md-4' key={category.id}>
                            <Link to={category.link}>
                                <div className='card1' style={{ padding: '10px' }}>
                                    <img src={category.img} style={{ borderRadius: "50%" }} alt={category.title} height={'150px'} loading="lazy"/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{category.title}</h5>
                                        <p className='card-text' style={{ textAlign: 'center' }}>{category.text}</p>
                                    </div>
                                    <div className='circle-button'>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/*    <div style={{ display: 'flex', gap: '0', flexDirection: 'column' }}>
                <img src={assets.ty} style={{ maxWidth: '100%', minWidth: '100%' }} alt="exotic-veda" loading="lazy" />
         </div> */}

        </div>
    )
}

export default Cateogry;

