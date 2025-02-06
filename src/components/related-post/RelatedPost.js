import { Link } from 'react-router-dom';
import RatingFour from './../../assets/rating/rating-4.jfif';

export default function RelatedPost() {
  return (
    <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-primary shadow-md md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src={RatingFour}
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div class="text-sm font-semibold tracking-wide text-white uppercase">Christopher Malloy | District Manager</div>
          <Link href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            Atlanta, Austin, Chicago, Dallas, Los Angeles, New York City,
          </Link>
          <p class="text-gray-500">
            Metrobi's been able to give us an outlet to be able to continue to reach our customers in a strong way.
          </p>
        </div>
      </div>
    </div>
  );
};
