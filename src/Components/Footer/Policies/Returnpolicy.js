import React, { useState } from 'react';

const Returnpolicy= () => {
  const [activeTab, setActiveTab] = useState('shipping');

  const renderContent = () => {
    if (activeTab === 'shipping') {
      return (
        <div className="shipping-policy">

          <h2>Date - Sep 23, 2024</h2>
          <h2>1. Processing Time</h2>
          <p>
            All orders are processed within 4-5 business days (excluding weekends and holidays) after
            receiving your order confirmation email. You will receive another notification when your
            order has shipped.
          </p>
          <h2>2. Shipping Rates and Delivery Estimates</h2>
          <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
          <h3>Domestic Shipping (within US):</h3>
          <ul>
            <li><strong>Standard Shipping:</strong> Estimated delivery time is 7-14 business days.</li>
            <li><strong>Expedited Shipping:</strong> Estimated delivery time is 5-7 business days.</li>
            <li><strong>Free Shipping:</strong> Offered on orders above $35.</li>
          </ul>
          <h3>International Shipping:</h3>
          <p>
            We offer international shipping to select countries. Shipping charges and estimated delivery
            times vary based on location.
          </p>
          <h2>3. Shipment Confirmation and Order Tracking</h2>
          <p>
            You will receive a shipment confirmation email containing tracking information once your
            order has shipped. The tracking number will be active within 24 hours.
          </p>
          <h2>4. Damages</h2>
          <p>
            ExoticVeda.com is not liable for any products damaged or lost during shipping. If you
            received your order damaged, please contact the shipment carrier to file a claim.
          </p>
          <h2>5. Lost or Stolen Packages</h2>
          <p>
            ExoticVeda.com is not responsible for lost or stolen packages confirmed to be delivered to
            the address entered for an order. Upon inquiry, we will help you to the best of our ability
            to resolve the issue with the carrier.
          </p>
          <h2>6. Returns Policy</h2>
          <p>
            Please refer to our <a href="/returns-policy">Returns Policy</a> for information on returns
            and exchanges.
          </p>
          <h2>7. Shipping Restrictions</h2>
          <ul>
            <li>We currently do not ship to PO Boxes.</li>
            <li>Certain products may have shipping restrictions based on regulatory or logistical limitations.</li>
          </ul>
          <h2>8. Contact Information</h2>
          <p>
            If you have any further questions, please contact us at{' '}
            <a href="mailto:support@revaais.com">support@revaais.com</a>.
          </p>
          <footer>
            <p>© 2024 Exotic Veda. All rights reserved.</p>
          </footer>
        </div>
      );
    } else if (activeTab === 'return') {
      return (
        <div className="return-policy">
          <h1>Return & Cancellation Policy</h1>
          <p>
            We want you to be completely satisfied with your purchase. If you are not entirely satisfied
            with your purchase, we're here to help. With an objective to provide a state-of-the-art
            shopping experience to our customers, we’ve tailored a customer-centric return and
            cancellation policy.
          </p>
          <h2>Return Policy</h2>
          <p>
            At Exotic Veda, all products can be returned by the customer, given that the return request
            is submitted within the specified time frame (7 days).
          </p>
          <h3>Process</h3>
          <p>
            To initiate a return, please contact our customer support team at{' '}
            <a href="mailto:support@revaais.com">support@revaais.com</a>. Please provide your order
            number and details about the product you would like to return. We will respond quickly with
            instructions for how to return items from your order.
          </p>
          <p>Alternatively, you can place the return request through your account.</p>
          <h3>Return Guidelines</h3>
          <ul>
            <li>Your address and the item that you wish to return must be eligible for return.</li>
            <li>If the return is not eligible for pickup, a self-return option will be provided.</li>
            <li>
              Once the return is processed, you will be issued a refund to your original payment method
              or the payment method you choose.
            </li>
            <li>For Pay on Delivery orders, refunds will be processed to your bank account.</li>
          </ul>
          <h3>Condition of Items for Return</h3>
          <p>
            As soon as you place a request to return an order, a delivery agent will visit the address
            to examine and pick the order. The delivery agent has the authority to reject an item if:
          </p>
          <ul>
            <li>It’s physically damaged or is in a non-returnable state.</li>
            <li>The product is different from the original item that was initially delivered.</li>
            <li>The container’s seal is broken if it’s a grocery item.</li>
          </ul>
          <h3>Refund</h3>
          <p>
            The refund will be initiated within 24 hours of receiving the returned order and may take
            4-7 days (excluding Sundays) to reflect in your bank account.
          </p>
          <ul>
            <li>We don’t impose any additional charges on cancellations and returns.</li>
            <li>
              If the refund doesn’t reflect in your bank account, please contact customer service for
              assistance.
            </li>
          </ul>
          <h2>Cancellation Policy</h2>
          <ul>
            <li>Customers may cancel their orders before or after they’ve been shipped.</li>
            <li>If the order isn’t shipped yet, we’ll instantly initiate the refund process.</li>
            <li>
              If the item is already shipped and is in transit, we’ll initiate the refund once the item
              gets back to the warehouse.
            </li>
            <li>Customers don’t have to provide any additional information while canceling an order.</li>
            <li>
              If the order gets delivered to you, even after placing a cancellation request, you may
              reject the delivery, and our agent will ship the item back to the warehouse.
            </li>
            <li>
              Even in case of cancellation, you will receive 100% of the original amount without any
              deduction whatsoever.
            </li>
            <li>
              If you receive a damaged item during delivery, you may place a cancellation request on the
              spot, and we’ll initiate the refund process.
            </li>
          </ul>
          <h2>Shipping Costs</h2>
          <p>
            You will be responsible for paying for your own shipping costs for returning your item.
            Shipping costs are non-refundable.
          </p>
          <h2>Contact Information</h2>
          <p>
            If you have any questions on how to return your item to us, contact us at{' '}
            <a href="mailto:support@revaais.com">support@revaais.com</a>.
          </p>
          <footer>© 2024 Exotic Veda. All rights reserved.</footer>
        </div>
      );
    }
  };

  return (
    <div className="policy-tabs">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'shipping' ? 'active' : ''}`}
          onClick={() => setActiveTab('shipping')}
        >
          Shipping Policy
        </button>
        <button
          className={`tab ${activeTab === 'return' ? 'active' : ''}`}
          onClick={() => setActiveTab('return')}
        >
          Return & Cancellation Policy
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default  Returnpolicy ;
