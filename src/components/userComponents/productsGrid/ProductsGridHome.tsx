import Link from 'next/link';
import ProductsGridCard from '../cards/ProductsGridCard';
import { products } from '@/components/assets/productsData';

export default function ProductsGridHome() {
  return (
    <div className=" py-20">
      <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5 lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
            <Link href={`/products/category-products/${product.id}`}>
              <ProductsGridCard
                basePrice={product?.basePrice}
                currentPrice={product?.currentPrice}
                imgsrc={product?.imgsrc}
                alttext={product?.alttext}
                title={product?.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
