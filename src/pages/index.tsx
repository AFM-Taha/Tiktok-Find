import ProductsGridHome from '@/components/userComponents/productsGrid/ProductsGridHome';
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
        <style>
          {`
        body {
          background-color: #000;
        }`}
        </style>
      </Head>
      <section className="xs:pt-[8rem] bg-white bg-gradient-to-br from-[#130110] to-[#1b2047] pt-[6.25rem] text-center lg:pt-[10rem] 2xl:pt-[10rem]">
        <div className="text-center">
          <h2 className="px-8 text-center text-3xl font-bold text-white md:text-6xl xl:text-7xl 2xl:text-9xl">
            Discover the Ultimate Shopping Experience Online
          </h2>
          <h3 className="mt-4 inline-block bg-gradient-to-r from-[#CA16E7] to-[#FE4754] bg-clip-text p-2  text-xl font-bold tracking-wider text-transparent md:mt-16 md:text-3xl xl:text-4xl 2xl:text-5xl">
            TRUSTED BY OVER 400,000 MEMBERS
          </h3>
        </div>
        <div className="quotes mx-auto grid max-w-[60rem] justify-center gap-[4.375rem] px-5 py-20 text-white md:grid-cols-3 lg:py-[6rem] 2xl:max-w-[80rem] 2xl:py-[6rem]">
          <div>
            <div className="mx-auto mb-4 max-w-[18.75rem] text-[0.875rem] font-bold leading-[120%] lg:text-[1rem] 2xl:max-w-[20rem] 2xl:text-xl">
              &quot;This platform redefined shopping for me&quot;
            </div>
            <div className="text-[0.75rem] uppercase leading-none tracking-wider opacity-30">
              Jane Doe
            </div>
          </div>
          <div>
            <div className="mx-auto mb-4 max-w-[18.75rem] text-[0.875rem] font-bold leading-[120%] lg:text-[1rem] 2xl:max-w-[20rem] 2xl:text-xl">
              &quot;A true shopping paradise&quot;
            </div>
            <div className="text-[0.75rem] uppercase leading-none tracking-wider opacity-30">
              J. Rich
            </div>
          </div>
          <div>
            <div className="mx-auto mb-4 max-w-[18.75rem] text-[0.875rem] font-bold leading-[120%] lg:text-[1rem] 2xl:max-w-[20rem] 2xl:text-xl">
              &quot;Shopping will never be the same again&quot;
            </div>
            <div className="text-[0.75rem] uppercase leading-none tracking-wider opacity-30">
              D. Zander
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductsGridHome />
      </section>
    </>
  );
}
