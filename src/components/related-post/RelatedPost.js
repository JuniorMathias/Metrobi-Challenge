import { Link } from 'react-router-dom';
import RatingFour from './../../assets/rating/rating-4.jfif';

export default function RelatedPost() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-primary shadow-md md:max-w-2xl mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48">
          <img
            className="w-full h-auto object-cover md:h-full"
            src={RatingFour}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-white uppercase">
            Christopher Malloy | District Manager
          </div>
          <Link to="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            Atlanta, Austin, Chicago, Dallas, Los Angeles, New York City,
          </Link>
          <p className="mt-2 text-gray-500">
            Metrobi's been able to give us an outlet to be able to continue to reach our customers in a strong way.
          </p>
        </div>
      </div>
    </div>
  );
}
