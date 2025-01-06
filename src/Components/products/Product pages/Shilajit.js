import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Shilajit= () => {
  const images = [
    assets.shilajit1,
    assets.shilajit2,
    assets.shilajit3,
    assets.shilajit4,
    assets.shilajit5,
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
        <Produuct productId="shilajit" />
      </div >


 <a href='https://revaais.com/products/premium-shilajit-resin-100-pure-organic-natural-energy-stamina-booster-50g'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>
 

    </>
  )
}

export default Shilajit





