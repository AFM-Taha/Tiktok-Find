import FormDataModel from '@/types/formData';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataModel>();
  const onSubmit: SubmitHandler<FormDataModel> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="mb-4 flex justify-evenly">
        <button className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FcGoogle size={24} />
        </button>
        <button className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FaFacebook size={24} color="#1877EA" />
        </button>
      </div> */}
      {/* <p className="mb-4 text-center text-[#00000033]">OR</p> */}
      <div className="mb-2 inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-center text-blue-400 text-transparent">
        <FaRegUserCircle size={50} className="inline-block" />
        <div>
          <p className="inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-lg font-bold text-transparent">
            Sign in to Access Your Profile
          </p>
        </div>
      </div>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
          {...register('email', {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
          })}
          className="my-2 w-full rounded-2xl bg-[#EFF6FB] px-3 py-4"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input
          {...register('password', { required: true, minLength: 8 })}
          className="my-2 w-full rounded-2xl bg-[#EFF6FB] px-3 py-4"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {errors.email && (
        <p className="text-center text-sm text-red-500">
          Please enter a valid email.
        </p>
      )}
      {errors.password && (
        <p className="text-center text-sm text-red-500">
          Password must be 8+ characters long.
        </p>
      )}
      <div className="text-end ">
        <Link href="/reset-password">
          <button className="text-sm font-medium text-gray-600 hover:underline">
            Forgot Password?
          </button>
        </Link>
      </div>
      <div className="mx-auto mt-4 flex w-40 items-center justify-center rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80">
        <button className="mr-2" type="submit">
          Sign In
        </button>
        <FaArrowRight />
      </div>
      <p className="mt-2 text-center text-gray-700">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="font-bold text-blue-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
