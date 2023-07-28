import { FaChevronRight } from 'react-icons/fa';
import { BiSolidCoupon } from 'react-icons/bi';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import CartList from '@/components/userComponents/Cart/CartList';
export default function Cart() {
  //  cart Length
  const cart = useSelector((state: RootState) => state.carts.cart);
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-8 text-center">
            <h1 className="text-5xl font-black text-white sm:text-7xl">
              Your Cart
            </h1>
          </header>

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
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <BiSolidCoupon className="mr-1" />

                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-block rounded bg-blue-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-800">
                    Checkout
                    <FaChevronRight className="-mt-[2px] ml-1 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
