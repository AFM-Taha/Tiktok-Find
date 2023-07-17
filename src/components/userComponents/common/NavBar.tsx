import { PiTiktokLogoLight } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between rounded-lg px-4 py-2 backdrop-blur-sm">
        <div className="flex  items-center gap-2">
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="navbar-burger flex items-center rounded-md bg-slate-100 bg-opacity-50 p-2">
              <AiOutlineMenu size={20} color="black" />
            </button>
          </div>
          <Link className="text-xl font-light tracking-wide" href="/">
            <PiTiktokLogoLight className="inline pr-1" size={26} />
            Find
          </Link>
        </div>
        <div className="lg:hidden">
          <Link
            href="login"
            className="rounded-xl bg-gradient-to-r from-[#283be5] to-[#0093FF] px-4 py-2 font-medium text-white">
            Try Thieve Free
          </Link>
        </div>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500"
              href="/">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <CiMenuKebab />
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Products
            </a>
          </li>
          <li className="text-gray-300">
            <CiMenuKebab />
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              About
            </a>
          </li>
          <li className="text-gray-300">
            <CiMenuKebab />
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              FAQ
            </a>
          </li>
          <li className="text-gray-300">
            <CiMenuKebab />
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Contact
            </a>
          </li>
        </ul>
        <Link
          className="hidden rounded-xl bg-gray-50 px-4 py-2 text-sm font-bold text-gray-900 transition duration-200 hover:bg-gray-100 lg:ml-auto lg:mr-3 lg:inline-block"
          href="/login">
          Sign In
        </Link>
        <Link
          className="hidden rounded-xl bg-blue-500 bg-gradient-to-r from-[#283be5] to-[#0093FF] px-4 py-2 text-sm font-bold text-white transition duration-200 hover:bg-blue-600 lg:inline-block"
          href="/login">
          Try Thieve Free
        </Link>
      </nav>
      <div
        className={'navbar-menu relative z-50 ' + (isOpen ? 'grid' : 'hidden')}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
          <div className="mb-8 flex items-center">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              LOGO
            </a>
            <button onClick={() => setIsOpen(false)} className="navbar-close">
              <GrClose />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  href="#">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  href="#">
                  Products
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  href="#">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                  href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="mb-3 block rounded-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold leading-loose hover:bg-gray-100"
                href="#">
                Sign in
              </a>
              <a
                className="mb-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-blue-700"
                href="#">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
