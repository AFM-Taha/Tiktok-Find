import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";
import{GiWorld}from "react-icons/gi"
import { RiDashboardLine } from 'react-icons/ri';
import { BiObjectsHorizontalLeft } from 'react-icons/bi';

type Props = {}

const AdminSidebar = ({children}:any) => {
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed  left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar">
        <div className="relative  h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
       
       <h3 className="border border-red-500 p-4  mb-8">

        Logo of Admin 
       </h3>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/productManage"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orderManage"
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

                <span className="ml-3"> Go to clint site</span>
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
}

export default AdminSidebar