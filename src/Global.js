import { useState, useEffect } from "react";

/**
 * Custom hook to check if the user is logged in.
 * @returns {boolean} True if the user is logged in, false otherwise.
 */
export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Update isLoggedIn whenever localStorage changes
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isLoggedIn;
};

/**
 * Custom hook to get the current width of the window.
 * @returns {number} The current width of the window.
 */
export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
