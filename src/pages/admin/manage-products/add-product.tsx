import axios from 'axios';
import { useState } from 'react';
import Spinner from '@/components/userComponents/common/Spinner';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { Product } from '@/types/products';

type UrlFormData = { url: string };

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

const AddProduct = () => {
  const [Loading, setLoading] = useState(false);
  // const [inputUrl, setInputUrl] = useState('');
  const [product, setProduct] = useState<Product>({} as Product);

  const makeId = (url: string) => {
    setLoading(true);
    const regex = /offer\/(\d+)\.html/;
    const match = url.match(regex);
    if (match && match[1]) {
      const id = match[1];
      get1688Product(id);
    }
  };

  async function get1688Product(id: number | string) {
    const apiUrl = `https://www.lovbuy.com/1688api/getproductinfo.php?key=d5227a4d75d4e397254e059c2b1bf982&item_id=${id}&lang=en`;
    try {
      const response = await axios.get(apiUrl);
      setProduct(response.data.productinfo);
      setLoading(false);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
      setLoading(false);
    }
  }

  // Form Hook for handling product details
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // console.log(product);

  // Form hook to handle url
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm<UrlFormData>();

  // URL submit handler
  const onUrlSubmit: SubmitHandler<UrlFormData> = (data) => {
    makeId(data.url);
  };

  // Function to handle product details form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const product_add_url =
      'https://tiktokfind-ecommerce-server.vercel.app/api/v1/products';
    try {
      const response = await axios.post(product_add_url, {
        title: data.title,
        item_imgs: product?.item_imgs,
        num_iid: product?.num_iid,
        price: data.price,
        pic_url: product?.pic_url,
        orginal_price: product.orginal_price,
        description: data.description,
        brand: product?.brand,
        item_size: product?.item_size,
        item_weight: product?.item_weight,
        props: product?.props,
        props_list: product?.props_list,
        skus: product?.skus,
        total_sold: product?.total_sold,
        video: product?.video,
        category: data.category,
      });

      // toast.success(response.data);
      console.log('Response:', response.data);
    } catch (error: any) {
      // console.error('Error submitting form:', error.message);
    }
  };

  if (Loading) return <Spinner />;

  const { pic_url, title }: any = product;

  // console.log(product);
  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl font-semibold">Manage Products</h2>
      {/* Url Section */}
      <div className="mt-20 flex justify-center">
        <form
          className="flex h-[150px] w-[800px] items-center justify-center rounded-3xl bg-gray-100 px-10 shadow-lg"
          onSubmit={handleSubmit2(onUrlSubmit)}>
          <input
            {...register2('url', {
              required: 'Please provide a valid URL',
              pattern: {
                value: /https:\/\/[^\/]+\/offer\/\d+\.html/,
                message:
                  'URL must start with https:// and end with .html (https://detail.1688.com/offer/<ID>.html)',
              },
            })}
            type="text"
            className="h-10 w-full rounded-xl border-2 border-blue-600 text-gray-800"
            placeholder="for example: https://detail.1688.com/offer/<ID>.html"
          />
          <button
            type="submit"
            // onClick={makeId}
            className="ml-1 rounded-xl border-2 border-red-800 px-8 py-1.5 font-medium text-red-800 duration-200 hover:bg-red-800 hover:text-gray-100">
            Click
          </button>
        </form>
      </div>
      {errors2.url && (
        <p className="mt-8 text-center font-semibold text-red-600 [word-spacing:5px]">
          {errors2.url.message}
        </p>
      )}
      {/* Product data Change section */}
      {title && (
        <section className="mx-auto mt-10 max-w-[1100px] rounded-xl bg-gray-100 p-10">
          <div className="flex justify-center  text-xs text-gray-950">
            <Image
              className="rounded-lg"
              src={pic_url}
              alt="Product  Image"
              height={150}
              width={150}
            />
          </div>
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
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>
            </div>

            <div className="group relative z-0 my-10 w-full">
              <textarea
                id="description"
                {...register('description', {
                  required: 'Description is required',
                })}
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
        </section>
      )}
    </div>
  );
};

export default AddProduct;
