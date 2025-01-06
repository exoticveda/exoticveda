import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { beetrootProductDetails, beetrootDietaryRecipes, beetrootSkinCareRecipes } from './Recepisdata'; // Import the
import Reciepicard from './Reciepicard';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Beetroortpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare');
  const images = [
    assets.betroot,
    assets.beetrrotuse1,
    assets.beetrootbenefits,
    assets.beetrrotuse2,
    assets.beetrootuse3,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <div className="product-page1"   >
        <div className="image-gallery">
          {/* Side images */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                // style={{maxWidth:'50%',minWidth:'50%'}}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)
                }
              />
            ))}
          </div>
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
            />
          </div>
        </div>
        <Produuct productId="Beetrootpowder" />
      </div >
      <a href='https://revaais.com/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>
      <div style={{ marginTop: '1rem' }} className='Beetroot-Container'>

        <div  > {/* Product banner section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }} className='fo'>
            {/* <a href={beetrootProductDetails.buyNowLink}>
              <img src={beetrootProductDetails.bannerImg} alt='Beetroot Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }} />
            </a> */}
            <img src={assets.beetbann} alt='beetroot  powder ' style={{ maxWidth: '100%', minWidth: '100%' }}></img>
          </div>

          <h1>Organic Beetroot Powder - Perfect for Skin & Dietary Uses</h1>

        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Beetroot Powder Uses for Different Skin Types</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="tabs">

                <button
                  className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
                  onClick={() => setActiveTab('skinCare')}
                >
                  Tips For Skin Care
                </button>
                <button
                  className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
                  onClick={() => setActiveTab('hairCare')}
                >
                  Tips For The Dietcare
                </button>
              </div>
              <div className="recipes-container">
                {activeTab === 'skinCare' ? (
                  beetrootSkinCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                ) : (
                  beetrootDietaryRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                )}
              </div></div>
          </div>

          {/* Disclaimer */}
          <img src={assets.beetbanner} alt='Beetroot Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer' style={{ color: 'black' }}>
            <span>Disclaimer:</span> Use Beetroot Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default Beetroortpowder;
