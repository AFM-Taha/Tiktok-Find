import OrderTR from '@/components/adminComponents/manageOrders/OrderTR';
import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { FetchedProducts } from '@/types/products';

const OrderManage = () => {
  const productGetURL = `${baseURL}/orders`;

  // Product fetch
  const { data, isLoading, error, refetch } =
    useGetData<FetchedProducts|any>(productGetURL);

  // Error and Loading
  if (error) return;
  if (isLoading) return <Spinner />;

  console.log(data);
  if (data)
    return (
      <div className="text-gray-100">
        <h2 className="mb-20 text-center text-3xl  font-semibold">
          Manage Orders
        </h2>
        

        <h5 className="mt-4 text-lg ">
          {' '}
          Total Products : 
          {/* {data.data.totalProducts} */}
        </h5>

        <div className="relative  mt-2 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
Delivery Status                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((o:any,i:number) => (
                
                <OrderTR
                  key={i}
                  order={o}
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

export default OrderManage;
