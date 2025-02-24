import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navigation_bar/Navbar';
import ShoppingCart from '../component/ShoppingCart/ShoppingCart';
import Header from '../component/Header/Header';
import ImageSlider from '../component/Image_slider/ImageSlider';
import BrandPortfolio from '../component/Portfolio_brands/BrandPortfolio';
import CategoryToBag from '../component/Category/CategoryToBag';
import Footer from '../component/Footer/Footer';
import MenList from '../component/men/MenList';
import Women from '../component/women/Women';
import WomenGallery from '../component/women/WomenGallery';
import WomenDetail from '../component/women/WomenDetail';
import TodaysDealsPage from '../component/TodaysDealsPage';
import CustomerService from '../component/CustomerService';
import GiftCardPage from '../component/GiftCardPage';
import { GiftCardProvider } from "../component/GiftCardContext"; // Import the context provider
import SellPage from '../component/SellPage';
import Kid from '../component/kids/Kid';
import KidGallery from '../component/kids/KidGallery';
import KidDetail from '../component/kids/KidDetail';
import PaymentModes from '../component/Payment/PaymentModes';
import HomeLivingGallery from '../component/Home&Living/HomeLivingGallery';
import HomeLivingDetail from '../component/Home&Living/HomeLivingDetail';
import BeautyPersonalCareGallery from '../component/BeautyPersonalCare/BeautyPersonalCareGallery';
import BeautyPersonalCareDetail from '../component/BeautyPersonalCare/BeautyPersonalCareDetail';
import ContactUs from '../component/Footer/ContactUs';
import FAQ from '../component/Footer/FAQ';
import ReturnPolicy from '../component/Footer/ReturnPolicy';
import TrackOrder from '../component/Footer/TrackOrder';
import CompanyInfo from '../component/Footer/CompanyInfo';
import Career from '../component/Footer/Career';
import ApplyNow from '../component/Footer/ApplyNow';

const ShopRouter = () => {
  return (<>
    
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Root route */}
        <Route path="/" element={<><Navbar /><ImageSlider /><BrandPortfolio />
        <CategoryToBag  path='men' element={<MenList />}/></>} />
        
        {/* Additional routes */}
        <Route path='/deal' element={<TodaysDealsPage/>} />  
        <Route path='/customer' element={<CustomerService/>} /> 
        <Route path='/gift' element={<GiftCardProvider>  
      <GiftCardPage />
    </GiftCardProvider>} />   
    <Route path='/sell' element={<SellPage/>} /> 
    <Route path='men' element={<MenList/>} />
    <Route path='/women' element={<Women />}>
  <Route path='' element={<WomenGallery />} />
  <Route path='detail/:prod_id' element={<WomenDetail />} />
  </Route>
  <Route path='/kids' element={<Kid />}>
  <Route path='' element={<KidGallery />} />
  <Route path='detail/:prod_id' element={<KidDetail />} />
</Route>
<Route path='/home-living' element={<HomeLivingGallery/>}>
<Route path='detail/:prod_id' element={<HomeLivingDetail />} />
 
</Route>
<Route path="/beauty-personal-care" element={<BeautyPersonalCareGallery />} />
<Route path="/beauty-personal-care/detail/:prod_id" element={<BeautyPersonalCareDetail />} />

        <Route path="/cart" element={<ShoppingCart />} />
    <Route path='/payment' element={<PaymentModes/>} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/faqs" element={<FAQ />} />
    <Route path="/returns" element={<ReturnPolicy />} />
    <Route path="/track-order" element={<TrackOrder />} />
    <Route path="/about" element={<CompanyInfo />} />
    <Route path="/careers" element={<Career />} />
  
        <Route path="/apply/:jobTitle" element={<ApplyNow />} />
      
      </Routes> 
      <Footer />
      
    </BrowserRouter>
    
    </>
  );
};

export default ShopRouter;
