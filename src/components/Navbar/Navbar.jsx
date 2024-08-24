import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/header-logo.svg";
import buttonCss from "../Buttons/buttons.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="frosted-glass fixed w-full top-0 z-50">
      <div className="flex items-center justify-between max-w-[1240px] h-24 px-4 text-sm font-semibold mx-auto">
        <div className="flex items-end space-x-4">
          <img src={Logo} alt="nav-logo" width={120} height={120} />
          <ul className="hidden md:flex font-medium space-x-4">
            <li
              className="relative p-2 cursor-pointer hover:text-fuchsia-400 transition duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center">
                Products
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-96 p-3 rounded-lg shadow-lg glassmorphism ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white font-medium hover:bg-fuchsia-700 hover:opacity-90 rounded duration-300 ease-in-out"
                >
                  Public RPC Node Access
                  <p className="text-xs mt-1 font-normal text-fuchsia-500">
                    Unlock Seamless Blockchain Connectivity
                  </p>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white font-medium hover:bg-fuchsia-700 hover:opacity-70 rounded duration-300 ease-in-out"
                >
                  Stake-Weighted QoS Send-Transaction Service
                  <p className="text-xs mt-1 font-normal text-fuchsia-500">
                    Optimize Transactions with Quality of Service
                  </p>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white font-medium hover:bg-fuchsia-700 hover:opacity-70 rounded duration-300 ease-in-out"
                >
                  Public Geyser gRPC Streaming
                  <p className="text-xs mt-1 font-normal text-fuchsia-500">
                    Stream Data Efficiently and Effectively
                  </p>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white font-medium hover:bg-fuchsia-700 hover:opacity-70 rounded duration-300 ease-in-out"
                >
                  Private VPS Node Access
                  <p className="text-xs mt-1 font-normal text-fuchsia-500">
                    Secure and Private Node Access
                  </p>
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white font-medium hover:bg-fuchsia-700 hover:opacity-70 rounded duration-300 ease-in-out"
                >
                  RPC Node Consulting Services
                  <p className="text-xs mt-1 font-normal text-fuchsia-500">
                    Expert Guidance for RPC Node Solutions
                  </p>
                </a>
              </div>
            </li>
            <li className="p-2 cursor-pointer hover:text-fuchsia-400 transition duration-300">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="p-2 cursor-pointer hover:text-fuchsia-400 transition duration-300">
              Blog
            </li>
            <li className="p-2 cursor-pointer hover:text-fuchsia-400 transition duration-300">
              <a href="https://docs.solanavibestation.com/" target="_blank">
                Docs
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block text-sm font-medium">
          <button className="btn-grad text-white py-3 px-8 mx-2 rounded-full shadow-lg transition-all duration-500">
            Build Now
          </button>
        </div>

        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#20242d] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out z-40 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-9 right-4">
          <AiOutlineClose
            size={26}
            className="text-white cursor-pointer"
            onClick={handleNav}
          />
        </div>

        <ul className="text-white text-xl text-center space-y-8">
          <li className="cursor-pointer" onClick={handleNav}>
            Products
          </li>
          <li className="cursor-pointer" onClick={handleNav}>
            Pricing
          </li>
          <li className="cursor-pointer" onClick={handleNav}>
            Blog
          </li>
          <li className="cursor-pointer" onClick={handleNav}>
            Docs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
