import React from 'react';

export default function ExtraContent() {
  return (
    <div className="flex flex-col justify-center bg-secondary text-center h-[200px]">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl text-black font-bold">
          Platform overview
        </h1>

        <p className="text-sm md:text-base lg:space-x-8 text-black">
          Metrobi makes local deliveries easier than ever.<br/>
          You can connect with on-demand delivery drivers, optimize routes, monitor deliveries,<br/>
          and keep your customers happy with seamless communication.
        </p>

        <div className="lg:space-x-20 lg:flex sm:flex items-center">
        </div>
      </div>
    </div>
  );
};
