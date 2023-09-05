import { baseURL } from '@/components/assets/url';
import CartList from '@/components/userComponents/Cart/CartList';
import { RootState } from '@/redux/store';
import { useGetData } from '@/request/getData';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiLeftArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import auth from '../../firebase.init';
import OrderTR from '@/components/userComponents/OrderTR';

export default function Orders() {
  const subtotal = useSelector((state: RootState) => state.carts.totalPrice);
  const [user] = useAuthState(auth);

  const { data: allOrders, refetch } = useGetData<any>(`${baseURL}/orders`);
  const userEmail = user?.email;

  const orders = allOrders?.filter((o: any) => o.shipping.email === userEmail);

  console.log(orders);

  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
      <h1 className="mb-20 text-center text-4xl font-black text-white sm:text-7xl">
         Orders history
      </h1>
      <table className="mx-auto max-w-5xl">
        <tr className="text-lg font-bold text-white ">
          <th>Order Id</th>
          <th>Payment Status </th>
          <th>Price </th>
          <th> Status </th>
          <th> Details </th>
        </tr>
        {orders?.length > 0 ? (
          <>
            {orders?.map((o: any) => {
              return <OrderTR refetch={refetch} order={o} key={o.id} />;
            })}
          </>
        ) : (
          <div className=" text-gray-100">
            <h2 className="mt-20 text-center text-7xl">Sorry!!</h2>
            <h3 className="mt-3 text-center text-lg font-semibold text-gray-400">
              You Don&apos;t Have Any Order Yet
            </h3>
            <Link
              href={'/'}
              className="mt-20 flex items-center justify-center gap-5 p-5 text-center duration-300 hover:-translate-x-4 hover:text-blue-500">
              <BiLeftArrow />
              Go Shopping
            </Link>
          </div>
        )}
      </table>
    </section>
  );
}
