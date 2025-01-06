import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Cowgheediya = () => {
  const images = [
    assets.diya1,
    assets.cowghee1,
    assets.cowghee2,
    assets.cowghee3,
    assets.cowghee4,
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
        <Produuct productId="cowgheediya" />
      </div >


      <a href='https://revaais.com/products/cow-ghee-batti-cotton-wick'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>

      <div style={{ marginTop: '4rem', }} className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/e6b3dd2d-0ff7-43dd-bba5-6e8eb8c16649.__CR0,0,3031,1875_PT0_SX970_V1___.png' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          <div style={{ padding: '30px' }}>
            <h1>Pure Cow Ghee Cotton Wick Diyas: Illuminate Naturally
            </h1>
            <p>Illuminate your space with our Pure Cow Ghee Diya Wick, a perfect blend of tradition and sustainability. Crafted from 100% natural cow ghee, this diya wick is designed to create a warm, inviting atmosphere while being kind to the environment.</p>
            <p>Usage: Perfect for festivals, rituals, or daily prayers, our diya wick not only elevates your spiritual experience but also aligns with eco-conscious values.

            </p>
          </div>
        </div>


        <div className='float'>

          <div><img src={assets.diya1} style={{ maxWidth: '100%', minWidth: '100%' }} alt='cow  ghee  diya  exotic veda ' /></div>
          <div>
            <h1>Cow Ghee Batti
            </h1>
            <p>
              Puja Batti with Ghee is readymade puja diya that is made from cow ghee. The button shaped big size wicks burn for long time. These baati are mess free, serves the purpose and reduce danger to the home. The cotton buds have a divine fragrance. These wicks are a replacement for your handmade Ghee diyas, so there won't be any strong smells when you burn it, makes morning puja easy. Place these Phool Battis directly in a lamp and light them.</p>
            <ul  >
              <li>Burning time approx 30 mins.
              </li>
              <li>Perfect for Daily puja
              </li>
              <li>Completely wax free
              </li>
              <li>Come in easy to use Transparent Plastic Box.</li>
            </ul>
          </div>

        </div>
        <div className='float'>


          <div>
            <h1> Why Exotic veda's products ????</h1>
            <p>
              With Exotic veda Pure Cow Ghee Wick Products bring home happiness, peace and Calmness. Our products are made from pure cow ghee and are free from chemicals.

              All your Puja ,Rituals needs are fulfilled with Exotic Veda.

              A Quality product directly from the Exotic Veda group. It is made ensuring proper Hygiene and Safety. All the items goes through quality checks making sure you receive standard products.

              The Group is more than 50 years old and has ISO Certified Manufacturing Processes . Exotic Veda family cares for its customers and Environment.

            </p>
          </div>
          <div>
            <img src={assets.diya1} style={{ maxWidth: '100%', minWidth: '100%' }} alt='cow ghee diya  exoticveda'/>
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/228fa411-d496-487d-9360-a853f8e207c1.__CR0,0,2560,792_PT0_SX970_V1___.jpg' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>
      </div>

<RelatedProducts/>

    </>
  )
}

export default Cowgheediya





