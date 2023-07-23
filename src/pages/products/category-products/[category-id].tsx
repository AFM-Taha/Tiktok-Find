import { categoryProductsBC } from '@/breadcrumb/category-products';
import ProductsGridCard from '@/components/userComponents/cards/ProductsGridCard';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import React from 'react';

const CategoryProducts = () => {
  const p = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container mx-auto mb-28 py-20">
      <div>
        <Breadcrumb data={categoryProductsBC} />
        <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5 lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
          {p.map((i) => {
            return (
              <ProductsGridCard
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
