import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TikTok Find | Home</title>
        <style>
          {`
        body {
          background-color: #000;
        }`}
        </style>
      </Head>
      <div className="text-center">
        <h2 className="mt-24 px-8 text-center text-3xl font-bold text-white md:text-6xl lg:mt-60 xl:text-7xl 2xl:text-9xl">
          Discover the Ultimate Shopping Experience Online
        </h2>
        <p className="mt-4 inline-block bg-gradient-to-r from-[#CA16E7] to-[#FE4754] bg-clip-text p-2 text-xl font-bold tracking-wider text-transparent md:mt-16 md:text-3xl xl:text-4xl 2xl:text-5xl">
          TRUSTED BY OVER 400,000 MEMBERS
        </p>
      </div>
    </>
  );
}
