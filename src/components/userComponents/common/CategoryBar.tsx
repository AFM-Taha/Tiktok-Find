import { baseURL } from '@/components/assets/url';
import { useGetData } from '@/request/getData';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Spinner from './Spinner';

import Link from 'next/link';

export default function CategoryBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 500;
  };
  const handleSlideRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 500;
  };

  const url = `${baseURL}/products`;
  const { data, isLoading }: any = useGetData(url);

  if (isLoading) return <Spinner />;

  const products = data.data.result;

  const uniqueCategories: string[] = [
    ...new Set(products.map((item) => item.category)),
  ];

  return (
    <div className="mt-16 flex justify-center lg:mx-36">
      <div className="hidden md:inline-block">
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideLeft}>
          <FaChevronLeft size={20} color="white" />
        </button>
      </div>
      <div
        ref={containerRef}
        className="category-scrollbar flex gap-2 overflow-x-scroll scroll-smooth px-2 pb-2 text-center text-white md:gap-4 lg:gap-8">
        {uniqueCategories.map((c, i) => {
          return (
            <Link
              href={'/products/category-products/'+c}
              key={i}
              className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium capitalize">
              {c}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:inline-block">
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideRight}>
          <FaChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}
