import React from "react";
import PricingCard from "../../components/Pricingcard/Pricingcard";

const Pricing = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-gray-900"></div>
      <div className="pt-[200px] max-w-[1200px] min-h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-40 justify-center items-center">
          <div className="flex flex-col text-center space-y-6">
            <div className="pb-10">
              <h1 className="md:text-5xl font-bold pb-4">
                Value-Packed Plans for All
              </h1>
              <p className="text-md mx-4">
                Elevate Your Solana Projects with Solana Vibe Station’s Leading
                Infrastructure Solutions
              </p>
            </div>
            <div className="flex space-x-20 pb-10">
              <PricingCard
                title="Basic"
                description="Ideal for testing"
                price="$0/mo"
                features={[
                  "500K Credits",
                  "10 Requests/sec",
                  "1 API Key",
                  "1 Webhooks",
                  "Community Support",
                ]}
                buttonText="Launch Now"
                buttonLink="https://example.com/start"
              />
              <PricingCard
                title="gRPC"
                description="Ideal for testing"
                price="$0/mo"
                features={[
                  "500K Credits",
                  "10 Requests/sec",
                  "1 API Key",
                  "1 Webhooks",
                  "Community Support",
                ]}
                buttonText="Launch Now"
                buttonLink="https://example.com/start"
              />
              <PricingCard
                title="SQWoS"
                description="Ideal for testing"
                price="$0/mo"
                features={[
                  "500K Credits",
                  "10 Requests/sec",
                  "1 API Key",
                  "1 Webhooks",
                  "Community Support",
                ]}
                buttonText="Launch Now"
                buttonLink="https://example.com/start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
