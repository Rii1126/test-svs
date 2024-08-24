import React from "react";
import PropTypes from "prop-types";

const PricingCard = ({
  title,
  description,
  price,
  features = [],
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="border-gray-500 border-2 text-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="text-start mb-6 sm:mb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
          {title}
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-4">
          {description}
        </p>
      </div>
      <div className="text-start mb-6 sm:mb-8">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white">
          {price}
        </div>
        <div>
          {features.length > 0 ? (
            <ul className="list-disc list-inside text-left">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2 sm:mb-3 text-white text-sm sm:text-base md:text-lg"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="mr-14">{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-sm sm:text-base md:text-lg">
              No features available
            </p>
          )}
        </div>
      </div>
      <a
        href={buttonLink}
        className="btn-grad my-2 sm:my-3 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 mx-2 rounded-full shadow-lg transition-all duration-500"
      >
        {buttonText}
      </a>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

PricingCard.defaultProps = {
  features: [],
};

export default PricingCard;
