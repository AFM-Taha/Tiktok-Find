import { singleProductsBC } from '@/breadcrumb/single-product';
import { baseURL } from '@/components/assets/url';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import Spinner from '@/components/userComponents/common/Spinner';
import DetailSection from '@/components/userComponents/singleProduct/DetailSection';
import ImageSection from '@/components/userComponents/singleProduct/ImageSection';
import ProductDescription from '@/components/userComponents/singleProduct/ProductDescription';
import { useGetData } from '@/request/getData';
import { Product } from '@/types/products';
import { useRouter } from 'next/router';

const SingleProduct = () => {
  const router = useRouter();
  const productID = router.query['product-id'];
  const { data, error, isLoading } = useGetData<Product>(
    `${baseURL}/products/${productID}`
  );
  if (error)
    return (
      <div className="text-center text-red-500">{JSON.stringify(error)}</div>
    );
  if (isLoading) return <Spinner />;
  if (data)
    return (
      <div className="py-20">
        <div className="container mx-auto">
          <Breadcrumb data={singleProductsBC} />
          <div className=" justify-between gap-20 md:flex">
            {/* left side */}
            <div className="md:w-1/2">
              {/* Img section  */}
              <ImageSection itemImgs={data.item_imgs} />

              {/* Description section */}
              <ProductDescription description={data.description} />
            </div>

            {/* Right side or detail section */}
            <div className="md:w-1/2">
              <DetailSection
                info={{
                  _id: data._id,
                  name: data.title,
                  price: data.price,
                  sale: data.total_sold,
                  stock: data.skus.sku.length,
                  sku: data.skus.sku[0].sku_id,
                  images: ['/balllamp.webp'],
                  // ratings: 5,
                  shipping: 55,
                  description: data.description,
                  seller: '',
                  ratingsCount: 5,
                  category: data.category,
                  props_list: data.props_list,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  return <p>Something went wrong, try again later.</p>;
};

export default SingleProduct;
