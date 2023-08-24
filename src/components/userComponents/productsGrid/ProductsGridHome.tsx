import Link from 'next/link';
import ProductsGridCard from '../cards/ProductsGridCard';
import Spinner from '../common/Spinner';
import { baseURL } from '@/components/assets/url';
import { useGetData } from '@/request/getData';
import { FetchedProducts, Product } from '@/types/products';
import { useSearchContext } from '@/contexts/SearchContext';
import { useEffect, useState } from 'react';
// import { products } from '@/components/assets/productsData';

export default function ProductsGridHome() {
  const [visibleProducts, setVisibleProducts] = useState<
    Product[] | undefined
  >();
  const { search } = useSearchContext();
  const { data, error, isLoading } = useGetData<FetchedProducts>(
    `${baseURL}/products`
  );

  const batchSize = 28;
  const allProducts = data?.data.result;

  useEffect(() => {
    if (allProducts) {
      setVisibleProducts([...allProducts.slice(0, batchSize)]);
    }
  }, [allProducts]);

  const handleLoadMore = () => {
    let currentVisibleCount;
    if (visibleProducts) currentVisibleCount = visibleProducts.length;
    let nextBatchEndIndex;
    if (currentVisibleCount)
      nextBatchEndIndex = currentVisibleCount + batchSize;
    let nextBatch;
    if (allProducts)
      nextBatch = allProducts.slice(currentVisibleCount, nextBatchEndIndex);

    if (nextBatch && visibleProducts && nextBatch.length > 0) {
      setVisibleProducts([...visibleProducts, ...nextBatch]);
    }
  };

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <p className="my-32 text-center text-xl font-medium text-red-500">
        Something went wrong. Please try again.
      </p>
    );
  if (data?.status === 'success' && search)
    return (
      <div className="py-20">
        <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5  lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
          {data?.data.result
            .filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <div
                key={product._id}
                className="even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
                <Link href={'/products/category-products/' + product.category}>
                  <ProductsGridCard
                    basePrice={Number(product.orginal_price)}
                    currentPrice={Number(product?.price)}
                    imgsrc={product.item_imgs[0]?.url}
                    alttext={product?.title}
                    title={product?.title}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    );

  if (visibleProducts)
    return (
      <div className="py-20">
        <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5  lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <div
              key={product._id}
              className="even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
              <Link href={'/products/category-products/' + product.category}>
                <ProductsGridCard
                  basePrice={Number(product.orginal_price)}
                  currentPrice={Number(product?.price)}
                  imgsrc={product.item_imgs[0]?.url}
                  alttext={product?.title}
                  title={product?.title}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={handleLoadMore}
          className="mx-auto mt-36 block rounded-xl bg-gray-700 p-2 px-4 text-lg font-bold text-white">
          See more
        </button>
      </div>
    );
  return (
    <p className="my-32 px-8 text-center text-3xl text-red-500">
      Something went wrong. Please try again later.
    </p>
  );
}
