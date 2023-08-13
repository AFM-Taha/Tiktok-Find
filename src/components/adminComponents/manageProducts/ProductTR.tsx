import { baseURL } from '@/components/assets/url';
import { remove } from '@/request/delete';
import { patch } from '@/request/patch';
import { Product } from '@/types/products';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

type FormData = {
  title: string;
  category: string;
  price: string;
  description: string;
  item_imgs: string;
  num_iid: string;
  pic_url: string;
  orginal_price: string;
  brand: 'string';
  item_size: string;
  item_weight: 'string';
  props: any;
  props_list: any;
  skus: string;
  total_sold: any;
  video: 'string';
};

const ProductTR = ({
  product,
  refetch,
}: {
  product: Product;
  refetch: any;
}) => {
  const [editRow, setEditRow] = useState(false);

  const { price, title, category, item_imgs, _id, description } = product;

  // Delete && Edit URL
  const deleteURL = `${baseURL}/products/${_id}`;
  const editURL = `${baseURL}/products/${_id}`;

  // __________Edit Product___________________
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    patch(editURL, data, refetch, setEditRow(false));
  };

  return (
    <>
      <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="whitespace-nowrap px-6 py-2 font-medium text-gray-900 dark:text-white">
          <div className="flex gap-4">
            {item_imgs.slice(0, 3).map((img, i) => {
              return (
                <div className="h-16 w-14" key={i}>
                  <Image
                    className="h-full w-full rounded-md object-cover"
                    src={img.url}
                    alt="Product Image"
                    height={50}
                    width={50}
                  />
                </div>
              );
            })}
          </div>
        </th>
        <td className="px-6 py-4 ">
          {title?.length > 30 ? title.slice(0, 30) + ' ...' : title}{' '}
        </td>
        <td className="px-6 py-4">{category ? category : 'N/A'}</td>
        <td className="px-6 py-4">$ {price}</td>
        <td className="px-6 py-4 text-right">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => setEditRow(!editRow)}
              className="rounded-md p-1 text-2xl duration-300 hover:bg-green-600 hover:text-gray-50 ">
              <BiEdit />
            </button>
            <button
              className="rounded-md p-1 text-2xl duration-300 hover:bg-red-600 hover:text-gray-50 "
              onClick={() => remove(deleteURL, refetch)}>
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
      {editRow && (
        <tr>
          <td colSpan={5}>
            <section className=" mx-2  bg-gray-100 p-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="group relative z-0  mt-10 w-full">
                  <input
                    defaultValue={title}
                    type="text"
                    id="title"
                    {...register('title', {
                      required: 'Title Name is required',
                    })}
                    className="peer  block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="title"
                    className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                    Product Title/ Name{' '}
                  </label>
                  {errors.title && (
                    <span className="text-red-500">{errors.title.message}</span>
                  )}
                </div>
                <div className=" mt-10 gap-5 md:flex">
                  <div className="group relative z-0  w-1/2">
                    <input
                      type="text"
                      id="category"
                      {...register('category', {
                        required: 'Category Name is required',
                      })}
                      defaultValue={category}
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                    />
                    <label
                      htmlFor="category"
                      className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                      Category Name
                    </label>
                    {errors.category && (
                      <span className="text-red-500">
                        {errors.category.message}
                      </span>
                    )}
                  </div>
                  <div className="group relative z-0  w-1/2">
                    <input
                      defaultValue={price}
                      type="text"
                      id="price"
                      {...register('price', {
                        required: 'Price is required',
                        pattern: {
                          value: /^[0-9]+(\.[0-9]{1,2})?$/,
                          message: 'Invalid price format',
                        },
                      })}
                      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                      placeholder=" "
                    />
                    <label
                      htmlFor="price"
                      className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                      Price
                    </label>
                    {errors.price && (
                      <span className="text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="group relative z-0 my-10 w-full">
                  <textarea
                    id="description"
                    {...register('description', {
                      required: 'Description is required',
                    })}
                    defaultValue={description}
                    className="peer block h-20 w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                  />
                  <label
                    htmlFor="description"
                    className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                    Product Description
                  </label>
                  {errors.description && (
                    <span className="text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
                  Save
                </button>
              </form>
            </section>{' '}
          </td>
        </tr>
      )}
    </>
  );
};

export default ProductTR;
