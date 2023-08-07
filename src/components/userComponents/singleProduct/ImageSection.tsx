import { ItemImgs } from '@/types/products';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  itemImgs: ItemImgs[];
};

const ImageSection = ({ itemImgs }: Props) => {
  const [selectedImage, setSelectedImage] = useState(itemImgs[0]);
  return (
    <div className="flex items-start justify-start gap-5">
      {/* Small Images */}
      <div className="mt-10 ">
        {itemImgs.map((obj) => {
          return (
            <div
              className={`mb-5 cursor-pointer ${
                obj._id === selectedImage._id && 'ring-2 ring-blue-600 '
              }`}
              onClick={() => setSelectedImage(obj)}
              key={obj._id}>
              <Image
                src={obj.url}
                alt="Product Image"
                height={100}
                width={100}
              />
            </div>
          );
        })}
      </div>
      {/* Large Image */}
      <div>
        <Image
          src={selectedImage.url}
          alt="Product Image"
          height={600}
          width={550}
        />
      </div>
    </div>
  );
};

export default ImageSection;
