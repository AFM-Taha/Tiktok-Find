import Image from 'next/image';

interface Props {
  imgsrc: string;
  alttext: string;
  title: string;
  basePrice: number;
  currentPrice: number;
}
export default function ProductsGridHomeCard({
  imgsrc,
  title,
  alttext,
  basePrice,
  currentPrice,
}: Props) {
  return (
    <div className="bg-transparent bg-opacity-0 even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl xl:even:translate-y-10">
      <div className="bg-transparent bg-opacity-0">
        <Image
          // layout="intrinsic"
          width={350}
          height={350}
          className="rounded-3xl bg-transparent bg-opacity-0"
          alt={alttext}
          src={imgsrc}
        />
      </div>
      <div className="mt-2 flex justify-between bg-transparent bg-opacity-0 px-2 text-white">
        <div>
          <h3 className="text- bg-transparent bg-opacity-0 font-semibold">
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
    </div>
  );
}
