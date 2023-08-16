import { categoryProductsBC } from '@/breadcrumb/category-products';
import { baseURL } from '@/components/assets/url';
import ProductsGridCard from '@/components/userComponents/cards/ProductsGridCard';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { Product } from '@/types/products';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoryProducts = () => {
  // Category Name
  const { query } = useRouter();
  const categoryName: any = query.categoryName;

  // Product Fetch & Loading
  const url = `${baseURL}/products`;
  const { data, isLoading }: any = useGetData(url);

  if (isLoading) return <Spinner />;
  const allProducts = data.data.result;

  // Filtering
  const products = allProducts.filter(
    (p: Product) =>
      p.category?.toLocaleLowerCase() === categoryName?.toLocaleLowerCase()
  );

  return (
    <div className="container mx-auto mb-28 py-20">
      <div>
        <Breadcrumb
          data={[
            ...categoryProductsBC,
            {
              id: 3,
              name: categoryName,
              url: '#',
            },
          ]}
        />
        <section className="mt-8 min-h-[3000px] pb-[6.25rem]">
          <div className="py-20">
            <div className="mx-auto grid max-w-[71.25rem] grid-cols-2 gap-3 bg-transparent bg-opacity-0 px-3 md:grid-cols-3 md:gap-5 md:px-5  lg:gap-8 xl:max-w-[93.75rem] xl:grid-cols-4">
              {products.map((p: Product) => {
                const { _id, title, orginal_price, price, item_imgs } = p;

                return (
                  <div
                    key={p._id}
                    className="even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
                    <Link
                      className="md:even:translate-y-8"
                      href={`/products/single-products/${_id}`}>
                      <ProductsGridCard
                        basePrice={Number(orginal_price)}
                        currentPrice={Number(price)}
                        imgsrc={item_imgs[0].url}
                        alttext="fancy room corner lamp"
                        title={title}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryProducts;
