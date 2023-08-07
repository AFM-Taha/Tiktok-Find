import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { z } from 'zod';
import auth from '../../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner';
import { useRouter } from 'next/router';

// go to ./LoginForm.tsx to know how the syntax works
const schema = z.object({
  displayName: z
    .string()
    .min(2, 'displayName must be at least 2 characters')
    .max(40, 'displayName must be less than 30 characters'),
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
    reset
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const router = useRouter();


  let signupError;

  if (cloading) {
    return <Spinner />
  };

  if (cerror) {
    signupError = <p className="text-red-700">{cerror?.message}</p>
  };

  const onSubmit: SubmitHandler<FormDataModel> = async (data) => {
    // console.log(data);
    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password)
    // verifyEmail()
    await updateProfile({ displayName: displayName })
      .then(() => {
        reset();
        router.push("/signin");
      })
  };


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
          {...register('displayName')}
          className="w-full rounded-2xl border-0 bg-[#EFF6FB] px-3 py-4"
          id="displayName"
          type="displayName"
          placeholder="Name"
        />
      </div>
      {errors.displayName && (
        <p className="mt-1 pl-2 text-sm text-red-500">
          {errors.displayName.message}
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
      {signupError}
      <button
        className="mx-auto mt-4 flex w-40 items-center justify-center gap-2 rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80"
        type="submit">
        Sign Up
        <FaArrowRight className="inline-block" />
      </button>
      <p className="mt-2 text-center text-gray-700">
        Already have an account?{' '}
        <Link href="/signin" className="font-bold text-blue-500 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
