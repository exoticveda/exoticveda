
import { assets } from '../Assets/prodimg/assets';
import { alumBarUses } from './Recepisdata'; // Import the recipe data
import Reciepicard from './Reciepicard';
import { useState } from 'react';
import { RelatedProducts } from './RelatedProducts';
import Produuct from '../../Product-Details/Produuct';
const Alumbar = () => {

  const images = [
    assets.alum, // Main image
    // Main image
    assets.alumfront,
    assets.alum5 ,
    assets.alumuse,

    assets.alum55 , // Main image


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
        <Produuct productId="Alumbar" />
       

      </div >

      <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving'> <button className='pppp' style={{cursor:'pointer'}}>Buy Now</button></a>

      <div className='Product-Page-Container'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum3} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%', marginTop: '1rem' }} />

          </a>
        </div>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <a href='https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=1&_sid=91a91be85&_ss=r'>
            <img src={assets.alum1} alt='Sandalwood' style={{ maxWidth: '100%', minWidth: '100%' }} />

          </a>
        </div>

        <div className='Shikakai-Description' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>


        </div>



        <div className="tab-content">

          <div className="hair-care-detail-page">
            <h1 style={{ fontFamily: 'New Amsterdam, sans-serif' }}>Alumbar  Usage  and Tips </h1>
            <div className="recipes-container">
              {alumBarUses.map((recipe) => (
                <Reciepicard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>

          <p className='disclaimer'  style={{color:'red'}}><span>Disclaimer:</span> Use Shikakai Powder externally. Avoid contact with eyes, and discontinue use if irritation occurs.</p>
        </div>
      </div>
      <RelatedProducts/>
    </>
  );
};

export default Alumbar