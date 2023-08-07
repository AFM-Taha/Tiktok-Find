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
        {/* Check if images are more than 6 or not */}
        {itemImgs.length > 6
          ? itemImgs.slice(6).map((obj) => {
              // if more than 6 images are fetched, then slice them to 6
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
                    height={60}
                    width={60}
                  />
                </div>
              );
            })
          : // If only 6 images are fetcthed then do nothing
            itemImgs.map((obj) => {
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
                    height={60}
                    width={60}
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
