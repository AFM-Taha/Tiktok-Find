import React, { ChangeEvent, useState } from 'react';
import { AiFillLock, AiOutlineStar } from 'react-icons/ai';
import { BsBoxSeam, BsShieldLock, BsPinterest, BsHeart } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { FaTwitter } from 'react-icons/fa';
import Ratings from '../common/Ratings';

type InfoProps = {
  info: {
    _id: string;
    sku: string;
    name: string;
    price: number;
    stock: number;
    sale: number;
    ratings: number;
    shipping: number;
    seller: string;
    category: string;
    description: string;
    ratingsCount: number;
    quantity: number;
    images: [string];
  };
};

const DetailSection = ({ info }: InfoProps) => {
  const {
    _id,
    name,
    price,
    stock,
    images,
    ratings,
    description,
    seller,
    category,
    sale,
    sku,
    ratingsCount,
  } = info;

  // Color
  const colors = ['red', 'green', 'orange', 'blue'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  //   Size
  const sizes = ['sx', 'm', 'lg', '2xl'];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  //   cart count
  const [cartCount, setCartCount] = useState(1);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 1) {
      setCartCount(value);
    }
  };

  return (
    <div>
      <h1 className=" py-6 text-2xl uppercase text-gray-100">{name}</h1>

      <h2>
        <span className="text-xl font-semibold text-orange-500 ">
          $ {(price - (price * sale) / 100).toFixed(2)}
        </span>{' '}
        <span className="px-4 text-lg text-gray-400">
          {' '}
          <del>$ {price.toFixed(2)}</del>
        </span>
        <span className="bg-orange-500 px-2 py-0.5 text-xs text-gray-100">
          -{sale}%
        </span>
      </h2>

      {/*-------------------------------------------------------------------------------------- 
                                           Rating Section 
      ---------------------------------------------------------------------------------------*/}
      <div className="mb-8 mt-2 flex items-baseline gap-4">
        <Ratings ratings={ratings} />
        <span className="text-sm text-gray-300">{ratingsCount} reviews</span>
      </div>

      <div className="h-0.5 bg-gray-500"></div>

      {/* ------------------------------------------------------------------------------------
                              Add cart and buy now section 
      -------------------------------------------------------------------------------------*/}
      <div className="mt-8">
        {/* Color and Size Section*/}

        {/* Color */}
        <div className="mb-4">
          <h3 className="text-gray-200">Color:</h3>
          <div className="mt-2 flex gap-4">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`bg-${c}-600   h-6 w-8 ${
                  selectedColor === c && 'ring-4'
                } ring-gray-400`}></button>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-10">
          <h3 className="text-gray-200">Size:</h3>
          <div className="mt-2 flex gap-4">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={` border-2 px-2.5 py-0.5 uppercase text-gray-200 ${
                  selectedSize === s && ' border-red-600'
                } border-gray-600`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="items-center justify-between gap-5 md:flex">
          <div className="flex w-1/3  items-center justify-center border-2 border-gray-300   px-0.5 py-1.5 md:w-1/5">
            {/* Decrease BTN */}
            <button
              className="text-3xl text-gray-100"
              onClick={() => {
                if (cartCount > 1) {
                  setCartCount(cartCount - 1);
                }
              }}>
              -
            </button>
            <input
              onChange={handleInputChange}
              value={cartCount}
              className="w-full border-0 bg-[#17112C]  text-center text-red-500 font-semibold focus:outline-none focus:ring-0 disabled:border"
              type="text"
            />
            {/* Increase BTN */}
            <button
              className="text-3xl text-gray-100"
              onClick={() => setCartCount(cartCount + 1)}>
              +
            </button>
          </div>
          <button
            // onClick={addToCart}
            className="my-2 block w-full bg-orange-500 py-4 text-gray-100 duration-200 hover:bg-orange-400 md:w-2/5">
            Add to Cart
          </button>
          <button className="w-full bg-lime-600  py-4 duration-200 hover:bg-lime-400 md:w-2/5 ">
          Buy it now{' '}
        </button>
        </div>
        <button className="my-4 flex items-center justify-start gap-3 py-4 text-gray-200 duration-300 hover:text-orange-500">
          <BsHeart /> <span>Add to wishlist</span>
        </button>

        <p className="text-gray-200">Available Stock: {stock}</p>
      </div>

      {/* ---------------------------------------------------------------------------------------
                                        Some Extra 
      -----------------------------------------------------------------------------*/}

      <div className="my-8 h-0.5 bg-gray-500"></div>
      <div>
        <div className="flex">
          <h3 className="mr-4 text-gray-400">Vendor:</h3>
          <h3 className=" text-gray-100">{seller}</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-400">Type:</h3>
          <h3 className=" text-gray-100">{category}</h3>
        </div>
        <div className="flex">
          <h3 className="mr-4 text-gray-400">Sku:</h3>
          <h3 className=" text-gray-100">{sku}</h3>
        </div>
      </div>

      <div className="my-8 h-0.5 bg-gray-500"></div>

      <div className="text-gray-100">
        <div className="mb-2 flex items-center justify-start gap-4 ">
          <AiFillLock /> Secure payment
        </div>
        <div className="mb-2 flex items-center justify-start gap-4">
          {' '}
          <BsShieldLock /> 2 Year Warranty
        </div>
        <div className="mb-2 ">
          {' '}
          <span className="mr-3">🔥</span>
          30 sold in last 18 hours
        </div>
      </div>
      <div className="mb-2 mt-6 flex items-center justify-start gap-4 text-gray-100">
        {' '}
        <BsBoxSeam /> Spend ${(price + (price * 10) / 100).toFixed(2)} for Free
        Shipping
      </div>

      {/*------------------------------------------------------------------------------------
                                 Social share 
      ---------------------------------------------------------------------------------*/}
      <h2 className="mt-8 font-semibold text-gray-400">Share:</h2>
      <div className="mt-2 flex items-center gap-5 text-gray-100 md:gap-16">
        <button className="flex items-center gap-2">
          <CgFacebook /> Facebook
        </button>
        <button className="flex items-center gap-2">
          <FaTwitter /> Tweet
        </button>
        <button className="flex items-center gap-2">
          {' '}
          <BsPinterest /> Pin it
        </button>
      </div>
    </div>
  );
};

export default DetailSection;