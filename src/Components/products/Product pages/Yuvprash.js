import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
 
const Yuvprash = () => {
    const images = [
        assets.yuvprash,
        assets.yuvprash2,
        assets.yuvprash3,
        assets.yuvprash4,
        assets.yuvprash5,
        // assets.shilajit4,
        // assets.shilajit5,
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
            <Produuct productId="Yuvprash" />
          </div >


     <a href='https://revaais.com/products/premium-shilajit-resin-100-pure-organic-natural-energy-stamina-booster-50g'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>


        </>
      )
    }
export default Yuvprash
