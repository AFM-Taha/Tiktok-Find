import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  FaBoxOpen,
  FaShoppingBag,
  FaSignOutAlt,
  FaUsers,
} from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { PiTiktokLogoLight } from 'react-icons/pi';
import auth from '../../../firebase.init';
import { toast } from 'react-hot-toast';
import Router from 'next/router';
import { BsCameraVideo } from 'react-icons/bs';
import { useState } from 'react';

const adminMenu = [
  {
    id: 1,
    icon: <FaUsers className="text-2xl text-gray-500" />,
    name: 'Users',
    path: '/admin/manage-users',
  },
  {
    id: 2,
    icon: <FaShoppingBag className="text-2xl text-gray-500" />,
    name: 'Products',
    path: '/admin/manage-products',
  },
  {
    id: 3,
    icon: <FaBoxOpen className="text-2xl text-gray-500" />,
    name: 'Orders',
    path: '/admin/manage-orders',
  },
  {
    id: 4,
    icon: <BsCameraVideo className="text-2xl text-gray-500" />,
    name: 'Videos',
    path: '/admin/manage-videos',
  },
];

const AdminSidebar = ({ children }: any) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      Router.push('/admin/login');
      localStorage.removeItem('accessToken');
      toast.success('Admin SignOut Successfully', { position: 'top-left' });
    });
  };

  const [openMenu, seOpenMenu] = useState(false);

  return (
    <section className="relative">
      <div
        className={`absolute top-0 z-10 h-screen w-3/4 bg-white duration-300 md:hidden ${
          openMenu ? 'left-0' : '-left-[500px]'
        } `}>
        <div className="relative">
          <span
            onClick={() => seOpenMenu(false)}
            className="absolute right-1 top-1 rounded-full bg-red-500 px-4 py-2 text-white">
            x
          </span>
          <ul className="space-y-2 pt-16 font-medium">
            {adminMenu.map((m) => {
              return (
                <li onClick={() => seOpenMenu(false)} key={m.id}>
                  <Link
                    href={m.path}
                    className={`flex items-center rounded-lg p-2 duration-200 hover:bg-gray-700 hover:text-gray-100 ${
                      router.pathname.includes(m.path)
                        ? 'bg-gray-700 text-gray-100'
                        : 'text-gray-700'
                    }`}>
                    {m.icon}

                    <span className="ml-3">{m.name} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <button
        onClick={() => seOpenMenu(true)}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 outline outline-1 outline-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMenu />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed  left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar">
        <div className="relative  h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <Link
            className="mb-8 rounded-xl bg-[rgba(26,42,59,0.68)] p-2 text-xl font-medium tracking-wide text-white backdrop-blur-[5px] backdrop-saturate-150"
            href="/">
            <PiTiktokLogoLight className="inline pr-1" size={30} />
            Find
          </Link>
          <ul className="mt-8 space-y-2 font-medium">
            {adminMenu.map((m) => {
              return (
                <li key={m.id}>
                  <Link
                    href={m.path}
                    className={`flex items-center rounded-lg p-2 duration-200 hover:bg-gray-700 hover:text-gray-100 ${
                      router.pathname.includes(m.path)
                        ? 'bg-gray-700 text-gray-100'
                        : 'text-gray-700'
                    }`}>
                    {m.icon}

                    <span className="ml-3">{m.name} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="absolute bottom-5">
            <li>
              <Link
                target="_blank"
                href="/"
                className=" flex items-center rounded-lg p-2 text-gray-900 duration-300 hover:bg-gray-100 hover:underline dark:text-white dark:hover:bg-gray-700">
                <GiWorld className="text-2xl text-gray-500" />

                <span className="ml-3"> Go to client site</span>
              </Link>
            </li>
            <li className="">
              <button
                onClick={handleSignOut}
                className={`flex items-center rounded-lg p-2 text-gray-900 duration-300 hover:bg-gray-100 hover:underline dark:text-white dark:hover:bg-gray-700`}>
                <FaSignOutAlt className="" />

                <span className="ml-3">Sign Out </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Children */}

      <div className="sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
    </section>
  );
};

export default AdminSidebar;
