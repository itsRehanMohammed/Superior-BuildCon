import React from "react";
import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import GalleryWrapper from "../components/Gallery/GalleryWrapper";
import Quality from "../components/Banners/Quality";
import Services from "../components/Banners/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <GalleryWrapper />
      <Quality />
      <FAQ />
    </>
  );
};

export default Home;
