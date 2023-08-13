import { remove } from '@/request/delete';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { patch } from '@/request/patch';
import { baseURL } from '@/components/assets/url';
import Image from 'next/image';

const OrderTR = ({ order, refetch }: { order: any; refetch: any }) => {
  const [detail, setDetail] = useState(false);

  const { _id, delivery_status, payment_status, total, products } = order;

  const [status, setStatus] = useState<string>(delivery_status);

  //  __________Order Status Change And Delete_____________  //

  const deleteURL = `${baseURL}/orders/${_id}`;
  const editURL = `${baseURL}/orders/${_id}`;
  const handleDeliveryStatus = (e: string) => {
    setStatus(e);
    patch(editURL, { delivery_status: e }, refetch);
  };

  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <td className="px-6 py-4 ">{_id} </td>
        <td className="px-6 py-4 ">{payment_status} </td>
        <td className="px-6 py-4">$ {total}</td>
        <td className="px-6 py-4">
          <select
            onChange={(e) => handleDeliveryStatus(e.target.value)}
            className=" cursor-pointer"
            name=""
            id=""
            value={status}>
            <option value="pending">Pending</option>
            <option value="on_the_way">On The Way</option>
            <option value="delivered">Delivered</option>
          </select>
        </td>
        <td className="px-6 py-4 text-right">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => setDetail(!detail)}
              className="rounded-md p-1 text-2xl duration-300 hover:bg-green-600 hover:text-gray-50 ">
              <AiOutlineEye />
            </button>
            <button
              className="rounded-md p-1 text-2xl duration-300 hover:bg-red-600 hover:text-gray-50 "
              onClick={() => remove(deleteURL, refetch)}>
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
      {detail && (
        <tr>
          <td colSpan={5}>
            <section className=" mx-2  bg-gray-100 p-10">
              {products.map((p: any) => {
                const { image, name, quantity, specification,size,color } = p;
                return (
                  <ul
                    className={`${
                      products.length > 1 ? 'mb-2' : ''
                    } rounded-md border-2 border-dashed border-blue-600  p-4`}
                    key={p._id}>
                    
                      <li className="flex w-full flex-col items-start sm:flex-row sm:items-center sm:gap-4">
                        <div className="flex items-center gap-4">
                          <Image
                            width={100}
                            height={100}
                            src={image}
                            alt=""
                            className="h-16 w-16 rounded object-cover"
                          />
                          <div>
                            <h3 className=" lg:text-lg xl:text-xl ">
                             Title/Name: {name}
                            </h3>
                            <dl className="mt-0.5 space-y-px text-[14px] text-opacity-50">
                              {size?.length > 1 && (
                                <div>
                                  <dt className="inline">Size:</dt>
                                  <dd className="inline"> {size}</dd>
                                </div>
                              )}
                              {color?.length > 1 && (
                                <div>
                                  <dt className="inline">Color:</dt>
                                  <dd className="inline capitalize">
                                    {' '}
                                    {color}
                                  </dd>
                                </div>
                              )}
                              {specification?.length > 1 && (
                                <div>
                                  <dt className="inline">Specification:</dt>
                                  <dd className="inline capitalize">
                                    {' '}
                                    {specification}
                                  </dd>
                                </div>
                              )}
                            </dl>
                            <p className='mt-1'>
                              Quantity: {quantity}
                            </p>
                          </div>
                        </div>

                      </li>
                    
                  </ul>
                );
              })}
            </section>
          </td>
        </tr>
      )}
    </>
  );
};

export default OrderTR;
