import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { AloeverahairCareRecipes, Aloeverarecipesskin } from './Recepisdata'
import './Pages.css'
import { RelatedProducts } from './RelatedProducts';
import Produuct from '../../Product-Details/Produuct';
const Aloevera = () => {
  const images = [
    assets.aloe3, // Main image
    assets.aloeback, // Main image
    assets.aloe4, // Main image
    assets.aloebene, // Main image
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };


  const [activeTab, setActiveTab] = useState('skinCare')

  const renderRecipeCard = (recipe, isHairCare = false) => (
    <div className={`${isHairCare ? 'haircare-' : ''}recipe-card`} key={recipe.id}>
      <div className={`${isHairCare ? 'haircare-' : ''}recipe-image`}>
        <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }}   loading="lazy"/>
      </div>
      <div className={`${isHairCare ? 'haircare-' : ''}recipe-details`}>
        <h2>{recipe.title}</h2>
        <h4>{isHairCare ? recipe.hairType : recipe.skinType}</h4>
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
  )

  return (
    <>

      <div className="product-page1"   >

        <div className="image-gallery"  >
          {/* Side images */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                // style={{maxWidth:'50%',minWidth:'50%'}}
                key={index}
                src={image}
                alt='Aloe-vera Powder  exotic veda  by revaais -100% natural and  organic   '
                className="thumbnail"
                onClick={() => handleImageClick(image)

                }
                 loading="lazy"
              />
            ))}
          </div>

          {/* Main image with hover effect */}
          <div className="main-image-container">
            <img
              src={currentImage}
              alt="Main product"
              className="main-image"
               loading="lazy"
            />

          </div>

        </div>

        <Produuct productId="Aloevera" />
    </div >
      <div><a href='https://revaais.com/products/pure-aloe-vera-powder?_pos=1&_psq=aloe&_ss=e&_v=1.0'> <button className='pppp' style={{cursor:'pointer', }}>Buy Now</button></a></div>



      <div className='Product-Page-Contanier'>
      <div style={{ display: 'flex', width: '100%', marginTop:'20px' }}>
          <img src={assets.aloebanner2} alt='aloevera' style={{ width: '100%' }}  loading="lazy" />

        </div>
      <div>
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=20ea192d5&_ss=r'>
            <img src={assets.aloebanner1} alt='aloevera' style={{ width: '100%' }}  loading="lazy" />
          </a>
        </div>




      </div>

      <div className="tabs" style={{ marginTop: '20px' }}>
        <button
          className={activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => setActiveTab('skinCare')}
        >
          Tips For Skin Care
        </button>
        <button
          className={activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => setActiveTab('hairCare')}
        >
          Tips For Hair Care
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1>Aloe Vera Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {Aloeverarecipesskin.map(recipe => renderRecipeCard(recipe))}
            </div>
          </div>
        )}

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page">
            <h1>Aloe Vera Powder Uses for Different Hair Types</h1>
            <div className="haircare-recipes-container">
              {AloeverahairCareRecipes.map(recipe => renderRecipeCard(recipe, true))}
            </div>
          </div>
        )}
        <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href='https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785'><button className='btn2'>Buy Now</button></a>
          <a href='https://www.revaais.shop/'><button className='btn2'>Visit Our Store</button></a>
        </div>
      </div>
      <RelatedProducts/>
    </>
  )
}

export default Aloevera