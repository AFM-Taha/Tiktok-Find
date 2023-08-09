import { PiTiktokLogoLight } from 'react-icons/pi';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { GrClose } from 'react-icons/gr';
// import { useState } from 'react';
import Link from 'next/link';
import ProductCart from './ProductCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
// import { signOut } from 'firebase/auth';
// import { toast } from 'react-hot-toast';
// import Router from 'next/router';
import UserProfileImage from '../userProfile/UserProfileImage';
import { useState } from 'react';

export default function NavBar() {
  // const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [user] = useAuthState(auth);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 mx-4 flex items-center justify-between pt-2">
        <div className="min-w-fit">
          <Link
            className="rounded-xl bg-[rgba(26,42,59,0.68)] p-2 text-xl font-medium tracking-wide text-white backdrop-blur-[5px] backdrop-saturate-150"
            href="/">
            <PiTiktokLogoLight className="inline pr-1" size={30} />
            Find
          </Link>
        </div>
        <div className="mx-4 flex-grow">
          <input
            type="text"
            className="w-full rounded-xl bg-[rgba(26,42,59,0.68)] px-4 text-xl font-medium text-white"
            value={searchText}
            placeholder="Search products..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-evenly gap-2">
          <Link
            className="rounded-xl bg-[rgba(26,42,59,0.68)] p-3 backdrop-blur-[5px] backdrop-saturate-150"
            href="/cart">
            <ProductCart />
          </Link>
          <Link
            href="/signin"
            className={`rounded-xl bg-gradient-to-r from-[#283be5] to-[#0093FF] px-8 py-2 font-bold text-white ${
              user ? 'hidden' : ''
            }`}>
            Sign In
          </Link>
          <Link className={user ? '' : 'hidden'} href="/profile">
            <UserProfileImage className="h-10 w-10 font-bold text-white" />
          </Link>
        </div>
      </nav>
      {/* <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between rounded-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <button
              title="Menu"
              onClick={() => setIsOpen(true)}
              className="navbar-burger flex items-center rounded-xl bg-[rgba(26,42,59,0.68)] p-3 backdrop-blur-[5px] backdrop-saturate-150">
              <AiOutlineMenu size={20} color="white" />
            </button>
          </div>
          <Link
            className="rounded-xl bg-[rgba(26,42,59,0.68)] p-2 text-xl font-medium tracking-wide text-white backdrop-blur-[5px] backdrop-saturate-150"
            href="/">
            <PiTiktokLogoLight className="inline pr-1" size={30} />
            Find
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            className="rounded-xl bg-[rgba(26,42,59,0.68)] p-3 backdrop-blur-[5px] backdrop-saturate-150"
            href="/cart">
            <ProductCart />
          </Link>
          <Link
            href="login"
            className="rounded-xl bg-gradient-to-r from-[#283be5] to-[#0093FF] px-4 py-2 font-medium text-white">
            Try Thieve Free
          </Link>
        </div>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[rgba(26,42,59,0.68)] px-8 py-2 text-white backdrop-blur-[5px] backdrop-saturate-150 lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6 xl:gap-4">
          <li>
            <Link className="text-sm font-bold  hover:text-gray-500" href="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-sm font-bold  hover:text-gray-500"
              href="/products">
              Products
            </Link>
          </li>

          <li>
            <Link
              className="text-sm font-bold  hover:text-gray-500"
              href="about">
              About
            </Link>
          </li>

          <li>
            <Link className="text-sm font-bold  hover:text-gray-500" href="faq">
              FAQ
            </Link>
          </li>

          <li>
            <Link
              className="text-sm font-bold  hover:text-gray-500"
              href="contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <Link
            href="/cart"
            className="hidden rounded-xl bg-[rgba(26,42,59,0.68)] p-2 backdrop-blur-[5px] backdrop-saturate-150 lg:inline-block">
            <ProductCart />
          </Link>
          <Link
            className="hidden rounded-xl bg-gray-50 px-4 py-2 text-sm font-bold text-gray-900 transition duration-200 hover:bg-gray-100 lg:ml-auto lg:inline-block"
            href="/login">
            Sign In
          </Link>
          <Link
            className="hidden rounded-xl bg-blue-500 bg-gradient-to-r from-[#283be5] to-[#0093FF] px-4 py-2 text-sm font-bold text-white transition duration-200 hover:bg-blue-600 lg:inline-block"
            href="/login">
            Try Thieve Free
          </Link>
        </div>
      </nav> */}
      {/* <div
        className={'navbar-menu relative z-50 ' + (isOpen ? 'grid' : 'hidden')}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-neutral-700 px-6 py-6 text-white">
          <div className="mb-8 flex items-center">
            <Link className="mr-auto text-xl font-light tracking-wide" href="/">
              <PiTiktokLogoLight className="inline pr-1" size={26} />
              Find
            </Link>
            <div className="text-white">
              <button onClick={() => setIsOpen(false)} className="navbar-close">
                <GrClose />
              </button>
            </div>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600"
                  href="/">
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600"
                  href="/products">
                  Products
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600"
                  href="/about">
                  About
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600"
                  href="/faq">
                  FAQ
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block rounded p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600"
                  href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="mb-3 block rounded-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-loose hover:bg-gray-100"
                href="/login">
                Sign in
              </Link>
              <Link
                className="mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-blue-700"
                href="/login">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
}
