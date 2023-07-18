import Image from 'next/image';
export default function ProductsGridHomeCard() {
  return (
    <div className="inline-block overflow-hidden rounded-xl bg-white">
      <Image
        layout="intrinsic"
        width={280}
        height={280}
        className="block"
        alt="Room Vibe Corner Lamp"
        src="/fancyroom.webp"
      />
      <h3 className="py-2 text-center text-xs font-medium">
        Fancy Room Corner Lamp
      </h3>
    </div>
  );
}
