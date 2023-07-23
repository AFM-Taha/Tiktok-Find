import VideoCard from './VideoCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Navigation, Scrollbar } from 'swiper/modules';
export default function VideoBar() {
  return (
    // <div className="category-scrollbar flex gap-2 overflow-x-scroll py-4 lg:mx-48 lg:gap-8">
    <Swiper
      // install Swiper modules
      spaceBetween={15}
      slidesPerView={5}
      navigation={true}
      scrollbar={{
        hide: true,
        draggable: true,
      }}
      modules={[Scrollbar, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
    </Swiper>

    // </div>
  );
}
