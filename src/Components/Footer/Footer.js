import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaAmazonPay, FaInstagram, FaPhone, FaYoutube, FaPaypal, FaCcVisa, FaCcMastercard, FaApple, FaGooglePay } from 'react-icons/fa';

import img3 from "./logo copy.jpg";
import './footer.css';
import linktrsvg from './linktree-logo-icon.svg'

const Footer = () => {
  // Array of social media links with icons
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61555405733892', icon: <FaFacebook />, name: 'Facebook' },
    { href: 'https://www.instagram.com/exoticveda/', icon: <FaInstagram />, name: 'Instagram' },
    { href: 'https://www.youtube.com/@RevaaaisUS', icon: <FaYoutube />, name: 'YouTube' },
    { href: 'https://linktr.ee/Revaais_US', icon: <img src={linktrsvg} alt="Linktree" style={{ height: "24px", width: "24px" }} />, name: 'linktree' },

  ];

  // Array of footer links
  const footerSections = [
    {
      title: 'Company Information',
      links: [
        { name: 'Our Shop', path: 'https://revaais.com/' },
        { name: 'Address-1001 S MAIN ST STE 500 KALISPELL, MT 59901', path: 'https://maps.app.goo.gl/vqpQwQxJdm5aj3nV6 ' },
        { name: 'support@exoticveda.com', path: 'mailto:support@exoticveda.com' },

      ]
    },
    {
      title: 'Customer Service',
      links: [

        { name: 'Shipping & Returns', path: '/return-policy' },
        { name: 'Privacy Policy', path: '/privacey-policy' },
        { name: 'Terms & Conditions', path: '/terms' },

        { name: 'Special Offers', path: '/product/special-offers/get-it' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Skincare Products', path: '/category/skincare' },
        { name: 'Haircare Products', path: '/category/haircare' },
        { name: 'Dietary Use Products', path: '/category/dietary' },
        { name: 'Pooja Essentials', path: '/category/puja-items ' },

      ]
    },
    {
      title: 'Additionals',
      links: [
        { name: 'Our Shop', path: 'https://revaais.com/' },
        { name: 'Search', path: '/Search' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Contact Us', path: '/contactus' },
        { name: 'FAQ', path: '/faq' },
      ]
    },

  ];


  return (
    <footer className='footer' style={{ borderBottom: "4px solid grey" }}>
      {/* Social Media Section */}

      <div className='Social-media'>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}>
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
              <li style={{ fontSize: '24px', display: 'inline' }}>{link.icon}</li> {/* Display the icon */}
            </a>
          ))}
        </ul>
        <div className='logo'>
          <Link to="/">
            <img src={img3} style={{ height: "40px", width: "40px" }} alt="Logo" />
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <a href="tel:312667-9634" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <FaPhone style={{ fontSize: '24px' }} />
            <span style={{ marginLeft: '5px' }}>312667-9634</span>
          </a>
        </div>

      </div>

      {/* Footer Links Section */}
      <div className='Footer-ul'>
        {footerSections.map((section, sectionIndex) => (
          <ul key={sectionIndex} style={{ padding: 0 }}>
            <h3 style={{ textAlign: 'center' }}>{section.title}</h3> {/* Aligning the title in the center */}
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>


      <div className='payment-methods' style={{ textAlign: 'center', marginTop: '20px' }}>
        <FaApple style={{ fontSize: '24px', margin: '0 10px', color: '#A2AAAD' }} />
        <FaGooglePay style={{ fontSize: '24px', margin: '0 10px', color: '#4285F4' }} />
        <FaAmazonPay style={{ fontSize: '24px', margin: '0 10px', color: '#FF9900' }} />
        <FaPaypal style={{ fontSize: '24px', margin: '0 10px', color: '#00308F' }} />
        <FaCcVisa style={{ fontSize: '24px', margin: '0 10px', color: '#1A1F71' }} />
        <FaCcMastercard style={{ fontSize: '24px', margin: '0 10px', color: '#EB001B' }} />

      </div>

      <div>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>Copyright 2024,</p>
        <p style={{ fontSize: "14px", textAlign: 'center', fontWeight: 'bold' }}>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
