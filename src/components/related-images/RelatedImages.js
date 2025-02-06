import RatingOne from './../../assets/rating/rating-1.jfif';
import RatingTwo from './../../assets/rating/rating-2.jfif';
import RatingThree from './../../assets/rating/rating-3.jfif';

export default function RelatedImages() {
  const images = [
    { url: RatingOne, alt: "img 1" },
    { url: RatingTwo, alt: "img 2" },
    { url: RatingThree, alt: "img 3" },
  ];

  return (
    <div className="flex flex-col sm:flex-row lg:h-56 items-center justify-center  gap-x-8 bg-white lg:mr-10 rounded-xl p-6 mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            className="inline-block h-24 w-24 rounded-full"
            src={image.url}
            alt={image.alt}
          />
        ))}
      </div>

      <div className="boder-none sm:border-l-2 border-black sm:pl-8">
        <div className="flex justify-center sm:justify-start items-center">
          <h3 className="text-2xl font-semibold mr-2">4.6</h3>
          <img className="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon" />
        </div>
        <h3 className="text-sm">Rated by 25k on Google.</h3>
      </div>
    </div>
  );
};
