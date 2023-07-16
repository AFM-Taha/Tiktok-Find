import LoginForm from '@/components/userComponents/common/forms/LoginForm';
import Head from 'next/head';
export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <style>
          {`
        body {
          background-color: #DBEDF8;
        }`}
        </style>
      </Head>
      <div className="flex justify-evenly">
        <div>
          <h2 className="mt-60 inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-6xl font-extrabold text-transparent">
            Hey,
            <br />
            welcome back!
          </h2>
          <p className="p-2 font-medium">Sign in to access your account.</p>
        </div>
        <div className="mt-52 rounded-3xl bg-white p-8">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
