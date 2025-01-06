import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';

const Pujanclaygheediys = () => {
  const images = [
    assets.poojancaly,
    assets.pojjaclay2,
    assets.pojjaclay3,
    assets.pojjaclay4,
    assets.pojjaclay5,
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

        <Produuct productId="Poojanclaydiya" />
        {/* Product details */}
        {/* <div className="product-details">
          <h1 style={{ textAlign: 'justify', fontSize: '18px' }}>
            Handcrafted Pujan Clay Diya Set Of 15 - Eco-Friendly Homemade Diya With Premium Cow Ghee Wick For Spiritual Rituals, And Religious Ceremonies, Meditation.</h1>

          <h2>About this item</h2>

          <ul style={{ textAlign: 'justify' }}>
            <li>  Handcrafted Elegance: Elevate Your Home Decoration With Our PUJAN Clay Diya Set. These Handcrafted Clay Diyas Are Perfect For Indian Home Decor And Offering A Touch Of Tradition.</li>
            <li>Versatile Lighting: Ideal For Diwali Diyas, Pooja Diya, And Set Includes Premium Ghee Wicks. These Ghee Lamps Serve As Excellent Diwali Diya Craft Items, Enhancing The Festival Of Lights Atmosphere. </li>
            <li>
              Ideal For Diwali Lighting: Celebrate The Festival Of Lights With Our Premium Clay Diya Set. These Diwali Diyas Are Crafted To Perfection, Providing A Serene And Aesthetic Meditation Lamp Glow. Perfect For Diwali Lighting And Enhancing Your Festive Decorations.
            </li>
            <li>Cultural Heritage: Celebrate Indian Festivals With Our Traditional Clay Diya Set. ,Making Them An Essential Part Of Your Diwali Pooja Items And Festive Decorations.</li>
            <li>Spiritual And Meditation Lamp: Our Clay Diyas Are Not Just For Festivals; They Make Excellent Meditation Lamps Too. The Ghee Diya Provides A Calming Light, Perfect For Meditation And Yoga Sessions. Embrace The Ghee Batti Benefits And Elevate Your Spiritual Practices.</li>

          </ul>

        </div> */}

      </div >
      <a href='https://revaais.com/products/handcrafted-pujan-clay-diya-set-of-15-eco-friendly-homemade-diya-with-premium-cow-ghee-wick-for-spiritual-rituals-and-religious-ceremonies-meditation'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>



      <div style={{ marginTop: '4rem', }}           className='shikakai-contanienr'>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/6e392d8a-2694-4dfd-acc1-d59b9b59b8f0.__CR0,0,3031,1875_PT0_SX970_V1___.png' alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>


        <div className='float'>

       <div><img src={ assets.poojancaly} style={{maxWidth:'100%',minWidth:'100%'}} alt='Poojan Clay Diya '  /></div>
        <div>
        <h1>  Spiritual Rituals </h1>
     <p>
        The Poojan Clay Pure Cow Ghee Diya enhances spiritual rituals by providing a clean, fragrant burn. Its warm glow symbolizes the removal of darkness, inviting divine blessings. Perfect for daily prayers or special occasions, it deepens your spiritual connection and fosters a serene atmosphere for worship</p>
        </div>
        <></>
        </div>
        <div className='float'>


        <div>
        <h1> Enhancing the Vastu </h1>
     <p>
     Use the Poojan Clay Pure Cow Ghee Diya to enhance your home’s Vastu. Lighting it in specific areas is believed to attract positive energy and harmony. Its natural flame symbolizes purity, creating a balanced atmosphere that promotes peace and tranquility, making it an essential addition to every living space.

</p>
        </div>
        <div>
        <img src={ assets.poojancaly} style={{ maxWidth:'100%',minWidth:'100%'}} alt='Poojan Clay Diya'  />
       </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/c0ae24ad-8af1-4612-b16b-ba55353566fd.__CR0,0,2560,792_PT0_SX970_V1___.jpg' alt='Poojan CLay DIDya  ' style={{ maxWidth: '100%', minWidth: '100%' }} />
        </div>
      </div>
<RelatedProducts/>
    </>
  )
}

export default Pujanclaygheediys
