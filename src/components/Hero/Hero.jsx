import React from "react";
import "../Styles/styles.css";

const Hero = () => {
  return (
    <div className="bg-img">
      <div className="max-w-[1200px] min-h-screen h-[76vh] mx-auto text-center flex flex-col justify-center relative">
        <h1 className="text-4xl md:text-7xl font-bold py-4 md:py-6">
          <span className="gradient-text">Solana</span> Vibe Station: <br />{" "}
          Your <span className="gradient-text">Solana RPCs</span> <br />{" "}
          <span className="gradient-text">Gateway</span>
        </h1>
        <p className="text-md md:pb-6 mx-4">
          Solana's Trusted Source for gRPC Nodes, APIs, Webhooks, and Developer
          Tools
        </p>
        <div className="flex flex-col justify-center md:block text-sm font-medium pb-6">
          <button className="btn-grad my-2 text-white py-3 px-8 mx-2 rounded-full shadow-lg transition-all duration-500">
            Start For Free
          </button>
          <button className="btn-secondary my-2 text-white py-3 px-8 mx-2 rounded-full shadow-lg transition-all duration-500">
            <a href="https://docs.solanavibestation.com/" target="_blank">
              Developers
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
