import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { ShikaahairCareRecipes } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard'
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Shikakkhai = () => {
  const images = [
    assets.shika2,
    assets.shika5,
    assets.shika1,
    assets.shika3,
    assets.shika4,
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
        <Produuct productId="shikakaipowder" />


      </div >
      <a href='https://revaais.com/products/organic-shikakai-powder'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>






      <div style={{ marginTop: '4rem', }} className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.shikabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>
        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
            <div className="recipes-container">
              {ShikaahairCareRecipes.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
          <img src={assets.shikabannersttre} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <p className='disclaimer'><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default Shikakkhai;
