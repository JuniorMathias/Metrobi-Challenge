import { ArrowRight } from 'lucide-react';
import IMG from './../../assets/smartphone-map.png'
export default function Sidebar() {
  return (
    <>
      <div className="p-5 flex flex-col justify-between bg-secondary h-[500px] lg:-mt-24">
        <div className="space-y-12">
          <div className="flex  lg:flex-row lg:space-x-4 items-center">
            <button className="w-full lg:w-auto px-2 py-3 bg-purple-600 text-white font-bold rounded-md flex items-center justify-center mt-3 lg:mt-0 hover:text-primary">
              GET A QUOTE <ArrowRight />
            </button>
            <button className="w-full lg:w-auto px-2 py-3 bg-blue-600 text-white font-bold rounded-md flex items-center justify-center mt-3 ml-3 lg:ml-0 lg:mt-0 hover:text-primary">
              CONTACT US <ArrowRight />
            </button>
            <button className="w-full lg:w-auto px-2 py-3 bg-green-600 text-white font-bold rounded-md flex items-center justify-center mt-3 ml-3 lg:ml-0 lg:mt-0 hover:text-primary">
              LEARN MORE <ArrowRight />
            </button>
          </div>

          {/* Imagem com texto ao lado */}
          <div className="flex items-center mt-8 space-x-8">
            <img src={IMG} alt="Icon" className="w-24 h-24" />
            <p className="text-sm text-gray-600">
            Metrobi uses an advanced route optimization technology to minimize travel time and reduce 
            fuel costs, making it simple for you to handle complex multi-stop deliveries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
