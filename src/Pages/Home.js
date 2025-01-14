import React from "react";
import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import GalleryWrapper from "../components/Gallery/GalleryWrapper";
import Quality from "../components/Banners/Quality";
import Services from "../components/Banners/Services";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Quality />
      <FAQ />
    </>
  );
};

export default Home;
