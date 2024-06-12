import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopSearch = () => {
  const navigate = useNavigate();
  // Retrieve poster object from local storage
  const poster = JSON.parse(localStorage.getItem("posters")) || {};
  // Retrieve categories from the poster object
  const categories = poster.categories || [];

  const handleCategorySearch = (category) => {
    navigate(category.path);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container lg:max-w-7xl px-4 sm:px-6 pt-4 pb-10 mx-auto">
          <div className="flex flex-col w-full mb-6 sm:mb-8">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-900">
              Trending Categories
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {categories.map((category) => (
              <div
                onClick={() => handleCategorySearch(category)}
                className="p-3 sm:p-4 md:w-1/6 sm:w-1/2 w-1/2"
                key={category.id}
              >
                <div className="border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
                  <img
                    className="object-cover object-center rounded w-full"
                    alt={category.name}
                    src={category.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSearch;
