import Home from "../Components/Home/Home";
import Aboutus from "../Components/AboutUs/Aboutus";
import Product from "../Components/products/Product";
import Contactus from "../Components/Contactus/Contactus";
import ReviewPage from '../Components/Footer/Review/Review'
import Treatment from "../Components/Product treatments/Treatment";
import FAQ from '../Components/FAQ/FAQ'
import TermsAndConditions from '../Components/Footer/Policies/TermsAndConditions'
// import Recepie from '../Components/Receipe/Recepie'
// ========Categorayimpoprt  =============
import Skincare from '../Components/Category/Pages/Skincare'
import Dietryuse from '../Components/Category/Pages/Dietryuse'
import Haircare from '../Components/Category/Pages/Haircare'
// =========ProductPages Import==========
import Aloevera from '../Components/products/Product pages/Aloevera'
import Hennapowder from "../Components/products/Product pages/Hennapowder";
import Jamunseed from "../Components/products/Product pages/Jamunseed";
import Sandalwood from "../Components/products/Product pages/Sandalwood";
import Triphalapowder from "../Components/products/Product pages/Triphalapowder";
import Amlapowder from "../Components/products/Product pages/Amlapowder";
import Alumbar from "../Components/products/Product pages/Alumbar";
import Shikakkhai from "../Components/products/Product pages/Shikakkhai";
import Beetroortpowder from "../Components/products/Product pages/Beetroortpowder";
import Curryleafpowder from "../Components/products/Product pages/Curryleafpowder";
import Moringaleafpowder from "../Components/products/Product pages/Moringaleafpowder";
import Multanimitti from "../Components/products/Product pages/Multanimitti";
import Lemongrass from "../Components/products/Product pages/Lemongrass";
import SearchBar from "../Components/AboutUs/Search/Search";
import ProductForm from "../Components/../Routes/template";
import NewsletterSignup from '../Components/Home/NewsLetter'

import PoojaItmes from "../Components/Category/Pages/PoojaItmes";
import Cowgheediya from "../Components/products/Product pages/Cowgheediya";
import Roundcottonwick from "../Components/products/Product pages/Roundcottonwick";
import Longcottonwick from "../Components/products/Product pages/Longcottonwick";
import Pujanclaygheediys from "../Components/products/Product pages/Pujanclaygheediys";
import ReturnPolicy from "../Components/Footer/Policies/Returnpolicy";
import Specialoffers from "../Components/Offers/Specialoffers";
import PrivacyPolicy from "../Components/Footer/Policies/PrivacyPolicy";
import Shilajit from "../Components/products/Product pages/Shilajit";
import Skinrr from "../Components/products/Product pages/skinrr";
import Yuvprash from "../Components/products/Product pages/Yuvprash";
const routes = [
    { path: '/return-policy', element: <ReturnPolicy /> },
    { path: '/privacey-policy', element: <PrivacyPolicy /> },
    { path: '/', element: <Home />, index: true },
    { path: '/aboutus', element: <Aboutus /> },
    { path: '/newsletter', element: <NewsletterSignup /> },
    { path: '/review', element: <ReviewPage /> },
    { path: '/products', element: <Product /> },
    { path: '/Search', element: <SearchBar /> },
    { path: '/product/special-offers/get-it', element: <Specialoffers /> },

    { path: '/contactus', element: <Contactus /> },
    { path: '/treatments&tips', element: <Treatment /> },


    { path: '/template', element: <ProductForm /> },


    //    ======Product PAGES ROUTING ===========
    { path: '/products/aloevera-powder', element: <Aloevera /> },
    { path: '/products/shilajit', element: <Shilajit /> },
    { path: '/products/yuvprash', element: <Yuvprash /> },
    { path: '/products/skinrr', element: <Skinrr /> },
    { path: '/products/multani-mitti', element: <Multanimitti /> },
    { path: '/products/curry-leaf-powder', element: <Curryleafpowder /> },
    { path: '/products/henna-powder', element: <Hennapowder /> },
    { path: '/products/moringa-leaf-powder', element: <Moringaleafpowder /> },
    { path: '/products/beetroot-powder', element: <Beetroortpowder /> },
    { path: '/products/shikhakhai-powder', element: <Shikakkhai /> },
    { path: '/products/lemongras-powder', element: <Lemongrass /> },
    { path: '/products/triphala-powder', element: <Triphalapowder /> },


    { path: '/products/jaamun-seed', element: <Jamunseed /> },
    { path: '/products/amla-powder', element: <Amlapowder /> },
    { path: '/products/alum-bar', element: <Alumbar /> },
    { path: '/products/cow-ghee-diya', element: <Cowgheediya /> },
    { path: '/products/round-cotton-wick', element: <Roundcottonwick /> },
    { path: '/products/long-cotton-wick', element: <Longcottonwick /> },
    { path: '/products/pujan-clay-ghee-diya', element: <Pujanclaygheediys /> },
    { path: '/products/sandalwood-powder', element: <Sandalwood /> },
    { path: '/category/skincare', element: <Skincare /> },
    { path: '/category/haircare', element: <Haircare /> },
    { path: '/category/dietary', element: <Dietryuse /> },
    { path: '/category/puja-items', element: <PoojaItmes /> },
    { path: '/terms', element: <TermsAndConditions /> },
    { path: '/faq', element: <FAQ /> },
    // { path: '/reciepe', element: <Recepie /> },
];

export default routes;
