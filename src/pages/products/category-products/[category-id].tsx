import { categoryProductsBC } from '@/breadcrumb/category-products';
import ProductsGridHomeCard from '@/components/userComponents/cards/ProductsGridHomeCard';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import React from 'react';

const CategoryProducts = () => {
  const p = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-20 mb-28 container mx-auto">
      <div>
        <Breadcrumb data={categoryProductsBC} />
        <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5 lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
          {p.map((i) => {
            return (
              <ProductsGridHomeCard
                key={i}
                basePrice={15.99}
                currentPrice={9.89}
                imgsrc="/fancyroom.webp"
                alttext="fancy room corner lamp"
                title="Room Corner Lamp"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
