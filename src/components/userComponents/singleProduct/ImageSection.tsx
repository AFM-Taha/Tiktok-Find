
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  images: Array<string>;
};

const ImageSection = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="flex gap-5 justify-start items-start">
      {/* Small Images */}
      <div className="mt-10 ">
        {images.map((i, index) => {
          return (
            <div
              className={`mb-5 cursor-pointer ${
                i === selectedImage && 'ring-2 ring-blue-600 '
              }`}
              onClick={() => setSelectedImage(i)}
              key={index}>
              <Image src={i} alt="Product Image" height={100} width={100} />
            </div>
          );
        })}
      </div>
      {/* Large Image */}
      <div>
        <Image
          src={selectedImage}
          alt="Product Image"
          height={600}
          width={550}
        />
      </div>
    </div>
  );
};

export default ImageSection;
