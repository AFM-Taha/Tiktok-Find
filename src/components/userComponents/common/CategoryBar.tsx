import { baseURL } from '@/components/assets/url';
import { useGetData } from '@/request/getData';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Spinner from './Spinner';

import Link from 'next/link';
import { Product } from '@/types/products';

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
    ...new Set(products?.map((item:Product) => item.category)) as any
  ];

  function mergeDuplicateCategories(categories: string[]): string[] {
    // Create an object to store the merged categories
    const mergedCategories: { [key: string]: boolean } = {};
  
    // Create an array to hold the merged category names
    const mergedCategoryNames: string[] = [];
  
    // Loop through each category in the input array
    categories.forEach((category) => {
      // Normalize the category name by trimming and converting to lowercase
      const normalizedCategory = category.trim().toLowerCase();
  
      // Check if the category name already exists in the mergedCategories object
      if (!mergedCategories[normalizedCategory]) {
        // If it doesn't exist, add it to the mergedCategories object and the result array
        mergedCategories[normalizedCategory] = true;
        mergedCategoryNames.push(category);
      }
    });
  
    return mergedCategoryNames;
  }

  const mergedCategories = mergeDuplicateCategories(uniqueCategories);

  return (
    <div className="mx-auto mt-16 flex max-w-[71.25rem] justify-center xl:max-w-[93.75rem] ">
      <div className="hidden md:inline-block">
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideLeft}>
          <FaChevronLeft size={20} color="white" />
        </button>
      </div>
      <div
        ref={containerRef}
        className="category-scrollbar flex gap-2 overflow-x-scroll scroll-smooth px-2 pb-2 text-center text-white md:gap-4 ">
        {mergedCategories?.map((c, i) => {
          return (
            <Link
              href={'/products/category-products/' + c}
              key={i}
              className="whitespace-nowrap rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium capitalize ">
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
