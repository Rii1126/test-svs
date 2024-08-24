import React from "react";
import rpcImg from "../../assets/rpc-img.svg";

const Geyser = () => {
  return (
    <div className="max-w-[1200px] min-h-screen h-[76vh] mx-auto text-center flex flex-col justify-center relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-40 items-center">
        <div className="flex-shrink-0">
          <img src={rpcImg} alt="img" width={450} />
        </div>
        <div className="text-start space-y-6">
          <h1 className="md:text-4xl font-bold pt-4">
            Public Geyser gRPC Streaming
          </h1>
          <p>
            Information about our Geyser gRPC streaming service: We use the
            Yellowstone Dragon's Mouth plugin, renowned for its speed and
            reliability, which is regularly updated and stable. Thanks to Triton
            for making it open source and maintaining it.
          </p>
          <button className="btn-grad my-2 text-white py-3 px-8 mx-2 md:mx-0 rounded-full shadow-lg transition-all duration-500">
            Discover gRPC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Geyser;
