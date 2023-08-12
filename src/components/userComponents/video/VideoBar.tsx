import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import VideoCard from './VideoCard';
import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Shorts = {
  shorts_links: string[];
};

export default function VideoBar() {
  // fetch from next.js api route in pages/api/hello.ts
  const { data, error } = useQuery<Shorts, Error>({
    queryKey: ['videos'],
    queryFn: () => axios.get('api/hello').then((res) => res.data),
  });

  // For handling left and right scroll buttons

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 500;
  };
  const handleSlideRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 500;
  };

  if (error)
    return (
      <p className="text-center text-3xl font-bold text-red-500">
        Error: {error.message}
      </p>
    );

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
        {/* ----------- Video Cards ----------- */}
        {data?.shorts_links.map((link) => (
          <VideoCard key={link} shorts_link={link} />
        ))}
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
