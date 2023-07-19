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
    <div className="inline-block overflow-hidden rounded-xl bg-neutral-700">
      <Image
        layout="intrinsic"
        width={280}
        height={280}
        className="block"
        alt={alttext}
        src={imgsrc}
      />
      <h3 className="py-2 text-center text-xs font-medium text-neutral-200">
        {title}
      </h3>
    </div>
  );
}
