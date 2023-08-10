import UserProfileImage from '@/components/userComponents/userProfile/UserProfileImage';
import Link from 'next/link';
import Router from 'next/router';
import { BsFillCartCheckFill, BsHeart } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import auth from '../../firebase.init';
import { BiLogOut } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { patch } from '@/request/patch';
import { baseURL } from '@/components/assets/url';
import { useGetData } from '@/request/getData';

export default function Profile() {
  const [user, loading] = useAuthState(auth);

  const [isDisabled, setIsDisabled] = useState(true);
  const [rename, setRename] = useState('');
  const { data, refetch } = useGetData<any>(`${baseURL}/users/${user?.email}`);

  // If user is not logged in, redirect to signin page
  useEffect(() => {
    if (!loading && !user) Router.push('/signin');
  }, [user, loading]);

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      Router.push('/signin');
      localStorage.removeItem('accessToken');
      toast.success('User SignOut Successfully', { position: 'top-center' });
    });
  };

  const handleSave = () => {
    patch(
      `${baseURL}/users/${user?.email}`,
      { displayName: rename },
      refetch,
      setIsDisabled(true)
    );
  };

  console.log(data);
  return (
    <div className="mx-auto max-w-md pt-32 text-white">
      <h1 className="mb-8 text-center text-3xl font-black md:text-7xl">
        Your Profile
      </h1>
      <div className="flex items-center justify-between rounded-3xl px-8 py-4">
        <UserProfileImage
          username={data?.displayName}
          className="h-16 w-16 text-4xl font-semibold sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl"
        />
        <p className="text-xl font-bold sm:text-3xl">{data?.displayName}</p>
      </div>
      <label htmlFor="rename" className="text-lg font-medium">
        Change username
      </label>
      <div className="mb-4 flex items-center justify-between">
        <input
          id="rename"
          type="text"
          className={`w-full rounded-xl py-4 text-black ${
            isDisabled ? 'bg-gray-400 bg-opacity-80 opacity-80' : 'bg-white'
          }`}
          value={rename}
          onChange={(e) => setRename(e.target.value)}
          disabled={isDisabled}
          placeholder={data?.displayName as string}
        />
        {isDisabled ? (
          <div>
            <FaRegEdit
              size={24}
              className="mx-3"
              onClick={() => setIsDisabled(false)}
            />
          </div>
        ) : (
          <button
            onClick={handleSave}
            className="mx-3 rounded-xl bg-blue-600 p-4 font-bold text-white">
            Save
          </button>
        )}
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
