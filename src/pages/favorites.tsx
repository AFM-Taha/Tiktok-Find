import WishListItem from '@/components/userComponents/common/WishlistItem';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { BiLeftArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';

export default function Favorites() {
  const wishlist = useSelector((state: RootState) => state.wishlists.wishlist);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="font-bold text-white sm:text-3xl lg:text-7xl">
              Your Favorites
            </h1>
          </header>

          {wishlist.length > 0 ? (
            <div className="mt-8">
              <ul className="space-y-4">
                {wishlist.map((w) => {
                  return <WishListItem data={w} key={w.id} />;
                })}
              </ul>
            </div>
          ) : (
            <div className=" text-gray-100">
              <h2 className="mt-20 text-center text-7xl">Sorry!!</h2>
              <h3 className="mt-3 text-center text-lg font-semibold text-gray-400">
                Your Wishlist is Empty
              </h3>
              <Link
                href={'/'}
                className="mt-20 flex items-center justify-center gap-5 p-5 text-center duration-300 hover:-translate-x-4 hover:text-blue-500">
                <BiLeftArrow />
                Go Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
