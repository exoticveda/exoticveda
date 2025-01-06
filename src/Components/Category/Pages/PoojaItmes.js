import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { assets } from '../../products/Assets/prodimg/assets';
// import './skincare.css'

const PoojaItmes = () => {
  const products = [
    {
      id: 14,
      link: '/products/cow-ghee-diya',
      img: assets.diya1,
      title: ' Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/cow-ghee-batti-cotton-wick-organic-handcrafted-non-toxic-puja-items-ghee-wicks-for-pooja-long-lasting-aromatic-ghee-diya-wicks-for-pooja-eco-conscious-clean-burning-pack-of-50?_pos=15&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 15,
      link: '/products/round-cotton-wick',
      img: assets.wick,
      title: ' Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/round-cotton-wick-with-brass-wick-holder-traditional-brass-diya-wick-holder-with-cotton-wick-perfect-cotton-wick-with-brass-holder-for-oil-lamps-diyas-pack-of-500?_pos=17&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 16,
      link: '/products/long-cotton-wick',
      img: assets.cottonwicklong,
      title: ' Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/premium-long-cotton-wick-with-two-brass-wick-holder-for-pooja-items-luxury-organic-cotton-wicks-for-puja-thali-pooja-wick-set-200-pieces-decorative-and-clean-burning?_pos=14&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 17,
      link: '/products/pujan-clay-ghee-diya',
      img: assets.poojancaly,
      title: ' Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/handcrafted-pujan-clay-diya-set-of-15-eco-friendly-homemade-diya-with-premium-cow-ghee-wick-for-spiritual-rituals-and-religious-ceremonies-meditation?_pos=19&_sid=5edfdd030&_ss=r',
      route: '/',
    },

  ];
  return (
    <div style={{  textAlign: 'justify'  }}>
      <p  style={{  textAlign: 'justify',padding:'30px' }}>
      Discover our thoughtfully curated <b>Pooja Essentials </b>Collection, designed to elevate your spiritual rituals with purity and tradition. From handmade Pooja Clay Diyas that illuminate your sacred spaces to Cow Ghee Diyas that bring a divine touch to your prayers, we offer products crafted with care and authenticity. Our Long Cotton Wicks and Round Cotton Wicks ensure steady and lasting flames, making them perfect for every ceremony. Experience the essence of devotion with these high-quality, eco-friendly essentials tailored to enhance your pooja experience.
      </p>
      <img src= '' style={{minWidth:'100%',maxWidth:'100%' }} alt='pooja essentials  revaais '></img>

      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="container mt-5">

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={product.link}>
                  <img src={product.img} className="" alt={product.title} loading="lazy"/>
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

export default PoojaItmes
