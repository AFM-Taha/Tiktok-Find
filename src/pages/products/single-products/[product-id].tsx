import { singleProductsBC } from '@/breadcrumb/single-product';
import Breadcrumb from '@/components/userComponents/common/Breadcrumb';
import React from 'react';


const SingleProduct = () => {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb data={singleProductsBC} />
          <div className=" justify-between gap-32 md:flex">
            {/* left side */}
            <div className="md:w-1/2">
              {/* Img section  */}
              {/* <ImageSection images={images} /> */}

              {/* Description section */}
              {/* <ProductDescription description={description} /> */}
            </div>

            {/* Right side or detail section */}
            {/* <div className="md:w-1/2">
              <DetailSection
                info={{
                  _id,
                  name,
                  price,
                  sale,
                  stock,
                  sku,
                  images,
                  ratings,
                  shipping,
                  description,
                  seller,
                  quantity,
                  ratingsCount,
                  category,
                }}
              />
            </div> */}
          </div>
      </div>
    </div>
  );
};

export default SingleProduct;
