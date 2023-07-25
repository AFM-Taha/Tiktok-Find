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
      <nav>
        <CategoryBar />
      </nav>
      <section className="">
        <VideoBar />
      </section>
      <section className=" mt-8">
        <ProductsGridHome />
      </section>
    </>
  );
}
