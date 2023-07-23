import ProductsGridHomeCardProps from '@/types/products';
import Image from 'next/image';

export default function ProductsGridHomeCard({
  imgsrc,
  title,
  alttext,
  basePrice,
  currentPrice,
}: ProductsGridHomeCardProps) {
  return (
    <div className="group bg-transparent bg-opacity-0 even:translate-y-6 hover:rounded-3xl md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
      <a href="#">
        <div className="bg-transparent bg-opacity-0">
          <Image
            // layout="intrinsic"
            priority
            width={350}
            height={350}
            className="rounded-3xl bg-transparent bg-opacity-0"
            alt={alttext}
            src={imgsrc}
          />
        </div>
        <div className="mt-2 flex justify-between bg-transparent bg-opacity-0 px-2 text-white">
          <div>
            <h3 className="bg-transparent bg-opacity-0 font-semibold underline-offset-4 group-hover:underline">
              {title}
            </h3>
          </div>
          <div className="flex gap-1">
            <del className="">
              <p className="font-medium">${basePrice}</p>
            </del>
            <p className="font-medium">${currentPrice}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
