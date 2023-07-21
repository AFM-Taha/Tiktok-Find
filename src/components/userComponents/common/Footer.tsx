import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#282828] text-white">
        <div className="flex flex-col justify-between p-8 lg:flex-row">
          <div>
            <div>
              <p className="text-lg font-bold leading-tight">
                Discover on trend dropship products & ultimate tools.
              </p>
              <p className="text-sm">Trusted by over 400,000 members.</p>
              <Link href="/login">
                <button className="mb-8 mt-10 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#283BE5] to-[#0094FF] px-6 py-3 font-medium">
                  Try Thieve Free
                  <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className="mb-8 flex gap-5">
              <a title="Instagram" href="https://www.instagram.com/">
                <FaInstagram size={24} />
              </a>
              <a title="TikTok" href="https://www.tiktok.com/en/">
                <FaTiktok size={24} />
              </a>
              <a title="Facebook" href="https://www.facebook.com/">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Products</h4>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                All Products
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Homeware
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Electronics
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Outdoors
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Men&apos;s
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Women&apos;s
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Kids
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Music
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Sports
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Stationary
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Photography
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Toys
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Pets
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Travels
              </Link>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Tools</h4>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                All Tools
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Thieve AliExpress Extension
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                AliExpress Image Search
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Find AliExpress Suppliers
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Edit AliExpress Images
              </Link>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Niches</h4>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                All Niches
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Fall Trend - Dorm Decor
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Wireless Charge Pads
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Content Creator
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Yoga and Wellness
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Zoom Flex
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Phone Photography
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Work From Home
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Gaming
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Montessori Toys
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Cooking & Baking
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Plants & Garden
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                DIY Learning Projects
              </Link>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Info</h4>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                About
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Blog
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Affiliate
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Terms & Condition
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Privacy Policy
              </Link>
              <Link
                className="text-[0.75rem] text-white/50 transition lg:hover:opacity-80"
                href="/products">
                Content License
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
