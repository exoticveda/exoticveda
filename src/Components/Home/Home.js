import React from "react";
import Carousel from '../Carousel.js';
import Contactus from '../Contactus/Contactus.js'
import Cateogry from '../Category/Cateogry.js';
import Product from '../products/Product.js';
import Aboutus from '../AboutUs/Aboutus.js';
import Treatment from "../Product treatments/Treatment.js";
import { assets } from "../products/Assets/prodimg/assets.js";

import FAQ from "../FAQ/FAQ.js";

const Home = () => {
    const images = [
        assets.homebanner6,
        assets.homebanner7,

        assets.homebanner1,
        assets.homebanner2,
        assets.homebanner5,
        assets.homebanner3,
        assets.homebanner4,

    ];
    return (
        <>
           {/* <Popup/> */}
            <Carousel images={images} />
            <Cateogry />
            <Product />
            <Treatment />

            <Aboutus />
            <FAQ/>
            <Contactus />

        </>
    )
}

export default Home;
