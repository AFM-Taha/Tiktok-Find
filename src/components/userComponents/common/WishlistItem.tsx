import { removeOne } from '@/redux/features/WishlistSlice';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

type Props = {
  data: {
    id: string;
    name: string;
    image: string;
  };
};

const WishListItem = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { id, name, image } = data;
  return (
    <li className="flex items-center gap-4">
      <Image
        height={100}
        width={100}
        src={image}
        alt={image}
        className="h-16 w-16 rounded object-cover"
      />

      <div>
        <h3 className="text-white md:text-xl">{name}</h3>

        {/* <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Size:</dt>
            <dd className="inline">XXS</dd>
          </div>

          <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">White</dd>
          </div>
        </dl> */}
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <button
          className="rounded-md p-1 duration-200 hover:bg-gray-400"
          onClick={() => dispatch(removeOne(id))}>
          <RiDeleteBin7Line color="red" size={22} />
          <span className="sr-only">Remove item</span>
        </button>
      </div>
    </li>
  );
};

export default WishListItem;
