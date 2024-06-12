import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import ProductReviews from "./ProductReviews";
import isLoggedIn from "../../Global";
// import products from "../../mock/data";
import Recommendation from "../Banners/Recommendation";
import { AccordionFAQ } from "../FAQ/Accordion";
import { Rating } from "@mui/material";

const ProductDetails = ({ state, dispatch }) => {
  const [Message, setMessage] = useState("");
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [pincode, setpincode] = useState("");
  const [pincodeDB, setpincodeDB] = useState([400088]);
  const { productId } = useParams();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("SM");
  // useEffect(() => {
  //   const fetchPincodes = async () => {
  //     const response = await fetch(
  //       "https://mosho.onrender.comhttp://localhost:5000/api/getsettings"
  //     );
  //     const data = await response.json();
  //     setpincodeDB(data.pincodes);
  //   };
  //   fetchPincodes();
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      setMessage(" ");
    }, 5000);
  }, [Message]);

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  // const averageRating = calculateAverageRating(reviews);
  return (
    <>
      {products.map((item) => {
        return (
          item._id === productId && (
            <section
              className="text-gray-600 body-font overflow-hidden"
              key={productId}
            >
              <div className="container lg:max-w-7xl px-5 sm:py-24 pt-20 pb-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 w-full rounded lg:h-auto h-64 object-cover object-center rounded"
                    src={item.image}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      BRAND NAME
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {item.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <Rating
                          name="simple-controlled"
                          value={calculateAverageRating(item.reviews)}
                          readOnly
                          size="small"
                        />
                        <span className="text-gray-600 ml-3">
                          {item.reviews.length}
                        </span>
                      </span>
                      <div className="ml-3 border-l-2 border-gray-200 space-x-2s">
                        {item.quantity <= 0 ? (
                          <span className="flex ml-3 px-3 py-2 space-x-2s bg-gray-100 rounded-lg text-red-600">
                            out of stock
                          </span>
                        ) : (
                          <span className="flex ml-3 px-3 py-2  space-x-2s bg-gray-100 rounded-lg text-blue-600">
                            only {item.quantity} left
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha.
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                          <select
                            onChange={(e) => setSelectedSize(e.target.value)}
                            value={selectedSize}
                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10"
                          >
                            {item.size.map((item) => {
                              return <option key={item}>{item}</option>;
                            })}
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        {/* ₹{parseFloat(parseFloat(item.price).toFixed(2)).toFixed(2)} */}
                        ₹{parseFloat(item.price).toFixed(2)}
                      </span>
                      {pincodeDB.includes(parseInt(pincode))
                        ? pincode.length > 5 && (
                            <p style={{ color: "green" }}>Delivery Available</p>
                          )
                        : pincode.length > 5 && (
                            <p style={{ color: "orangered" }}>
                              Sorry! Delivery services is Not Available at your
                              location.
                            </p>
                          )}

                      <p>{Message}</p>
                      {state.cart.some((prod) => prod.id === item._id) ? (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_TO_CART",
                              payload: item,
                            })
                          }
                          className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                        >
                          Remove from cart{" "}
                        </button>
                      ) : (
                        <button
                          onClick={
                            () =>
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                  id: item._id,
                                  name: item.name,
                                  price: parseFloat(item.price).toFixed(2),
                                  qty: 1,
                                  size: selectedSize,
                                  image: item.image,
                                  maxQty: item.quantity,
                                },
                              })
                            // : toast.error("Please check your location first")
                          }
                          disabled={item.quantity <= 0}
                          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {console.log({ item })}
              <AccordionFAQ />
              <ProductReviews item={item} />
              <Recommendation category={item.category} />
            </section>
          )
        );
      })}
    </>
  );
};

export default ProductDetails;
