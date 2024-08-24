import React from "react";
import rpcImg from "../../assets/rpc-img.svg";

const About = () => {
  return (
    <div className="max-w-[1200px] min-h-screen h-[76vh] mx-auto text-center flex flex-col justify-center relative">
      <h1 className="md:text-5xl font-bold pt-4 pb-10">
        Comprehensive Solana Dev Tools
      </h1>
      <p className="md:text-xl gradient-text mb-36">
        Engineered for peak performance and dependability.
      </p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-40 items-center">
        <div className="flex-shrink-0">
          <img src={rpcImg} alt="rpc-image" width={450} />
        </div>
        <div className="text-start space-y-6">
          <h1 className="md:text-4xl font-bold">Public RPC Node Access</h1>
          <p>
            Accelerate your applications with dependable and fast Solana RPC
            nodes. Available around the clock, our nodes are rigorously tested
            to ensure optimal performance, earning the trust of thousands for
            their consistency and reliability.
          </p>
          <button className="btn-grad text-white py-3 px-8 rounded-full shadow-lg transition-all duration-500">
            Discover RPCs
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
