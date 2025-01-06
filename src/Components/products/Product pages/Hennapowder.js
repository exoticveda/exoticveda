import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { hennahairCareRecipes, hennaproductDetails } from './Recepisdata'; // Importing the recipe data
import Reciepicard from './Reciepicard';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Hennapowder = () => {
  const [activeTab, setActiveTab] = useState('hairCare'); // State to track the active tab
  const images = [
    assets.henna,
    assets.hennaback,
    assets.hennause,
    assets.hennabowl,
    assets.hennadiy,
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

          {/* Main image with hover effect */}
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
            />
          </div>
        </div>
        <Produuct productId="hennapowder" />


      </div >
     <a href='https://revaais.com/products/exotic-veda-organic-henna-powder-100-natural-hair-dye-from-rajasthan-india-lawsonia-inermis-non-gmo-deep-brown-100g?_pos=1&_sid=00b904b43&_ss=r'><button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>




      <div style={{ marginTop: '1rem' }} className='Henna-Container'>

        {/* Product banner section */}
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>

          {/* <img src={hennaproductDetails.bannerImg} alt='Henna Powder Banner' style={{ maxWidth: '100%', minWidth: '100%' }}   /> */}
          <img src={assets.Hennabanner2} alt='Henna Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />



          {/* Product description */}
          <h1>Organic Henna Powder - Perfect for Hair Care & Natural Dye</h1>

        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Henna Powder Uses for Different Hair Types</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="tabs">

                <button
                  className={setActiveTab && activeTab === 'hairCare' ? 'active' : ''}
                  onClick={() => setActiveTab('hairCare')}
                >
                  Tips For Hair Care
                </button>
                <button
                  className={setActiveTab && activeTab === 'skinCare' ? 'active' : ''}
                  onClick={() => setActiveTab('skinCare')}
                >
                  Tips For Skin Care
                </button>
              </div>
              <div className="recipes-container">
                {activeTab === 'hairCare' ? (
                  hennahairCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                ) : (
                  hennahairCareRecipes.map((recipe) => (
                    <Reciepicard recipe={recipe} key={recipe.id} />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <img src={hennaproductDetails.bannerImg} alt='Henna Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <p className='disclaimer' style={{ color: 'black' }}>
            <span>Disclaimer:</span> Use Henna Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
          </p>
        </div>
      </div>
      <RelatedProducts/>
    </>
  );
};

export default Hennapowder;
