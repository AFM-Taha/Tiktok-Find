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
      <div className="mt-32 bg-[#282828] text-white lg:mt-64">
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
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Tools</h4>
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
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Niches</h4>
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
            <div className="flex flex-col">
              <h4 className="mb-2 font-medium">Info</h4>
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
    </footer>
  );
}
