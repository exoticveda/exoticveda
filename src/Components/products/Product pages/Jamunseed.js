import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { jamunSeedPowderUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const JamunSeed = () => {
  // const [activeTab, setActiveTab] = useState('hairCare');
  const images = [
    assets.jamunf,
    assets.jamunb2,
    assets.jamunb3,
    assets.hennabowl,
    assets.hennadiy,
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
        <Produuct productId="jamunseedpowder" />


      </div >

<a href='https://revaais.com/products/exotic-veda-jamun-seed-powder-eugenia-jambolana-black-plum-syzygium-cumini-100-grams?_pos=1&_psq=jamun&_ss=e&_v=1.0https://revaais.com/products/exotic-veda-jamun-seed-powder-eugenia-jambolana-black-plum-syzygium-cumini-100-grams?_pos=1&_psq=jamun&_ss=e&_v=1.0'><button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>

      <div style={{ marginTop: '4rem' , }} className='jamun-seed-powder-container'>
        <div style={{ display: 'flex', flexDirection: 'column', }} className='rr'>




   <img src={assets.jamunb1} alt='Jamun Seed Powder' style={{ maxWidth: '100%', minWidth: '100%' }} />




        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1  >Jamunseed Powder use for  Diet </h1>
            <div className="recipes-container">
              {jamunSeedPowderUses.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.jamunb1} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Jamunseed Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
      <RelatedProducts/>
    </>
  );
};

export default JamunSeed;
