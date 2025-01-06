import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { assets } from '../../products/Assets/prodimg/assets';
import './skincare.css'
const Dietryuse = () => {
  const products = [
    {
      id: 2,
      link: '/products/amla-powder',
      img: assets.Amla1,
      title: 'Amla Powder: Natural Solution for Healthy Hair, Skin & Diet',
      description: 'Boost your skin and hair care with pure Amla Powder, rich in Vitamin C. Ideal for enhancing natural radiance and promoting healthy hair growth',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=5edfdd030&_ss=r',
      route: '/products/amla-powder',
    },
    {
      id: 2,
      link: '/products/curry-leaf-powder',
      img: assets.Curryfront,
      title: 'Curry Leaf Powder   Strengthen Roots and Reduce Hair Loss Naturally',
      description: 'Boost your hair health with our natural Curry Leaf Powder. It helps reduce hair fall, promotes growth, and adds shine to your hair.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-curry-powder-organic-curry-powder?_pos=3&_sid=5edfdd030&_ss=r',
      route: '/products/curry-leaf-powder'
    },
    {
      id: 3,
      link: '/products/moringa-leaf-powder',
      img: assets.moringa2,
      title: 'Moringa Leaf Powder   Natural Detox and Wellness Support for Vibrant Health',
      description: 'Supercharge your health with our Moringa Leaf Powder. Packed with vitamins and minerals, it boosts energy, supports immunity, and enhances overall wellness.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-moringa-leaf-powder-moringa-oleifera-vegan-100-natural-non-gmo-100g?_pos=2&_sid=5edfdd030&_ss=r',
      route: '/products/moringa-leaf-powder'
    },
    {
      id: 7,
      link: '/products/beetroot-powder',
      img: assets.betroot,
      title: 'Beetroot Powder: Delicious Superfood for Glowing Skin & Diet Support',
      description: ' Beetroot Powder enhances skin health and vitality. Rich in antioxidants, it supports a healthy diet, boosts energy, and promotes natural glow.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g?_pos=5&_sid=5edfdd030&_ss=r',
      route: '/products/beetroot-powder'
    },
    {
      id: 5,
      link: '/products/triphala-powder',
      img: assets.triphala2,
      title: 'Triphala Powder   Natural Detox and Wellness Support for Vibrant Health',
      description: 'Revitalize your health with our Triphala Powder, a traditional blend of three powerful fruits. It supports digestion, detoxifies the body, and promotes overall wellness.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-triphala-powder?_pos=20&_sid=5edfdd030&_ss=r',
      route: '/products/triphala-powder'
    },  {
      id: 6,
      link: '/products/jaamun-seed',
      img: assets.jamunf,
      title: 'jamun Seed Powder   Promote Wellness with Natural Antioxidants and Nutrients',
      description: 'Support your health with our Jamun Seed Powder. Known for its antioxidant properties, it helps manage blood sugar levels and boosts digestion',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-jamun-seed-powder-eugenia-jambolana-black-plum-syzygium-cumini-100-grams?_pos=8&_sid=5edfdd030&_ss=r',
      route: '/products/jaamun-seed',
    },


  ];
  return (

    <div >
      <img src={assets.Dietbanner} alt='exotic veda ' style={{ maxWidth: '100%' }}  loading="lazy"/>

      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="container mt-5">

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title} loading="lazy" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <Link to={product.link}>{product.updateInfo} <FaArrowRight size={10} marginTop='100px' color="blue" style={{ marginLeft: '8px' }} /></Link>
                    </small>
                  </p>
   <Link to={product.buyLink}><button className='btn'>Buy Now</button></Link>



                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

  )
}
export default Dietryuse
