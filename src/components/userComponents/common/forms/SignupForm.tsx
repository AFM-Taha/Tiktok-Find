import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { z } from 'zod';

// go to ./LoginForm.tsx to know how the syntax works
const schema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(20, 'Username must be less than 20 characters'),
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi, 'Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormDataModel = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<FormDataModel> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2 p-2 text-center text-blue-400">
        <AiOutlineUserAdd size={50} className="inline-block" />
        <div>
          <p className="inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-lg font-bold text-transparent">
            Register with you email
          </p>
        </div>
      </div>
      <div>
        <input
          {...register('username')}
          className="w-full rounded-2xl border-0 bg-[#EFF6FB] px-3 py-4"
          id="username"
          type="username"
          placeholder="Username"
        />
      </div>
      {errors.username && (
        <p className="mt-1 pl-2 text-sm text-red-500">
          {errors.username.message}
        </p>
      )}
      <div>
        <input
          {...register('email')}
          className="mt-4 w-full rounded-2xl border-0 bg-[#EFF6FB] px-3 py-4"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      {errors.email && (
        <p className="mt-1 pl-2 text-sm text-red-500">{errors.email.message}</p>
      )}
      <div>
        <input
          {...register('password')}
          className="mt-4 w-full rounded-2xl border-0 bg-[#EFF6FB] px-3 py-4"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {errors.password && (
        <p className="mt-1 pl-2 text-sm text-red-500">
          {errors.password.message}
        </p>
      )}
      {/* <div className="text-end ">
        <Link href="/reset-password">
          <button className="text-sm font-medium text-gray-600 hover:underline">
            Forgot Password?
          </button>
        </Link>
      </div> */}
      <button
        className="mx-auto mt-4 flex w-40 items-center justify-center gap-2 rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80"
        type="submit">
        Sign Up
        <FaArrowRight className="inline-block" />
      </button>
      <p className="mt-2 text-center text-gray-700">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-blue-500 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
