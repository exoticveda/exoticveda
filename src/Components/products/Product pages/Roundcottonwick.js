import React, { useState } from 'react';
import Produuct from '../../Product-Details/Produuct';
import { assets } from '../Assets/prodimg/assets';
import { RelatedProducts } from './RelatedProducts';
const Roundcottonwick = () => {
  const images = [
    assets.wick,
    assets.wick2,
    assets.wick3,
    assets.wick3,
    assets.wick4,
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

        <Produuct productId="RoundCottonWick" />

      </div >
      <a href='https://revaais.com/products/round-cotton-wick-with-brass-wick-holder-traditional-brass-diya-wick-holder-with-cotton-wick-perfect-cotton-wick-with-brass-holder-for-oil-lamps-diyas-pack-of-500'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>

      <div style={{ marginTop: '4rem', }} className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/453021e9-b013-48ae-b9e0-8f78c18cddb1.__CR0,0,3031,1875_PT0_SX970_V1___.png' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ padding: '30px' }}>

            <p>Elevate your candle-making experience with our premium round cotton wick. Crafted from 100% natural cotton, this wick ensures a clean and even burn, providing a beautiful flame that enhances any ambiance. The round shape allows for excellent fuel consumption, making it ideal for a variety of wax types. Each wick is meticulously braided to prevent mushrooming and soot, promoting a longer burn time and a soot-free environment. Perfect for both DIY enthusiasts and professional candle makers, our round cotton wick is designed to enhance your creations while delivering a reliable, high-quality performance. Light up your space with confidence and enjoy the warmth and glow of your handcrafted candles!
            </p>

          </div>
        </div>

        <div className='float'>
          <div>
            <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/a37ffc6e-263e-49bd-88d3-e85e3756f232.__CR0,0,938,938_PT0_SX300_V1___.png' style={{ maxWidth: '100%', minWidth: '100%' }} alt='Round cotton wick ' />
          </div>
          <div>
            <p>
              Round cotton wicks are an essential component in various traditional and modern applications, ranging from religious rituals to crafting and home fragrance products. Known for their durability, consistent burn, and ease of use, these wicks ensure an even and steady flame, making them a preferred choice for many
            </p>
            <p>
              Insert the wick into the essential oil container, allowing it to absorb the oil. Light the wick and enjoy the aromatic ambiance.
            </p>
          </div>
        </div>
        <div className='float'>
          <div>
            <p>
              Enhance your spiritual journey with the help of their round cotton wicks. These high-quality wicks are perfect for lighting diyas, candles, and other religious items, and their round shape ensures a consistent flame throughout your prayer or meditation session.
            </p>
            <p>
              Cotton wicks have been used in religious traditions for centuries as a symbol of purity and devotion and offers the finest quality cotton wicks to help you connect with the divine.
            </p>
            <p>ROUND COTTON WICKS: Exotic vedad offers round cotton wicks that are perfect for use in various religious ceremonies. These wicks are made from high-quality cotton, ensuring a clean and even burn every time.
            </p>
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/516778a3-4503-476d-a53f-0c03c654bd3b.__CR0,0,2560,2560_PT0_SX300_V1___.jpg' style={{ maxWidth: '100%', minWidth: '100%' }} alt='Round cotton wick ' loading="lazy" />
          </div>

        </div>
        <div className='float'>
          <div><img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/9f47e44f-8cdf-4590-879c-e71a5a9f4979.__CR0,0,2560,2560_PT0_SX300_V1___.jpg' style={{ maxWidth: '100%', minWidth: '100%' }}  alt='Round cotton wick '  loading="lazy"/></div>
          <div>
            <p>COTTON WICKS: The cotton wicks are made from 100% pure cotton, ensuring a clean and safe burn. These wicks are perfect for use in candles, lamps, and other religious items </p>
            <p>
              COTTON WICKS ROUND: The round cotton wicks are perfect for use in oil lamps and other religious items. These wicks are made from high-quality cotton and are designed to burn evenly and cleanly.

            </p>

            <p>LONG-LASTING: The cotton wick are designed to burn for a long time, ensuring that your religious ceremonies are uninterrupted. These wicks are made from high-quality materials and are designed to burn evenly and cleanly.
            </p>
            <p>VERSATILE: The cotton wick are perfect for use in a variety of religious items, including candles, lamps, and other items. These wicks are made from high-quality materials and are designed to burn cleanly and evenly every time
            </p>
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/81042deb-7a55-4385-82f1-df477020374d.__CR0,0,2560,792_PT0_SX970_V1___.jpg' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} loading="lazy" />
        </div>
      </div>
      <RelatedProducts />
    </>
  )
}

export default Roundcottonwick
