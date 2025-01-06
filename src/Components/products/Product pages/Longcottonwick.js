import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
// recipdata.js


const Longcottonwick = () => {
  const images = [
    assets.cottonwicklong,
    assets.cottonwicklong2,
    assets.cottonwicklong3,
    assets.cottonwicklong4,
    assets.cottonwicklong5,
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

        {/* Product details */}
        <Produuct productId="cottonWick" />
      </div >
      <a href='https://revaais.com/products/premium-long-cotton-wick-with-two-brass-wick-holder-for-pooja-items-luxury-organic-cotton-wicks-for-puja-thali-pooja-wick-set-200-pieces-decorative-and-clean-burning
 '> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>


      <div style={{ marginTop: '4rem', }} className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/b04bd0ca-13f7-4c03-8b88-b9c7d784510c.__CR0,0,3031,1875_PT0_SX970_V1___.png' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ padding: '30px' }}>
            <h1>Brass Holders with Organic Cotton Wicks! </h1>
            <p>Unleash your creativity with our Premium Long Cotton Wick Set, designed for candle makers who demand quality and performance. Each wick is crafted from 100% natural cotton, ensuring a clean, even burn that enhances the beauty of your candles. The extended length provides versatility for a variety of candle sizes and containers, allowing you to create stunning pieces that light up any space. </p>
          </div>
        </div>


        <div className='float'>

          <div><img src={   assets.cottonwicklong} style={{ maxWidth: '100%', minWidth: '100%' }} alt='Long CottonWick '  /></div>
          <div>

            <p>
              Elevate your spiritual rituals with our Long Diya Wick, designed for optimal performance in your Poojan Clay Pure Cow Ghee Diya. Crafted from high-quality cotton, this wick is engineered to provide a steady, consistent flame, ensuring a clean and fragrant burn. Its extended length allows for easy placement in deep diyas, making it ideal for both daily prayers and special occasions. Enjoy the soothing ambiance and spiritual connection that a well-lit diya brings to your worship space.</p>

          </div>

        </div>
        <div className='float'>


          <div>
            <h1> How to Use:</h1>
            <p>
              Preparation: Ensure the diya is clean and dry. Insert the long wick into the wick holder or directly into the ghee.</p>
            <p>Lighting: Use a match or lighter to carefully ignite the wick, allowing the flame to stabilize.
            </p>
            <p>Placement: Position the diya in a well-ventilated area away from drafts to maintain a steady flame.
            </p>
            <p>Enhancements: For added fragrance, consider dipping the wick in essential oils before inserting it into the ghee.
            </p>
            <p>Maintenance: After use, trim the wick to about 1/4 inch before the next lighting to ensure optimal burning. Store unused wicks in a cool, dry place to maintain their quality.

            </p>
          </div>
          <div>
            <img src={   assets.cottonwicklong} style={{ maxWidth: '100%', minWidth: '100%' }} alt='Long Cotton Wick Exotic veda ' />
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/81042deb-7a55-4385-82f1-df477020374d.__CR0,0,2560,792_PT0_SX970_V1___.jpg' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>


      </div>
      <RelatedProducts/>
    </>
  )
}

export default Longcottonwick
