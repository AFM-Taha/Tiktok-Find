import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { FetchedProducts } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const { data, error, isLoading } = useGetData<FetchedProducts>(
    `${baseURL}/products`
  );
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <p className="py-32 text-center text-xl font-medium text-red-500">
        Something went wrong. Please try again.
      </p>
    );
  if (data?.status === 'success')
    return (
      <section className="min-h-[3000px] pb-[6.25rem] pt-8">
        <div className="py-20">
          <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5  lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
            {data?.data.result.map((item) => {
              return (
                <div
                  key={item._id}
                  className="even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
                  <Link href={`/products/single-products/${item._id}`}>
                    <div className="bg-transparent bg-opacity-0">
                      <Image
                        // layout="intrinsic"
                        priority
                        width={350}
                        height={350}
                        className="rounded-3xl bg-transparent bg-opacity-0"
                        alt={item.title}
                        src={item.item_imgs[0]?.url}
                      />
                    </div>
                    <div className="mt-2 flex justify-between gap-1 bg-transparent bg-opacity-0 px-2 text-white">
                      <div>
                        <h3 className="bg-transparent bg-opacity-0 font-semibold underline-offset-4 group-hover:underline">
                          {item.title.length > 23
                            ? item.title.slice(0, 23) + '...'
                            : item.title}
                        </h3>
                      </div>
                      <div className="flex gap-1">
                        <del className="">
                          <p className="font-medium">${item.orginal_price}</p>
                        </del>
                        <p className="font-medium">${item.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  return (
    <p className="my-32 px-8 text-center text-3xl text-red-500">
      Something went wrong. Please try again later.
    </p>
  );
}
