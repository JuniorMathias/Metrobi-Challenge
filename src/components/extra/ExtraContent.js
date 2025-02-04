import React from 'react';

export default function ExtraContent() {
  return (
    <div className="flex flex-col justify-center bg-secondary text-center h-auto p-8">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl text-black font-bold">
          Platform overview
        </h1>
        <p className="text-sm md:text-base text-black">
          Metrobi makes local deliveries easier than ever.
          You can connect with on-demand delivery drivers, optimize routes, monitor deliveries, 
          and keep your customers happy with seamless communication.
        </p>
      </div>
    </div>
  );
};
