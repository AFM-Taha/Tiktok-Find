import CartList from '@/components/userComponents/Cart/CartList';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { BiLeftArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';

export default function Orders() {
  const cart = useSelector((state: RootState) => state.carts.cart);
  const subtotal = useSelector((state: RootState) => state.carts.totalPrice);
  return (
    <section>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-8 text-center">
            <h1 className="text-5xl font-black text-white sm:text-7xl">
              Your Orders
            </h1>
          </header>
          <div className="hidden justify-evenly gap-80 text-lg font-bold text-white sm:flex">
            <h3>Product</h3>
            <div className="flex justify-evenly gap-8">
              <h3>Quantity</h3>
              <h3>Sum of Products</h3>
            </div>
          </div>
          {cart.length > 0 ? (
            <div className="mt-8">
              <ul className="space-y-4">
                {cart.map((c) => {
                  return <CartList data={c} key={c.id} />;
                })}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-white">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£ {subtotal}</dd>
                    </div>

                    {/* <div className="flex justify-between">
                  <dt>VAT</dt>
                  <dd>£25</dd>
                </div> */}

                    <div className="flex justify-between">
                      <dt>Delivery charges</dt>
                      <dd>£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£ {subtotal + 20}</dd>
                    </div>
                  </dl>

                  {/* <div className="flex justify-end">
                <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                  <BiSolidCoupon className="mr-1" />

                  <p className="whitespace-nowrap text-xs">
                    2 Discounts Applied
                  </p>
                </span>
              </div> */}
                </div>
              </div>
            </div>
          ) : (
            <div className=" text-gray-100">
              <h2 className="mt-20 text-center text-7xl">Sorry!!</h2>
              <h3 className="mt-3 text-center text-lg font-semibold text-gray-400">
                You Don&apos;t Have Any Order Yet
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
