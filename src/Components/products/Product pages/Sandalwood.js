import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { sandalwoodrecipes } from './Recepisdata';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Sandalwood = () => {

  const images = [
    assets.sandalfront,
    assets.sandalback,
    assets.sandaluse2,
    assets.sandaluse,
    assets.sandaluse4,

  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const [activeTab, setActiveTab] = useState('skinCare'); // State to track the active tab

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
        <Produuct productId="sandalwoodpowder" />


      </div >
      <a href='https://revaais.com/products/exotic-veda-sandalwood-powder?_pos=3&_psq=san&_ss=e&_v=1.0'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>





      <div className='Product-Page-Contanier'>


        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>



          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
              <img src={assets.sandalcertification} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder ' style={{ maxWidth: '100%' }} /></a>

          </div>



        </div>


      </div>

      <div className="tabs" style={{ display: 'flex', justifyContent: 'center', marginTop:'20px' }}>

        <button
          className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}

        >
          Tips For Skin Care
        </button>

      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Sandalwood  Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {sandalwoodrecipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                  <div className="recipe-image">
                    <img src={recipe.img} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder' style={{ maxWidth: '100%' }} />
                  </div>
                  <div className="recipe-details">
                    <h2>{recipe.title}</h2>
                    <h4>{recipe.skinType}</h4>
                    <div className="ingredients">
                      <h5>Ingredients:</h5>
                      <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="instructions">
                      <h5>Instructions:</h5>
                      <ul>
                        {recipe.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                    <p><strong>Benefits:</strong> {recipe.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

<div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/exotic-veda-pure-organic-sandalwood-powder-for-men-women-100-natural-non-gmo-100g?_pos=1&_sid=3b47693c2&_ss=r'>
            <img src={assets.sandal1} alt='Organic Pure Sandalwood Powder for Face and Skin | Natural Skincare Sandalwood Scent | Anti-inflammatory Chandan Powder | Aromatic Sandalwood Powder Organic | Scented Body Powder  ' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <div className='right-container'>
              <h2>Dont miss Out </h2>
              <p style={{ textAlign: 'center' }}>Explor  the oppurtuniites</p>
              <a href='https://revaais.com/products/exotic-veda-sandalwood-powder?_pos=3&_psq=san&_ss=e&_v=1.0'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>

            </div>

          </a>
        </div>

        <p className='disclaimer' style={{color:'black'}}><span>Disclaimer:</span>Use Sandalwood  Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
      </div>

<RelatedProducts/>
    </>
  )
}

export default Sandalwood
