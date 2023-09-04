import CategoryBar from '@/components/userComponents/common/CategoryBar';
import ProductsGridHome from '@/components/userComponents/productsGrid/ProductsGridHome';
import VideoBar from '@/components/userComponents/video/VideoBar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TikTok Find | Home</title>
        <meta
          name="description"
          content="The best e-commerce store"
          key="desc"
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <nav className="pt-12">
        <CategoryBar />
      </nav>
      <section className="">
        <VideoBar />
      </section>
      <section className="mt-8 min-h-[3000px] bg-gradient-to-b from-[rgba(255,255,255,0)] via-[#f5f5f5] to-[#ffffff] pb-[6.25rem]">
        <ProductsGridHome />
      </section>
    </>
  );
}
