import React, { useState } from 'react';
import { assets } from '../Assets/prodimg/assets';
import { lemongrassDietRecipes } from './Recepisdata'; // Import the recipe data
import RecipeCard from './Reciepicard';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Lemongrass = () => {

  const images = [
    assets.lemonimg1,
    assets.lemonwarnig ,
    assets.lemonimg,
    assets.lemonfeatures,
    assets.lemonbowl,
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
        <Produuct productId="curryleafpowder" />


      </div >

      <a href='https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=1&_psq=lemo&_ss=e&_v=1.0'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>


      <img src={assets.lemonbanner1} alt='lemonbanner1' style={{ maxWidth: '100%', minWidth: '100%',marginTop:'20px' }} />



      <div style={{ marginTop: '1rem', backgroundColor: 'rgba(181,207,116,255)' }} className='  Lemongrass-contanienr'>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Lemongrass Powder use for  Diet </h1>
            <div className="recipes-container">
              {lemongrassDietRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>


          <img src={assets.lemonstrexh} alt='lemonbanner1' style={{ maxWidth: '100%', minWidth: '100%' }} />
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Lemongrass Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
<RelatedProducts/>
    </>
  );
};


export default Lemongrass;
