// AdditionalInfo.js
import React from 'react';
import { FaShieldAlt, FaLock, FaUndoAlt, FaTruck, FaLeaf, FaStar } from 'react-icons/fa';

const AdditionalInfo = () => (<>
  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}} className='ss'>
    <div className="info-item">
      <FaShieldAlt size={24} color='green' />
      <p>Purchase Protection</p>
    </div>
    <div className="info-item">
      <FaLock size={24} color='blue' />
      <p>Secure Payment</p>
    </div>
    <div className="info-item">
      <FaUndoAlt size={24} color='skyblue' />
      <p>Easy Returns</p>
    </div>
    <div className="info-item">
      <FaTruck size={24} color='orange' />
      <p>Fast Delivery</p>
    </div>
    <div className="info-item">
      <FaLeaf size={24} color='green' />
      <p>100% Natural</p>
    </div>
    <div className="info-item"  >
      <FaStar size={24} color='gold' />
      <p>The Best Quality</p>
    </div>
  </div>
  {/* <div> hello</div> */}
  </>
);

export default AdditionalInfo;
