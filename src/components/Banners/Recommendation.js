import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useWidth } from "../../Global";

const Recommendation = ({ category }) => {
  const width = useWidth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Filter products based on categories
    const filteredProducts = storedProducts.filter((product) =>
      product.category.some((cat) =>
        category.map((c) => c.name).includes(cat.name)
      )
    );
    setProducts(filteredProducts);
  }, [category]);

  const handleCategorySearch = (item) => {
    navigate(`/shop/${item._id}`);
  };
  const slidesPerView = Math.min(products.length, width > 1000 ? 5 : 2.4);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container lg:max-w-7xl px-5 sm:px-6 pt-6 pb-10 mx-auto">
        <div className="flex flex-row justify-between items-baseline w-full mb-6 sm:mb-8">
          <h1 className="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-900">
            You May Also Like
          </h1>
        </div>

        <div className="flex flex-wrap items-center px-4 -m-4 text-center">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            modules={[Pagination]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide
                onClick={() => handleCategorySearch(product)}
                key={product._id}
                className="max-w-[240px] cursor-pointer"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category
                      .map((cat) => cat.name)
                      .join(", ")
                      .toUpperCase()}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">${product.price.toFixed(2)}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
