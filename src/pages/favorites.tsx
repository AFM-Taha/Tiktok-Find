import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';

export default function Favorites() {
  return (
    <section className="my-32">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="font-bold text-white sm:text-3xl lg:text-7xl">
              Your Favorites
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  height={100}
                  width={100}
                  src="/balllamp.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-white">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
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
                  <button className="text-gray-600 transition hover:text-red-600">
                    <BsHeartFill color="red" />
                    <span className="sr-only">Remove item</span>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  height={100}
                  width={100}
                  src="/balllamp.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-white">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
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
                  <button className="text-gray-600 transition hover:text-red-600">
                    <BsHeartFill color="red" />
                    <span className="sr-only">Remove item</span>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  height={100}
                  width={100}
                  src="/balllamp.webp"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-white">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
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
                  <button className="text-gray-600 transition hover:text-red-600">
                    <BsHeartFill color="red" />
                    <span className="sr-only">Remove item</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
