import { assets } from '../Assets/prodimg/assets';
import { useState, useCallback } from 'react';
import Produuct from '../../Product-Details/Produuct';
import { Amlaskinrecipes, AmlaDietRecipes, AmlahairCareRecipes } from './Recepisdata';
import { RelatedProducts } from './RelatedProducts';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card" key={recipe.id}>
    <div className="recipe-image">
      <img src={recipe.img} alt={recipe.title} style={{ maxWidth: '100%' }} />
    </div>
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <h4>{recipe.skinType || recipe.hairType}</h4>
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
);

const Amlapowder = () => {
  const images = [
    assets.Amla1, // Main image
    // Main image
    assets.amlafetures, // Main ima
    assets.amlaben, // Main image

    assets.Amla4, // Main image
    assets.amalpowderbowl
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };
  const [activeTab, setActiveTab] = useState('skinCare');

  // Simulate content loading with useEffect
  const handleTabChange = useCallback((tab) => {

    setActiveTab(tab); // Set active tab

    // Simulate a delay (e.g., fetching content for the tab)
    // Adjust the delay as needed (1000ms = 1 second)
  }, []);

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
        <Produuct productId="Amlapowder" />
        


      </div >
      <a href='https://revaais.com/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>


      <div className='Aloevera' style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {/* <img src={assets.amlabannn} alt='Aloe Vera Banner' style={{ maxWidth: '100%', minWidth: '100%' }} /> */}
          <div>
            <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
              <div className='img-aloe'>
                <img src={assets.amlabann} style={{ minWidth: '100%', maxWidth: '100%' }} alt='Amla Buy Now' />
              </div>
            </a>
          </div>

        </div>
      </div>

      <div className="tabs" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          className={activeTab === 'skinCare' ? 'active' : ''}
          onClick={() => handleTabChange('skinCare')}
          aria-label="Skin Care Tips"
        >
          Tips For Skin Care
        </button>
        <button
          className={activeTab === 'hairCare' ? 'active' : ''}
          onClick={() => handleTabChange('hairCare')}
          aria-label="Hair Care Tips"
        >
          Tips For Hair Care
        </button>
        <button
          className={activeTab === 'diet' ? 'active' : ''}
          onClick={() => handleTabChange('diet')}
          aria-label="Dietary Use Tips"
        >
          Tips For Dietary Use
        </button>
      </div>


      {/* Show Loader or Content */}

      <div className="tab-content">
        {activeTab === 'skinCare' && (
          <div className="product-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Different Skin Types</h1>
            <div className="recipes-container">
              {Amlaskinrecipes.map(recipe => <RecipeCard recipe={recipe} />)}
            </div>
          </div>
        )}

        {activeTab === 'hairCare' && (
          <div className="hair-care-detail-page">
            {/* <div style={{ marginLeft: '10px' }}>
                <img src={assets.Amla5} style={{ maxWidth: '100%', minWidth: '100%' }} alt='Amla Hair Care' />
              </div> */}
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Different Hair Types</h1>
            <div className="haircare-recipes-container">
              {AmlahairCareRecipes.map(recipe => <RecipeCard recipe={recipe} />)}
            </div>
          </div>
        )}
        {activeTab === 'diet' && (
          <div className="hair-care-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Amla Powder Uses for Dietary Purposes</h1>
            <div className="haircare-recipes-container">
              {AmlaDietRecipes.map(recipe => <RecipeCard recipe={recipe} />)}
            </div>
          </div>
        )}

        <div>
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
            <div className='img-aloe'>
              <img src={assets.amlaposter} alt='Amla Poster' style={{ maxWidth: '100%', minWidth: '100%' }} />
            </div>
          </a>
        </div>

        <p className='disclaimer' style={{ color: 'black' }}>
          <span>Disclaimer:</span> Use Amla Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.
        </p>

        <div className='Aloevera-btn' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href='https://revaais.com/fr/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=bc10fc7c3&_ss=r'>
            <button className='btn2'> Buy Now</button>
          </a>
          <a href='https://www.revaais.shop/'>
            <button className='btn2'>Visit Our Store</button>
          </a>
        </div>
      </div>
      <RelatedProducts/>
    </>
  );
};

export default Amlapowder;
