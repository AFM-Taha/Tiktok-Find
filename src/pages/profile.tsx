import UserProfileImage from '@/components/userComponents/userProfile/UserProfileImage';
import { username } from '@/components/userComponents/userProfile/userData';
import Link from 'next/link';
import { BsFillCartCheckFill, BsHeart } from 'react-icons/bs';

export default function Profile() {
  return (
    <div className="mx-auto mt-32 max-w-md text-white">
      <h1 className="mb-8 text-center text-3xl font-black md:text-7xl">
        Your Profile
      </h1>
      <div className="flex items-center justify-between rounded-3xl px-8 py-4">
        <UserProfileImage className="h-16 w-16 text-4xl font-semibold sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl" />
        <p className="text-xl font-bold sm:text-3xl">{username}</p>
      </div>
      <div>
        <Link
          href="/orders"
          className="flex w-full items-center gap-4 rounded-xl bg-white py-4 pl-32 font-semibold text-black hover:underline md:text-xl">
          <BsFillCartCheckFill size={24} />
          Your Orders
        </Link>
      </div>
      <div>
        <Link
          href="/favorites"
          className="mb-20 mt-4 flex w-full items-center gap-4 rounded-xl bg-white py-4 pl-32 font-semibold text-black hover:underline md:text-xl">
          <BsHeart size={22} />
          Your Favorites
        </Link>
      </div>
    </div>
  );
}
