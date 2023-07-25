import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { BiSolidCoupon } from 'react-icons/bi';
import { RiDeleteBin7Line } from 'react-icons/ri';
export default function Cart() {
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
              <li className="flex items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  src="/balllamp.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-white lg:text-lg xl:text-xl">
                    Basic Tee 6-Pack
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[14px] text-white text-opacity-50">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label
                      htmlFor="Line1Qty"
                      className="text-sm font-medium text-white">
                      Quantity
                    </label>

                    <input
                      type="number"
                      min="1"
                      id="Line1Qty"
                      className="ml-2 h-8 w-12 rounded border-gray-200 bg-gray-800 bg-opacity-50 p-0 text-center text-xs font-bold text-white [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-white transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <RiDeleteBin7Line />
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  src="/biketailled.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-white lg:text-lg xl:text-xl">
                    Basic Tee 6-Pack
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[14px] text-white text-opacity-50">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label
                      htmlFor="Line2Qty"
                      className="text-sm font-medium text-white">
                      Quantity
                    </label>

                    <input
                      type="number"
                      min="1"
                      id="Line2Qty"
                      className="ml-2 h-8 w-12 rounded border-gray-200 bg-gray-800 bg-opacity-50 p-0 text-center text-xs font-bold text-white [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-white transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <RiDeleteBin7Line />
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  src="/canemirror.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-white lg:text-lg xl:text-xl">
                    Basic Tee 6-Pack
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[14px] text-white text-opacity-50">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label
                      htmlFor="Line3Qty"
                      className="text-sm font-medium text-white">
                      Quantity
                    </label>

                    <input
                      type="number"
                      min="1"
                      id="Line3Qty"
                      className="ml-2 h-8 w-12 rounded border-gray-200 bg-gray-800 bg-opacity-50 p-0 text-center text-xs font-bold text-white [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-white transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <RiDeleteBin7Line />
                  </button>
                </div>
              </li>
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
