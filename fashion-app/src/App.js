import React from "react";
import Header from "./component/Header/Header"
import Navbar from "./component/Navigation_bar/Navbar";
import ImageSlider from "./component/Image_slider/ImageSlider";
import BrandPortfolio from "./component/Portfolio_brands/BrandPortfolio";
import CategoryToBag from "./component/Category/CategoryToBag";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <ImageSlider />
      <BrandPortfolio />
      <CategoryToBag />
      {/*<ProductSlider /> */}
      {/* Other components */}
    </div>
  );
}

export default App;
