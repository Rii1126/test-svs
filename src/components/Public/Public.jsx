import React from "react";
import swqosImg from "../../assets/swqos-img.svg";

const Public = () => {
  return (
    <div className="max-w-[1200px] min-h-screen h-[76vh] mx-auto text-center flex flex-col justify-center relative">
      <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-40 items-center">
        <div className="flex-shrink-0">
          <img src={swqosImg} alt="swqos-image" />
        </div>
        <div className="text-start space-y-6">
          <h1 className="md:text-4xl font-bold">
            Stake-Weighted QoS Send-Transaction Service
          </h1>
          <p>
            Stake-weighted QoS (SWQoS) enables faster transaction confirmations
            on Solana by prioritizing connections through staked validators,
            especially during network congestion.
          </p>
          <button className="btn-grad my-2 text-white py-3 px-8 mx-2 md:mx-0 rounded-full shadow-lg transition-all duration-500">
            Discover SWQoS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Public;
