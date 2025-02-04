import { ArrowRight } from 'lucide-react';
import IMG from './../../assets/smartphone-map.png';

export default function Sidebar() {
  return (
    <div className="p-5 flex flex-col justify-between bg-secondary lg:h-[500px] lg:-mt-24  ">

      <div className="space-y-20">
        {/* Botões Responsivos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button className="px-3 py-3 bg-purple-600 text-white font-bold rounded-md flex items-center justify-center hover:text-primary">
            GET A QUOTE <ArrowRight />
          </button>
          <button className="px-3 py-3 bg-blue-600 text-white font-bold rounded-md flex items-center justify-center hover:text-primary">
            CONTACT US <ArrowRight />
          </button>
          <button className="px-3 py-3 bg-green-600 text-white font-bold rounded-md flex items-center justify-center hover:text-primary">
            LEARN MORE <ArrowRight />
          </button>
        </div>

        {/* Imagem com texto ao lado */}
        <div className="flex items-center mt-8 space-x-8">
          <img src={IMG} alt="Icon" className="w-24 h-24" />
          <p className="text-sm text-gray-600">
            Metrobi uses an advanced route optimization technology to minimize travel time and reduce fuel costs, making it simple for you to handle complex multi-stop deliveries.
          </p>
        </div>
      </div>
    </div>
  );
}
