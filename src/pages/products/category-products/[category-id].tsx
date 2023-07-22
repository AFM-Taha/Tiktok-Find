import { categoryProductsBC } from '@/breadcrumb/category-products';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import Image from 'next/image';
import React from 'react';

type Props = {};

const CategoryProducts = (props: Props) => {
  const p = [1, 2, 3, 4, 5, 6, 7, 8,];
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb data={categoryProductsBC} />
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {p.map((i) => {
            return (
              <div key={i} className="bg-transparent bg-opacity-0 h-[300px] ">
                <Image
                  // layout="intrinsic"
                  width={350}
                  height={350}
                  className="rounded-3xl bg-transparent bg-opacity-0 h-full object-cover"
                  alt={'alttext'}
                  src={
                    'https://img.freepik.com/free-photo/moon_181624-19708.jpg?w=996&t=st=1690040868~exp=1690041468~hmac=ba99ac0ff8c05f6496ca8ca84e2595df371f0e4d3288773ee26c36304dbc9c58'
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
