import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "./ProductDetails.css";
import { useIsLoggedIn } from "../../Global";
import productReviewAPI from "../../api/productReviewAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductReviews = ({ item }) => {
  let userImg =
    "data:image/jpeg;base64,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";
  const [reviews] = useState(item.reviews);
  const [Review, setReview] = useState({
    user: {
      name: localStorage.getItem("username"),
      img: userImg,
      email: localStorage.getItem("email"),
    },
    comment: "",
    rating: 0,
  });
  const isLoggedIn = useIsLoggedIn();
  console.log({ reviews });
  const submitReview = async (event) => {
    if (!isLoggedIn) {
      // Redirect to the login page or show a modal to log in
      return;
    }
    event.preventDefault();
    try {
      const response = await productReviewAPI(Review, item._id);
      const data = response.data;
      if (response.status === 201) {
        // Login successful
        toast.success(data.message);
        const productsResponse = await fetch(
          "http://localhost:5000/api/products"
        );
        const productsData = await productsResponse.json();
        localStorage.setItem("products", JSON.stringify(productsData));
        // window.location.href = `http://localhost:3000/shop/${item._id}`;
        if (productsData) {
          window.location.reload();
        }
      }
    } catch (error) {
      // Handle other errors, such as network errors
      if (error.response) {
        // If the error is due to wrong credentials, extract and display the error message
        console.log({ error });
        const errorMessage = error.response.data.originalMessage
          ? error.response.data.originalMessage.split("Path")[1].trim()
          : error.response.data.message;
        toast.error(errorMessage);
      } else {
        // Handle other errors
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <section
      id="review-container lg:max-w-7xl"
      className="text-gray-600 body-font overflow-hidden "
    >
      <div className="container lg:max-w-7xl sm:px-10 px-5 mx-auto">
        <div className="mt-8">
          <h2 className="title-font sm:text-3xl text-xl mb-7 font-medium text-gray-900">
            Reviews
          </h2>

          {isLoggedIn && (
            <div className="mb-7">
              <Rating
                name="simple-controlled"
                value={Review.rating}
                onChange={(event, rating) => {
                  setReview((prevReview) => ({ ...prevReview, rating }));
                }}
              />
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                placeholder="Write your review..."
                value={Review.comment}
                onChange={(e) => {
                  const comment = e.target.value;
                  setReview((prevReview) => ({ ...prevReview, comment }));
                }}
              ></textarea>
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={submitReview}
              >
                Submit Review
              </button>
            </div>
          )}

          {reviews.length > 0 ? (
            <div className="overflow-x-hidden overflow-y-scroll max-h-[600px] hide-scrollbar">
              {reviews.map((review, index) => (
                <div
                  key={review.review_id}
                  className="mb-4 p-4 border border-gray-300 rounded "
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      {/* User avatar */}
                      <img
                        src={review.user.img}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="ml-2 text-gray-700">{review.user.name}</p>
                    {/* <span className="ml-3 mt-2 pl-2 border-l-2 border-gray-200"></span> */}
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={review.rating}
                    readOnly
                    size="small"
                  />
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews available.</p>
          )}
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
