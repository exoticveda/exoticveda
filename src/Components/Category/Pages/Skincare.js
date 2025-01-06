import React from 'react';
import { Link } from 'react-router-dom';
import { skincategoryproducts } from '../../products/Product pages/Recepisdata';
import { assets } from '../../products/Assets/prodimg/assets';
import { FaArrowRight } from 'react-icons/fa';

const Skincare = () => {
  return (
    <div style={{ textAlign:'justify' }}>
      <img src={assets.skincarebaner} style={{ maxWidth: '100%' }}alt='exotic veda,orgainic,revaais, natural '  loading="lazy"/>
      <h2 className="text-center ">Embrace Natural Beauty with Exotic Veda</h2>

        <img src={assets.homebanner1 } style={{ maxWidth: '100%' }}alt='exotic veda,orgainic,revaais, natural ' />
        <p>
          In today's fast-paced world, the quest for healthy, glowing skin often leads us to a myriad of skincare products filled with chemicals and synthetic ingredients. However, the wisdom of ancient practices offers a refreshing alternative. Exotic Veda, a brand rooted in Ayurvedic traditions, brings you a range of skincare products harnessing the power of nature's finest ingredients.
        </p>
        <h3>Key Ingredients That Make a Difference</h3>
        <ul style={{padding:'50px'}}>
          <li><strong>Amla:</strong> A powerhouse of vitamin C, Amla helps combat free radicals, promotes collagen production, and enhances skin elasticity.</li>
          {/* <li><strong>Hyaluronic Acid:</strong> A natural humectant that keeps your skin hydrated and plump.</li> */}
          <li><strong>Sandalwood Powder:</strong> Known for its anti-inflammatory and antiseptic properties, sandalwood soothes irritated skin and reduces blemishes.</li>
          <li><strong>Turmeric:</strong> A skin brightener with anti-inflammatory and antibacterial properties, turmeric evens out skin tone.</li>
          <li><strong>Moringa Leaf Powder:</strong> Rich in vitamins and minerals, moringa nourishes the skin and fights signs of aging.</li>
        </ul>
        <h3 >Creating Your Skincare Ritual</h3>
        <p s >To truly experience the transformative effects of Exotic Veda, it's essential to adopt a dedicated skincare routine. Here’s a step-by-step guide:</p>
        <ul>
          <li><strong>Cleanse:</strong> Start with a gentle cleanser.</li>
          <li><strong>Exfoliate:</strong> Use an exfoliating mask or scrub once or twice a week.</li>
          <li><strong>Tone:</strong> Apply a toner to balance your skin’s pH levels.</li>
          <li><strong>Treat:</strong> Use serums or oils that address specific skin concerns.</li>
          <li><strong>Moisturize:</strong> Lock in moisture with a nourishing moisturizer.</li>
          <li><strong>Sun Protection:</strong> Never skip sunscreen!</li>
      </ul>
        <h3>DIY Recipes with Exotic Veda Products</h3>
        <p>Enhance your skincare routine with simple DIY recipes:</p>
        <ul>
          <li><strong>Amla Face Mask:</strong> Mix Amla powder with yogurt and honey.</li>
          <li><strong>Sandalwood and Turmeric Scrub:</strong> Combine sandalwood powder, turmeric, and milk.</li>
          <li><strong>Moringa Infused Oil:</strong> Infuse moringa leaves in a carrier oil.</li>
        </ul>

      <h1 className="text-center mb-4">Explore Our Products</h1>

      <div className="container mt-5">
        <div className="row">
          {skincategoryproducts.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} loading="lazy" />
                </Link>
                <div className="card-body">
                  <Link to={product.link}>
                    <h5 className="card-title">{product.title}</h5>
                  </Link>
                  <Link to={product.link}>
                    <p className="card-text">{product.description}</p>
                  </Link>
                  <p className="card-text">
                    <small className="text-muted">
                      <Link to={product.link}>{product.updateInfo} <FaArrowRight size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></Link>
                    </small>
                  </p>
                  <Link to={product.buyLink}>
                    <button className='btn'>Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <img src={assets.skincarebaner} style={{ maxWidth: '100%' }}alt='exotic veda,orgainic,revaais, natural ' /> */}

    </div>
  );
};

export default Skincare;
