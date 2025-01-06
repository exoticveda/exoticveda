import React, { useState } from 'react';
import {   curryhairCareRecipes, currySkinCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
import Produuct from '../../Product-Details/Produuct';
import { assets } from '../Assets/prodimg/assets';
import { RelatedProducts } from './RelatedProducts';
const Curryleafpowder = () => {
  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

  const images = [
    assets.Curryfront , // Main image
    // Main image
   assets.curryback,
    assets.Curryfetures, // Main image
    assets.Currybenefits,

    assets.curryuse,
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

        <Produuct productId="curryleafpowder" />


      </div >
      <a href='https://revaais.com/products/exotic-veda-curry-powder-organic-curry-powder'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>



      <div style={{ marginTop: '1rem', }} className='CurryLeaf-Container'>
        <div style={{ display: 'flex', flexDirection: 'column' }} className='fo'>

             <img src={assets.curryleafposter} style={{maxWidth:'100%',minWidth:'100%' }} alt='Currryyleaf Powder Exotic veda '></img>






          <h1>Natural hair cleanser that promotes healthy, shiny hair.</h1>

        </div>
        <div className="tabs">

          <button
            className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
            onClick={() => setActiveTab('skinCare')}
          >
            Tips For Hair Care
          </button>
          <button
            className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
            onClick={() => setActiveTab('hairCare')}
          >
            Tips For Skin Care
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Curry Leaf Powder Uses for Hair Types</h1>
            <div className="recipes-container">
              {activeTab === 'skinCare' ? (
                curryhairCareRecipes.map((recipe) => (
                  <Reciepicard recipe={recipe} key={recipe.id} />
                ))
              ) : (
                currySkinCareRecipes.map((recipe) => (
                  <Reciepicard recipe={recipe} key={recipe.id} />
                ))
              )}

            </div>
          </div>

          
          <img src={assets.curryleafposter2}  style={{maxWidth:'100%',minWidth:'100%' }} alt='Currryyleaf Powder Exotic veda '></img>
          <p className='disclaimer' style={{ color: 'black' }}><span>Disclaimer:</span> Use Curry Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>

<RelatedProducts/>
    </>

  )
}

export default Curryleafpowder