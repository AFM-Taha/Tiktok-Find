import LoginForm from '@/components/userComponents/common/forms/LoginForm';
import Head from 'next/head';
export default function Login() {
  return (
    <>
      <Head>
        <title>TikTok Find | Signin</title>
      </Head>
      <div className="mb-16 flex flex-col justify-evenly overflow-hidden lg:flex-row">
        <div className="ml-4">
          <h2 className="mt-20 inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-6xl font-extrabold text-transparent lg:mt-60">
            Hey,
            <br />
            welcome back!
          </h2>
          <p className="p-2 font-medium text-white">
            Sign in to access your account.
          </p>
        </div>
        <div className="mx-8 mt-8 min-h-[550px] min-w-[354px] rounded-3xl bg-white p-8 lg:mt-52">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
