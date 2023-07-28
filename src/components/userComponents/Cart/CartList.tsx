import {
  quantityDecreaseByOne,
  quantityIncreaseByOne,
  removeOne,
} from '@/redux/features/CartSlice';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

type Props = {
  data: {
    id: string;
    name: string;
    image: string;
    quantity: number;
  };
};

const CartList = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { id, name, image, quantity } = data;
  return (
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
          <h3 className="text-white lg:text-lg xl:text-xl ">{name}</h3>
          <dl className="mt-0.5 space-y-px text-[14px] text-white text-opacity-50">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">XXS</dd>
            </div>
            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline">White</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div>
          <div className="flex items-center gap-6">
            {/* <label
              htmlFor="Line1Qty"
              className="text-sm font-medium text-white">
              Quantity
            </label> */}
            <button
              onClick={() => dispatch(quantityIncreaseByOne(id))}
              className="p-1 text-xl font-semibold text-gray-100 duration-200 hover:text-red-500">
              +
            </button>
            <input
              disabled
              value={quantity}
              type="number"
              min="1"
              id="Line1Qty"
              className="h-6 w-10 rounded border-gray-200 bg-gray-800 bg-opacity-50 text-center text-xs font-bold text-white [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              onClick={() => dispatch(quantityDecreaseByOne(id))}
              className="p-1 text-xl font-semibold text-gray-100 duration-200 hover:text-red-500">
              -
            </button>
            <p className="text-center text-xs font-bold text-white">
              {quantity} <span className="font-semibold text-gray-500">x</span>{' '}
              ${45.99} = {(quantity * 45.99).toFixed(2)}
            </p>
          </div>
        </div>

        <button
          onClick={() => dispatch(removeOne(id))}
          className="p-4 text-white transition hover:text-red-600">
          <span className="sr-only">Remove item</span>
          <RiDeleteBin7Line />
        </button>
      </div>
    </li>
  );
};

export default CartList;
