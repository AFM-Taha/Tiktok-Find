import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CategoryBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 500;
  };
  const handleSlideRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 500;
  };
  return (
    <div className="mt-16 flex justify-center lg:mx-36">
      <div>
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideLeft}>
          <FaChevronLeft size={20} color="white" />
        </button>
      </div>
      <div
        ref={containerRef}
        className="category-scrollbar flex gap-2 overflow-x-scroll scroll-smooth px-2 pb-2 text-center text-white md:gap-4 lg:gap-8">
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
        <div className="rounded-xl bg-[rgba(26,42,59,0.68)] px-4 py-2 font-medium">
          Category
        </div>
      </div>
      <div>
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideRight}>
          <FaChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}
