import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { moringaPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Moringaleafpowder = () => {
  const images = [
    assets.moringa2,
    assets.moringaback,
    assets.moringabowl,
    assets.moringause,
    assets.moringafeet,

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
        <Produuct productId="moringapowder" />


      </div >
      <a href='https://revaais.com/products/exotic-veda-moringa-leaf-powder-moringa-oleifera-vegan-100-natural-non-gmo-100g'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>





      <div style={{ marginTop: '1rem', backgroundColor: ' rgba(162,179,138,255)' }} className='  Lemongrass-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>

          <div style={{ marginBottom: '0', padding: '0' }}>
            {/*
      <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} />
      <img src={assets.moringa2} alt='Shikakai' style={{ maxWidth: '50%', marginBottom: '0', minWidth: '50%' }} /> */}

            <img src={assets.moring1} alt='Moringa-leaf-powder' style={{ maxWidth: '100%', marginBottom: '0', minWidth: '100%' }} ></img>

          </div>





        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Moringa Leaf Powder use for  Diet </h1>
            <div className="recipes-container">
              {moringaPowderUses.map((recipe) => (
                < Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
          <img src={assets.moringabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />


          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Moringa Leaf Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
 <RelatedProducts/>
    </>


  )
}

export default Moringaleafpowder
