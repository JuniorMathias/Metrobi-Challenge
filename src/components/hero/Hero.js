import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <div className="p-5 flex flex-col justify-between bg-primary  "> {/* Altura fixa */}
      <div className="space-y-8">
        <h3 className="md:text-4xl text-white font-bold">
          Technology to impress your customers
        </h3>
        <h4 className="md:text-2xl text-black font-bold">
          A powerful route planner
        </h4>
        <p className=" md:text-sm text-gray-500">
        Keep your customers informed and engaged with customizable automated delivery
         notifications on dispatch, progress, and successful delivery,
          creating a seamless communication experience.
        </p>
        <div className="lg:flex sm:flex items-center">
          <button className="flex items-center text-sm text-secondary">
            <span>Create your free account </span><ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
