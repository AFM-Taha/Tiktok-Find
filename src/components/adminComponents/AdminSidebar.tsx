import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaBoxOpen, FaShoppingBag, FaUsers } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { PiTiktokLogoLight } from 'react-icons/pi';

const AdminSidebar = ({ children }: any) => {
  return (
    <>
      <button
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
            <li>
              <Link
                href="/admin"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <FaUsers className="text-2xl text-gray-500" />
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/manage-products"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <FaShoppingBag className="text-2xl text-gray-500" />
                <span className="ml-3 flex-1 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/manage-orders"
                className=" flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <FaBoxOpen className="text-2xl text-gray-500" />

                <span className="ml-3">Orders </span>
              </Link>
            </li>
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
          </ul>
        </div>
      </aside>

      {/* Children */}

      <div className="mx-5 p-4 sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default AdminSidebar;
