import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contactus = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleReasonChange = (e) => setReason(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Clear input fields
  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setEmail('');
    setReason('');
    setMessage('');
    // toast.success('Message  Cleared successfully!');
  };

  // Send email
  const handleSendMessage = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !phone || !email || !reason || !message) {
      toast.error('Please fill in all fields before submitting!');
      return;
    }



    emailjs.sendForm('service_2qgc2lp', 'template_peo6c8o', form.current, '77GhrP483V-tWB0LE')
      .then((result) => {
        toast.success('Message sent successfully!');
        handleClear(e);
      }, (error) => {
        toast.error(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <div className="contact">
      <ToastContainer />
      <h1>Contact Us</h1>
      <h2>Get in Touch with Us Today – We're Here to Help!</h2>
      <p>
        At Exotic Veda, your satisfaction is our top priority. Whether you have a
        question about our products, need assistance with an order, or just want to
        share your feedback, we’re here to help. Please fill out the form below, and
        one of our team members will get back to you as soon as possible. We look
        forward to hearing from you and assisting with anything you need!
      </p>
      <p className="catering_test">Address-1001 S MAIN ST STE 500 KALISPELL, MT 59901</p>
      
      <form ref={form} onSubmit={handleSendMessage}>
        <input
          onChange={handleNameChange}
          value={name}
          name="user_name"
          placeholder="Name"
        />
        <input
          onChange={handlePhoneChange}
          value={phone}
          name="user_phone"
          placeholder="Phone Number"
          type="tel"
        />
        <input
          onChange={handleEmailChange}
          value={email}
          name="user_email"
          placeholder="Email"
          type="email"
        />

        {/* Dropdown for Reason for Contact */}
        <select
          onChange={handleReasonChange}
          value={reason}
          name="user_reason"
          className="form-control"
        >
          <option value="">Select Reason for Contact</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Order Issue">Order Issue</option>
          <option value="Feedback">Feedback</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          onChange={handleMessageChange}
          value={message}
          name="user_message"
          placeholder="Message for Us"
        />
        
        <div className="button">
          <button type="submit" className='btn'><span>SEND MESSAGE</span></button>
          <button onClick={handleClear} className='btn'><span>CLEAR MESSAGE</span></button>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
