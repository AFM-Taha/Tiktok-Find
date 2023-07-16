import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-64 bg-[#282828] text-white">
      <div className="flex justify-between p-8">
        <div>
          <p className="text-lg font-bold leading-tight">
            Discover on trend dropship products & ultimate tools.
          </p>
          <p className="text-sm">Trusted by over 400,000 members.</p>
          <Link href="/login">
            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#283BE5] to-[#0094FF] px-6 py-3 font-medium">
              Try Thieve Free
              <FaFacebook />
            </button>
          </Link>
          <div className="flex gap-5">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTiktok />
            </a>
            <a href="">
              {/* Facebook icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11.0672C22 4.95496 17.0751 0 11 0C4.92486 0 0 4.95496 0 11.0672C0 16.5911 4.02252 21.1697 9.28125 22V14.2663H6.48828V11.0672H9.28125V8.62898C9.28125 5.85525 10.9235 4.32313 13.4361 4.32313C14.6392 4.32313 15.8984 4.53929 15.8984 4.53929V7.26287H14.5114C13.145 7.26287 12.7188 8.11604 12.7188 8.99212V11.0672H15.7695L15.2818 14.2663H12.7188V22C17.9775 21.1697 22 16.5911 22 11.0672Z"
                  fill="white"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h6>Products</h6>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              All Products
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Homeware
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Electronics
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Outdoors
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Men&apos;s
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Women&apos;s
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Kids
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Music
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Sports
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Stationary
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Photography
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Toys
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Pets
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Travels
            </a>
          </div>
          <div>
            <h6>Tools</h6>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              All Tools
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Thieve AliExpress Extension
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              AliExpress Image Search
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Find AliExpress Suppliers
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Edit AliExpress Images
            </a>
          </div>
          <div>
            <h6>Niches</h6>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              All Niches
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Fall Trend - Dorm Decor
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Wireless Charge Pads
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Content Creator
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Yoga and Wellness
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Zoom Flex
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Phone Photography
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Work From Home
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Gaming
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Montessori Toys
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Cooking & Baking
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Plants & Garden
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              DIY Learning Projects
            </a>
          </div>
          <div>
            <h6>Info</h6>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              About
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Blog
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Affiliate
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Terms & Condition
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Privacy Policy
            </a>
            <a
              className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
              href="/products">
              Content License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
