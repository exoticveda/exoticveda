import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './Product pages/Recepisdata.js'
import './producet.css';
import { FaArrowRight } from 'react-icons/fa';
// import Popup from '../Home/Popup.js';


const Product = () => {
  return (
    <div  >
      {/* <Popup style={{backgroundimage:'./hh.png'}}/> */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0',  }}>
        <h1 className="text-center mb-4">Explore Our Products</h1>

        <div className="container2 mt-5">

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <Link to={product.link}>
                    <img src={product.img} className="" alt={product.title}  loading="lazy" />
                  </Link>
                  <div className="card-body">

                    <Link to={product.link}>
                      <h5 className="card-title">{product.title}</h5
                      ></Link>
                    <Link to={product.link}>
                      <p className="card-text">
                        {product.description}

                      </p></Link>
                    <p className="card-text">
                      <small className="text-muted" style={{fontSize:'14px'}}>
                        <Link to={product.link}>{product.updateInfo }  <FaArrowRight size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></Link>
                      </small>
                    </p>
                    <h1 style={{fontSize:'16px'}}>
                     Price: {product.price}
                    </h1>
                    <Link to={product.buyLink}><button className='btn'>Buy Now</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};



export default Product;
