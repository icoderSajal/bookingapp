import React from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Listings from "../components/Listings";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  );
};

export default HomePage;
