import React from "react";
import rpcImg from "../../assets/rpc-img.svg";

const Vps = () => {
  return (
    <div className="max-w-[1200px] min-h-screen h-[76vh] mx-auto text-center flex md:flex-row-reverse flex-col-reverse justify-center relative">
      <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-40 items-center">
        <div className="flex-shrink-0">
          <img src={rpcImg} alt="img" width={450} />
        </div>
        <div className="text-start space-y-6">
          <h1 className="md:text-4xl font-bold pt-4">
            Private VPS Node Access
          </h1>
          <p>
            Our private VPS offers customizable hardware, with Windows or
            Ubuntu, 6 vCPUs, 8GB RAM, 100GB SSD, and high performance.
          </p>
          <button className="btn-grad my-2 text-white py-3 px-8 mx-2 md:mx-0 rounded-full shadow-lg transition-all duration-500">
            Discover VPS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vps;
