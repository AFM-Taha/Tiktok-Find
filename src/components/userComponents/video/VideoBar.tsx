import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import VideoCard from './VideoCard';
import { useRef } from 'react';

export default function VideoBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 500;
  };
  const handleSlideRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 500;
  };
  return (
    <div className="mx-auto flex max-w-[71.25rem] items-center justify-center xl:max-w-[93.75rem]">
      <div className="hidden md:inline-block">
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideLeft}>
          <FaChevronLeft size={20} color="white" />
        </button>
      </div>
      <div
        ref={containerRef}
        className="category-scrollbar mx-4 flex gap-2 overflow-x-scroll scroll-smooth py-4 lg:gap-8">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <div className="hidden md:inline-block">
        <button
          className="rounded-full bg-white bg-opacity-20 p-2 hover:bg-opacity-50"
          onClick={handleSlideRight}>
          <FaChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}
