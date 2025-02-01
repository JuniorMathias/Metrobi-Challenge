import { ArrowRight } from 'lucide-react';

export default function Hero() {

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between  ">
        <div className="md:w-1/3  p-5 flex flex-col justify-between bg-primary ">

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl text-white font-bold">
              Deliver with Metrobi.
            </h1>
            <h4 className="text-4xl md:text-2xl text-black font-bold">
              Grow with confidence.
            </h4>
            <p className="text-sm md:text-base text-gray-500">
              Metrobi connects you with top drivers rated by local businesses like yours. 
              They provide an excellent delivery experience while you focus on growing your business.
            </p>

            <div className="lg:space-x-8 lg:flex sm:flex items-center">
              <div className='mb-4'>
                <button className="px-5 py-2 bg-purple-600 text-white font-bold rounded-md flex items-center hover:text-primary">
                  GET A QUOTE<ArrowRight />
                </button>
              </div>
              <button className="flex items-center text-sm sm:pl-2 text-white">
                <span>Create your free account </span><ArrowRight />
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
