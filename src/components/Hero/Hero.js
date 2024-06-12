import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Hero = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(null);
  let slides = [];
  let categories = [];

  const postersData = localStorage.getItem("posters");

  if (postersData) {
    slides = JSON.parse(postersData).slides;
    categories = JSON.parse(postersData).categories;
  }

  // const { slides, categories } = JSON.parse(localStorage.getItem("posters"));
  // const [slides, setSlides] = useState(slides || []);
  const topSearches = [
    { id: 1, searchName: "Sweatshirts" },
    { id: 2, searchName: "Jackets" },
    { id: 3, searchName: "Hoodies" },
    { id: 4, searchName: "Joggers" },
    { id: 5, searchName: "OverSized " },
    { id: 6, searchName: "T-shirts" },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleCategorySearch = (item) => {
    console.log({ item });
    navigate(`/shop?category=${item.name}`);
  };

  return (
    <>
      <section className="text-gray-600 body-font px-10 bg-gradient-to-b from-white to-[#cef6ff]">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">
              Welcome to Superior BuilderCon
            </h1>
            <p className="mb-8 leading-relaxed">
              Superior BuilderCon is your gateway to innovative construction
              solutions. Our commitment is to redefine excellence in the
              building industry through cutting-edge technology and unparalleled
              craftsmanship.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded w-full"
              alt="hero"
              src="./assets/hero.jfif"
              style={{ mixBlendMode: "darken" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

{
  /* <section className="text-gray-600 body-font mt-3">
        {width < 1000 && (
          <div className=" px-9 mt-20 flex flex-wrap items-center  -m-4 text-center">
            <Swiper slidesPerView={4.5} spaceBetween={20} modules={[Pagination]} className="mySwiper">
              {categories?.map((item) => {
                return (
                  <SwiperSlide onClick={() => handleCategorySearch(item)} key={item._id}>
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-[10px]" src={item.img} />
                    </a>
                    <p className="text-[11px]">{item.name}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
        <div className="container lg:max-w-7xl mx-auto flex flex-col mb-4 px-5 pt-20 pb-6 justify-center items-center">
          <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} stopOnHover={false} swipeable={true}>
            {slides?.map((item) => {
              return (
                <div key={item._id} className="w-full flex flex-col rounded mb-16 items-center text-center">
                  <Link to={item.path}>
                    <img src={item.img} className="rounded-[10px]" />
                  </Link>
                  <p className="legend">Slide 2</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section> */
}
