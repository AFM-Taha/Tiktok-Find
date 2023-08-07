import ProductTR from '@/components/adminComponents/manageProducts/ProductTR';
import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { FetchedProducts } from '@/types/products';
import Link from 'next/link';

const ProductManage = () => {
  const productGetURL = `${baseURL}/products`;

  // Product fetch
  const { data, isLoading, error, refetch } =
    useGetData<FetchedProducts>(productGetURL);

  // Error and Loading
  if (error) return;
  if (isLoading) return <Spinner />;

  console.log(data);
  if (data?.data)
    return (
      <div className="text-gray-100">
        <h2 className="mb-20 text-center text-3xl  font-semibold">
          Manage Product
        </h2>
        {/*Add Product*/}

        <Link
          href={'/admin/manage-products/add-product'}
          className="  rounded border-2 border-blue-600 px-5 py-1 font-semibold duration-300  hover:bg-gray-50 hover:text-blue-600">
          Add Product
        </Link>

        <h5 className="mt-4 text-lg ">
          {' '}
          Total Products : {data.data.totalProducts}
        </h5>

        <div className="relative  mt-2 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.result.map((product) => (
                <ProductTR
                  key={product._id}
                  product={product}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  return (
    <p className="text-center text-2xl font-semibold text-red-600">
      Something went wrong, please try again.
    </p>
  );
};

export default ProductManage;
