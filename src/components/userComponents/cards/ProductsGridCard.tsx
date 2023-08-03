import ProductsGridCardProps from '@/types/products';
import Image from 'next/image';

export default function ProductsGridCard({
  imgsrc,
  title,
  alttext,
  basePrice,
  currentPrice,
}: ProductsGridCardProps) {
  return (
    <div className="group rounded-3xl bg-white shadow-xl">
      <div className="">
        <Image
          // layout="intrinsic"
          priority
          width={350}
          height={350}
          className="rounded-t-3xl"
          alt={alttext}
          src={imgsrc}
        />
      </div>
      <div className="mt-2 flex flex-col justify-between px-4 pb-2 sm:flex-row">
        <div>
          <h3 className=" font-semibold underline-offset-4 group-hover:underline">
            {title}
          </h3>
        </div>
        <div className="flex gap-1">
          <del className="text-neutral-500">
            <p className="">${basePrice}</p>
          </del>
          <p className="font-medium">${currentPrice}</p>
        </div>
      </div>
    </div>
  );
}
