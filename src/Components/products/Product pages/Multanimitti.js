import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import Produuct from '../../Product-Details/Produuct';
import { multanihairCareRecipes, multanirecipes } from './Recepisdata'; // Import the recipe data
import { RelatedProducts } from './RelatedProducts';
const Multanimitti = () => {
  const images = [
    assets.multani,
    assets.multani33,
    assets.multanimitti45,
    assets.multanimitti343,
    assets.multanimitti4,
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
        <Produuct productId="Multanimittipowder" />


      </div >
      <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>





      <div className='Product-Page-Contanier  '>

        <div className='Aloevera-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>




          <div style={{ display: 'flex', maxWidth: '100%' }}>
            <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=e64ced6fd&_ss=r'>
              <img src={assets.multaniposter} alt='aloevera ' style={{ maxWidth: '100%',marginTop:'20px' }} /></a>

          </div>



        </div>

      </div>

      <div className="tabs" style={{ marginTop: '20px' }}>

        <button
          className={setActiveTab & activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}
        >
          Tips For Skin Care
        </button>
        <button
          className={setActiveTab & activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => setActiveTab('hairCare')}
        >
          Tips For Hair Care
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Multani Mitti Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {multanirecipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                  <div className="recipe-image">
                    <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
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

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page" >
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Multani Mitti Powder Uses for Different-Diffrent Hair</h1>
            <div className="haircare-recipes-container">
              {multanihairCareRecipes.map((recipe) => (
                <div className="haircare-recipe-card" key={recipe.id}>
                  <div className="haircare-recipe-image">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <div className="haircare-recipe-details">
                    <h2 >{recipe.title}</h2>
                    <h4>{recipe.hairType}</h4>
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
       <img src={assets.multanibanner1} alt='aloevera ' style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <p className='disclaimer' style={{color:'black'}}><span>Disclaimer:</span>Use Multani Mitti Powder externally.Avoid contact with eyes, and discontinue use if irritation occurs</p>
        <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} >
          <a href='https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=1&_sid=f298fe79f&_ss=r?variant=48956872098113'> <button className='btn2'  > Buy Now</button></a>
          <a href='https://www.revaais.shop/'><button className='btn2'  > Vist Our Store</button></a>
        </div>
      </div>
<RelatedProducts/>

    </>
  )
}

export default Multanimitti
