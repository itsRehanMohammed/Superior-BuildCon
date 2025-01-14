import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar } from "@mui/material";
import { useWidth } from "../../Global";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCart, setopenCart] = useState(false);
  const width = useWidth();
  const toggleCart = () => {
    setopenCart(!openCart);
  };
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setIsOpen(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutModal = () => {
    setAnchorEl(null);
    setModal(true);
  };
  const logoutHandeler = async () => {
    setModal(false);
    const response = await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    const data = await response.json();
    // toast.success(data.status);
    navigate("/");
  };

  return (
    <>
      <header className="shadow bg-gradient-to-b from-[#cef6ff] to-white mb-2 fixed top-0 z-[101] left-0 w-full">
        <div className="relative flex  max-w-screen-xl flex-col  overflow-hidden  px-4 py-3 md:mx-auto md:flex-row md:items-center">
          <div className="flex justify-between">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center whitespace-nowrap text-2xl w-10 font-black text-[#0184a2]"
            >
              <img
                src="./assets/logo.jpg"
                style={{
                  mixBlendMode: "darken",
                }}
              />
            </Link>
          </div>

          <input
            type="checkbox"
            className="peer hidden"
            id="navbar-open"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />

          <label
            className="absolute top-6  right-4 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul className="flex min-h-42px flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="text-gray-600 md:mr-12 hover:text-[#0184a2]">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="text-gray-600 md:mr-12 hover:text-[#0184a2]">
                <Link to="/help" onClick={() => setIsOpen(false)}>
                  Help
                </Link>
              </li>
              <li className="text-gray-600 md:mr-10 hover:text-[#0184a2]">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>

              <li className="text-gray-600  hover:text-[#0184a2]">
                <Link to={"/gallery"} onClick={() => setIsOpen(false)}>
                  <button className="rounded-md border-2 border-[#0184a2] px-6 py-1 font-medium text-[#0184a2] transition-colors hover:bg-[#0184a2] hover:text-white">
                    Gallery
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
