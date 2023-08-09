import UserProfileImage from '@/components/userComponents/userProfile/UserProfileImage';
import { username } from '@/components/userComponents/userProfile/userData';
import Link from 'next/link';
import Router from 'next/router';
import { BsFillCartCheckFill, BsHeart } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import auth from '../../firebase.init';
import { BiLogOut } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Profile() {
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      Router.push('/signin');
      localStorage.removeItem('accessToken');
      toast.success('User SignOut Successfully', { position: 'top-center' });
    });
  };
  return (
    <div className="mx-auto max-w-md pt-32 text-white">
      <h1 className="mb-8 text-center text-3xl font-black md:text-7xl">
        Your Profile
      </h1>
      <div className="flex items-center justify-between rounded-3xl px-8 py-4">
        <UserProfileImage className="h-16 w-16 text-4xl font-semibold sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl" />
        <p className="text-xl font-bold sm:text-3xl">{user?.displayName}</p>
      </div>
      <div>
        <Link
          href="/orders"
          className="flex w-full items-center gap-4 rounded-xl bg-white py-4 pl-32 font-semibold text-black duration-200 hover:bg-gray-300 hover:underline md:text-xl">
          <BsFillCartCheckFill size={24} />
          Your Orders
        </Link>
      </div>
      <div>
        <Link
          href="/favorites"
          className="mt-4 flex w-full items-center gap-4 rounded-xl bg-white py-4 pl-32 font-semibold text-black duration-200 hover:bg-gray-300 hover:underline md:text-xl">
          <BsHeart size={22} />
          Your Favorites
        </Link>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="mb-20 mt-4 flex w-full items-center gap-4 rounded-xl bg-white py-4 pl-32 font-semibold text-black duration-200 hover:bg-gray-300 hover:underline md:text-xl">
          <BiLogOut size={22} />
          Logout
        </button>
      </div>
    </div>
  );
}
/*
(
            <button
              onClick={handleSignOut}
              className="rounded-xl bg-gradient-to-r from-[#283be5] to-[#0093FF] px-8 py-2 font-bold text-white">
              Sign Out
            </button>
          ) : 
*/
