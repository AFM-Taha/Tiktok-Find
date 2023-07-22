import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem } from '@/types/products';

const Breadcrumb: React.FC<{ data: BreadcrumbItem[] }> = ({ data }) => {
  return (
    <div className="mb-10 mt-8 flex gap-1">
      {data.map((b) => {
        return (
          <div key={b.id}>
            <Link className="text-sm hover:underline" href={b.url}>
              {b.name}
            </Link>{' '}
            /
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
