import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Work from "../../components/work/feature_header/Work";
import Features from "../../components/work/feature_main/Features";
import Visuals from "../../components/work/visual_exploration/Visuals";
import Personal from "../../components/work/personal_project/Personal";
import ScrollToTop from "../../components/scroll_on_top/ScrollToTop";
import Footer_contact from "../../components/contact/Footer_contact";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Features />
      <Visuals />
      <Personal />
      <ScrollToTop />

      <Footer_contact />
      <Footer />
    </div>
  );
};

export default Home;
