import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="p-5 flex flex-col justify-between bg-primary">
      <div className="space-y-8">
        <h1 className="text-3xl text-white font-bold">Technology to impress your customers</h1>
        <h4 className="md:text-2xl text-black font-bold">A powerful route planner</h4>
        <p className="md:text-sm text-gray-500">
          Keep your customers informed and engaged with customizable automated delivery notifications on dispatch, progress, and successful delivery, creating a seamless communication experience.
        </p>
        <button className="flex items-center text-sm text-secondary hover:text-green-600">
          <span>Create your free account </span><ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
