import Image from 'next/image';

interface Props {
  imgsrc: string;
  alttext: string;
  // title: string;
}
export default function ProductsGridHomeCard({
  imgsrc,
  // title,
  alttext,
}: Props) {
  return (
    <div className="grid overflow-hidden rounded-3xl bg-neutral-700 shadow-[0_0.625rem_1.25rem_rgba(0,0,0,0.1)] even:translate-y-6 md:even:translate-y-0 lg:rounded-3xl lg:shadow-[0_1.5rem_2.5rem_rgba(0,_0,_0,_0.1)] xl:even:translate-y-10">
      <Image
        // layout="intrinsic"
        width={350}
        height={350}
        className="block"
        alt={alttext}
        src={imgsrc}
      />
      {/* <h3 className="py-2 text-center text-xs font-medium text-neutral-200">
        {title}
      </h3> */}
    </div>
  );
}
