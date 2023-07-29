// import FormDataModel from '@/types/formData';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// The schema below is the model of the form data
/* 
Syntax: z.object({ 
  formInput: z.string().min(8, 'my error message') 
})
  The schema above tells that formInput must be: 
  1) a string
  2) minimum 8 characters
  3) If inputs aren't following the conditions the error.formInput will be truthy
  and the error message will be 'my error message'
*/
const schema = z.object({
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi, 'Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// This is a type created from the model above
type FormDataModel = z.infer<typeof schema>;

export default function LoginForm() {
  // Pass the type to the hook and set the resolver to zodResolver
  // and pass the schema to the resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });
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
      <div className="mb-2 p-2 text-center text-blue-400">
        <FaRegUserCircle size={50} className="inline-block" />
        <div>
          <p className="inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-lg font-bold text-transparent">
            Sign in to Access Your Profile
          </p>
        </div>
      </div>
      <div>
        <input
          {...register('email')}
          className="w-full rounded-2xl border-0 bg-[#EFF6FB] px-3 py-4"
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
