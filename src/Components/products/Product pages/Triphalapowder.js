import React, { useState } from 'react'
import { assets } from '../Assets/prodimg/assets'
import { triphalaDietRecipes } from './Recepisdata';
import Produuct from '../../Product-Details/Produuct';
import { RelatedProducts } from './RelatedProducts';
const Triphalapowder = () => {


  const images = [
    assets.triphala2,
    assets.triphala4,
    assets.triphala1,
    assets.triphala3,

    assets.triphala5,
  ];

  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to change the main image when clicking a side image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };
  const RecipeCard = ({ recipe }) => (
    <div className="recipe-card" key={recipe.id} >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>

        <div className="ingredients1">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions1">
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

  return (
    <>

      <div className="product-page1"    >
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
        <Produuct productId="triphalpowder" />


      </div >
      <a href='https://revaais.com/products/organic-triphala-powder'> <button className='pppp' style={{ cursor: 'pointer' }}>Buy Now</button></a>





      <div style={{ marginTop: '4rem', backgroundColor: 'rgba(249,225,199,255)' }} className='Tripahala-contanienr'>

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <img src={assets.triphalabanneer} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />
       


        </div>

        {/* Content based on active tab */}
        <div className="tab-content" >
          <div className="hair-care-detail-page" style={{ minWidth: '50%' }}>
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Shikakai Powder Uses for Different Hair Types</h1>
            <div className="recipes-container">
              {triphalaDietRecipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <img src={assets.triphalabanner} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

<RelatedProducts/>
          <p className='disclaimer ' style={{ color: 'black' }}><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>

        </div>
      </div>

    </>
  );
};

export default Triphalapowder
