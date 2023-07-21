import Image from 'next/image';

interface Props {
  imgsrc: string;
  alttext: string;
  title: string;
}
export default function ProductsGridHomeCard({
  imgsrc,
  title,
  alttext,
}: Props) {
  return (
    <div className="z-10 bg-red-400 bg-transparent bg-opacity-0 shadow-[0_0.625rem_1.25rem_rgba(0,0,0,0.1)] even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl lg:shadow-[0_1.5rem_2.5rem_rgba(0,_0,_0,_0.1)] xl:even:translate-y-10">
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
      <div className="bg-transparent bg-opacity-0">
        <h3 className="bg-transparent bg-opacity-0 font-semibold text-neutral-600">
          {title}
        </h3>
      </div>
    </div>
  );
}
