import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import {assets} from '../Assets/prodimg/assets'
export const RelatedProducts = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // Function to shuffle products array
  const shuffleProducts = (products) => {
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle products on component mount/reload
    setShuffledProducts(shuffleProducts(products));
  }, []);

  return (
    <div className='rrrr' style={{padding:'10px'}}>
      <h1 className=""style={{textAlign:'start'}}>You May Also like It</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        // autoplay={{ delay: 3000 }}
        navigation
        // pagination={false} // Disable pagination dots
        loop
        modules={[Autoplay, Navigation]}// Register Swiper modules
      >
        {shuffledProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card h-100">
              <Link to={product.link}>
                <img src={product.img} className="card-img-top" alt={product.title} loading="lazy" />
              </Link>
              <div className="card-body">
                <Link to={product.link}>
                  <h5 className="card-title">{product.title}</h5>
                </Link>
                <Link to={product.link}>
                  <p className="card-text">{product.description}</p>
                </Link>
                <p className="card-text">
                  <small className="text-muted" style={{ fontSize: '14px' }}>
                    <Link to={product.link}>
                      {product.updateInfo}
                      <FaArrowRight size={10} color="blue" style={{ marginLeft: '8px' }} />
                    </Link>
                  </small>
                </p>
                <h1 style={{ fontSize: '16px' }}>Price: {product.price}</h1>
                <Link to={product.buyLink}>
                <div className='l'>  <button className="btn">Buy Now</button></div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



// Assuming your product data is in the "products" constant as provided
export const products = [
    {
      id: 1,
      link: '/products/aloevera-powder',
      img: assets.aloe3,
      title: 'Pure Aloe Vera Powder  : Your Natural Solution for Skin and Hair Care',
      description: 'Refresh your skin and hair with our pure Aloe Vera Powder, known for its cooling and moisturizing benefits. Ideal for face masks and hair care!',
      updateInfo: ' Click Here to Learn Our Tips  ',
      buyLink: 'https://www.revaais.shop/products/pure-aloe-vera-powder?_pos=1&_sid=200c3bfb5&_ss=r?variant=48956960702785',
      route: '/products/aloevera-powder',
      price:"$5.46",
    },

    {
      id: 2, price:"$5.42",
      link: '/products/amla-powder',
      img: assets.Amla1,
      title: 'Amla Powder: Natural Solution for Healthy Hair, Skin & Diet',
      description: 'Boost your skin and hair care with pure Amla Powder, rich in Vitamin C. Ideal for enhancing natural radiance and promoting healthy hair growth',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-amla-powder-herbal-supplement-indian-gooseberry-or-emblica-officinalis-helps-detoxify-boost-immunity-hair-growth-long-hairs-promotes-eye-health-100-natural-non-gmo-100g?_pos=1&_sid=5edfdd030&_ss=r',
      route: '/products/amla-powder',
    },
    {
      id: 3, price:"$5.34",
      link: '/products/curry-leaf-powder',
      img: assets.Curryfront,
      title: 'Curry Leaf Powder:for Hair, Skin & Digestive Health',
      description: 'Boost your hair, skin, and health with our Curry Leaf Powder. It reduces hair fall, promotes growth, brightens skin, and supports digestion for overall wellness',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-curry-powder-organic-curry-powder?_pos=3&_sid=5edfdd030&_ss=r',
      route: '/products/curry-leaf-powder'
    },


    {
      id: 4, price:"$5.32",
      link: '/products/henna-powder',
      img: assets.henna,
      title: 'Pure Henna Powder   Nourish, Strengthen, and Color Your Hair  ',
      description: 'Enhance your hair and skin with Henna Powder. Perfect for temporary tattoos and DIY hair care, it nourishes strands, adds shine, and offers vibrant color',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-organic-henna-powder-100-natural-hair-dye-from-rajasthan-india-lawsonia-inermis-non-gmo-deep-brown-100g?_pos=11&_sid=5edfdd030&_ss=r',
      route: '/products/henna-powder',
    },
    {
      id: 5, price:"$5.38",
      link: '/products/lemongras-powder',
      img: assets.lemonimg1,
      title: 'Lemongrass Powder: Natural Boost for Digestive Health & Wellness',
      description: 'Enhance your dishes with Lemongrass Powder. Known for its refreshing flavor, it aids digestion, supports detoxification, and boosts overall wellness',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-lemongrass-powder?_pos=7&_sid=5edfdd030&_ss=r',
      route: '/products/lemongras-powder'
    },
    {
      id: 6, price:"$5.40",
      link: '/products/moringa-leaf-powder',
      img: assets.moringa2,
      title: 'Moringa Leaf Powder: Nutrient-Packed Superfood for Optimal Health',
      description: 'Moringa Leaf Powder is a nutrient-dense superfood that boosts energy, supports immunity, and promotes healthy skin, hair, and digestion naturally',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-moringa-leaf-powder-moringa-oleifera-vegan-100-natural-non-gmo-100g?_pos=2&_sid=5edfdd030&_ss=r',
      route: '/products/moringa-leaf-powder'
    },
    {
      id: 7, price:"$5.43",
      link: '/products/beetroot-powder',
      img: assets.betroot,
      title: 'Beetroot Powder: Delicious Superfood for Glowing Skin & Diet',
      description: ' Beetroot Powder enhances skin health and vitality. Rich in antioxidants, it supports a healthy diet, boosts energy, and promotes natural glow.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://www.revaais.shop/products/exotic-veda-beetroot-powder-vegan-gluten-free-100-natural-non-gmo-100g',
      route: '/products/beetroot-powder'
    },
    {
      id: 8, price:"$5.46",
      link: '/products/shikhakhai-powder',
      img: assets.shika2,
      title: 'Pure Shikakai Powder   Promote Hair Growth and Scalp Health Naturally',
      description: 'Shikakai Powder is a natural hair cleanser that strengthens roots, promotes growth, and adds shine while gently nourishing your scalp and hair',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-shikakai-powder?_pos=10&_sid=5edfdd030&_ss=r',
      route: '/recipe-aloe-vera'
    },
    {
      id: 9, price:"$5.20",
      link: '/products/multani-mitti',
      img: assets.multani,
      title: 'Multani Mitti: Gentle Treatment for All Skin Types & Clear Complexion',
      description: 'Multani Mitti is a natural clay perfect for all skin types. It cleanses, exfoliates, and rejuvenates, leaving your skin fresh, clear, and glowing.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/multani-mitti-powder-fullers-earth-clay?_pos=9&_sid=5edfdd030&_ss=r',
      route: '/products/multani-mitti',
    },
    {
      id: 10, price:"$5.39",
      link: '/products/triphala-powder',
      img: assets.triphala2,
      title: 'Triphala Powder: Powerful Ayurvedic Dietary Blend for Health',
      description: 'Triphala Powder is a potent dietary supplement that aids digestion, detoxifies the body, and supports overall wellness with its natural ingredients.',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/organic-triphala-powder?_pos=20&_sid=5edfdd030&_ss=r',
      route: '/products/triphala-powder'
    },
    {
      id: 11, price:"$5.35",
      link: '/products/jaamun-seed',
      img: assets.jamunf,
      title: 'Jamun Seed Powder: Nutritional Booster for Healthy Diet & Wellness',
      description: 'Jamun Seed Powder is a nutritious dietary aid that supports healthy blood sugar levels, boosts digestion, and promotes overall wellness naturally',
      updateInfo: 'Click here to Learn Our  Tips ',
      buyLink: 'https://revaais.com/products/exotic-veda-jamun-seed-powder-eugenia-jambolana-black-plum-syzygium-cumini-100-grams?_pos=8&_sid=5edfdd030&_ss=r',
      route: '/products/jaamun-seed',
    },
    {
      id: 12, price:"$6.17",
      link: '/products/sandalwood-powder',
      img: assets.sandalfront,
      title: 'Sandalwood Powder: Luxurious Skin Treatment for Glowing Complexion',
      description: ' Sandalwood Powder offers soothing properties for the skin, reducing irritation and blemishes while promoting a youthful, radiant complexion. ',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/exotic-veda-sandalwood-powder?_pos=6&_sid=5edfdd030&_ss=r',
      route: '/products/sandalwood-powder',
    },

    {
      id: 13, price:"$5.11",
      link: '/products/alum-bar',
      img: assets.alum,
      title: 'Alum Bar Powder   Minimize Pores and Soothe Skin Naturally',
      description: 'Experience natural freshness with our Alum Bar, perfect for tightening pores, soothing skin, and acting as a gentle, chemical-free deodorant.',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/revaais-pure-alum-block-for-shaving?_pos=16&_sid=5edfdd030&_ss=r',
      route: '/products/alum-bar',
    },
    {
      id: 14, price:"$14",
      link: '/products/cow-ghee-diya',
      img: assets.diya1,
      title: ' Handmade Cow Ghee Diya for Sacred Pooja and Ceremonies',
      description: 'Our cow ghee diya brings sacred light to your space, perfect for puja, festivals, and creating an uplifting atmosphere',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/cow-ghee-batti-cotton-wick-organic-handcrafted-non-toxic-puja-items-ghee-wicks-for-pooja-long-lasting-aromatic-ghee-diya-wicks-for-pooja-eco-conscious-clean-burning-pack-of-50?_pos=15&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 15, price:"$10",
      link: '/products/round-cotton-wick',
      img: assets.wick,
      title: ' Cotton Wicks and Brass Holders for Diyas, 500 Pack',
      description: 'Round cotton wicks paired with brass holders, designed for a smooth, steady burn in diyas and oil lamps.',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: ' https://revaais.com/products/round-cotton-wick-with-brass-wick-holder-traditional-brass-diya-wick-holder-with-cotton-wick-perfect-cotton-wick-with-brass-holder-for-oil-lamps-diyas-pack-of-500?_pos=17&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 16, price:"$7",
      link: '/products/long-cotton-wick',
      img: assets.cottonwicklong,
      title: ' Cotton Wicks with Brass Holders for Pooja Thali',
      description: 'Luxury cotton wicks with brass holders, designed for smooth burning in puja thalis, perfect for pooja ceremonies',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/premium-long-cotton-wick-with-two-brass-wick-holder-for-pooja-items-luxury-organic-cotton-wicks-for-puja-thali-pooja-wick-set-200-pieces-decorative-and-clean-burning?_pos=14&_sid=5edfdd030&_ss=r',
      route: '/',
    },
    {
      id: 17, price:"$9.99",
      link: '/products/pujan-clay-ghee-diya',
      img: assets.poojancaly,
      title: ' Eco-Friendly Clay Diya Set with Premium Ghee Wicks',
      description: 'Bring sacred light to your space with our cow ghee diya, perfect for puja, festivals, and uplifting ambiance.',
      updateInfo: ' Click here to Learn Our  Tips  ',
      buyLink: 'https://revaais.com/products/handcrafted-pujan-clay-diya-set-of-15-eco-friendly-homemade-diya-with-premium-cow-ghee-wick-for-spiritual-rituals-and-religious-ceremonies-meditation?_pos=19&_sid=5edfdd030&_ss=r',
      route: '/',
    },


  ];
