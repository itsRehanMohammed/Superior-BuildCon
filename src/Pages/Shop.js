import React from "react";
import Items from "../components/Shop/Items";
import Filters from "../components/Shop/Filters";

const Shop = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container lg:max-w-7xl mt-10 px-5 md:py-24 py-14 flex flex-row sm:gap-[80px] mx-auto">
          <Filters />
          <Items />
        </div>
      </section>
    </>
  );
};

export default Shop;
