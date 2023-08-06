import { singleProductsBC } from '@/breadcrumb/single-product';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import DetailSection from '@/components/userComponents/singleProduct/DetailSection';
import ImageSection from '@/components/userComponents/singleProduct/ImageSection';
import ProductDescription from '@/components/userComponents/singleProduct/ProductDescription';
import { useGetData } from '@/request/getData';
import { Product } from '@/types/products';
import { useRouter } from 'next/router';

const SingleProduct = () => {
  const router = useRouter();
  const productID = router.query['product-id'];
  const { data, error, isLoading } = useGetData<null | Product>(
    `https://tiktokfind-ecommerce-server.vercel.app/api/v1/products/${productID}`
  );
  const images: string[] = [
    '/fancyroom.webp',
    '/balllamp.webp',
    '/biketailled.webp',
    '/carts.webp',
  ];

  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus velit possimus, reiciendis recusandae libero dolorem ipsum hic facere animi sequi est corporis voluptate sunt quos deleniti. Modi, officiis dolorem. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus velit possimus, reiciendis recusandae libero dolorem ipsum hic facere animi sequi est corporis voluptate sunt quos deleniti. Modi, officiis dolorem. lorem';

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <Breadcrumb data={singleProductsBC} />
        <div className=" justify-between gap-20 md:flex">
          {/* left side */}
          <div className="md:w-1/2">
            {/* Img section  */}
            <ImageSection images={images} />

            {/* Description section */}
            <ProductDescription description={description} />
          </div>

          {/* Right side or detail section */}
          <div className="md:w-1/2">
            <DetailSection
              info={{
                _id: '5',
                name: 'this ia Product',
                price: 50,
                sale: 5,
                stock: 40,
                sku: 'j-50-lk',
                images: ['/balllamp.webp'],
                ratings: 5,
                shipping: 55,
                description: 'Hello, This is most powerful description ',
                seller: 'Akib Al Hasan',
                quantity: 12,
                ratingsCount: 5,
                category: 'new category',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
