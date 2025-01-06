import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Skinrr = () => {
  const images = [
    assets.skinrrfront,
    assets.skinrrfrontback,
    assets.skinrrbenefits,
    assets.skinrropener,
    assets.skinrruses,
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
        <Produuct productId="skinrr" />
      </div >


 <a href='https://revaais.com/products/exotic-veda-skinrr-gel-ultimate-skin-repair-rejuvenation-with-37-powerful-natural-ingredients-50ml?variant=49756887089473'>
  <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button>
  </a>



    </>
  )
}

export default Skinrr
