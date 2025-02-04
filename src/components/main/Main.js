import IMG from './../../assets/delivery.png';

export default function Main() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white min-h-[650px] p-8">
      {/* Texto principal e botões */}
      <div className="flex-1 text-center lg:text-left space-y-8 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl text-black font-bold">
          Deliver with Metrobi.
        </h1>
        <h4 className="text-2xl text-gray-700 font-semibold">
          Grow with confidence.
        </h4>
        <p className="text-sm md:text-base text-gray-500">
          Metrobi connects you with top drivers rated by local businesses like yours. 
          They provide an excellent delivery experience while you focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <p className="text-sm md:text-base lg:space-x-8 text-black">
        Metrobi platform enables you to track the driver’s GPS location and monitor the progress of your delivery.
        </p>
        </div>
      </div>
      {/* Imagem */}
      <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img src={IMG} alt="Delivery Icon" className="w-64 h-64 object-cover" />
      </div>
    </div>
  );
}
