// import FormDataModel from '@/types/formData';
import React from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaFacebook } from 'react-icons/fa';
import auth from '../../../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner';
import UseToken from '@/hooks/useToken';
import toast from 'react-hot-toast';

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
  const [signInWithEmailAndPassword, suser, sloading, serror] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });

  let someErrorMessages;
  const getFirebaseErrorMessages = (firebaseMessage: any) => {
    const messages = firebaseMessage?.split("/")[1].split(")")[0]
    someErrorMessages = messages;
  }

  if (serror || gerror || ferror) {

    if (serror) getFirebaseErrorMessages(serror?.message)
    if (gerror) getFirebaseErrorMessages(gerror?.message)
    if (ferror) getFirebaseErrorMessages(ferror?.message)
  } else {
    someErrorMessages = null
  }


  // const from = location.state?.from?.pathname || '/';

  const [token] = UseToken(suser || guser || fuser);


  if (sloading || gloading || floading) {
    return <Spinner />
  }

  if (token) {
    // navigate(from, { replace: true });
    toast.success("Signin User Successfully");
  }

  const onSubmit: SubmitHandler<FormDataModel> = async (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password)
      .then(() => {
        reset();
      })
  };


  const handleGoogleSignin = async () => {
    await signInWithGoogle()
  };

  const handleFacebookSignin = async () => {
    await signInWithFacebook()
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2 p-2 text-center text-blue-400">
        <FaRegUserCircle size={50} className="inline-block" />
        <div>
          <p className="inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-lg font-bold text-transparent">
            Sign in to Access Your Profile
          </p>
        </div>
      </div>
      <div className="mb-4 flex justify-evenly">
        <button onClick={handleGoogleSignin} className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FcGoogle size={24} />
        </button>
        <button onClick={handleFacebookSignin} className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FaFacebook size={24} color="#1877EA" />
        </button>
      </div>
      <p className="mb-4 text-center text-[#00000033]">OR</p>
      {
        someErrorMessages &&
        <div className="some-error-message p-4 m-4 w-2/3 mx-auto bg-red-100  text-red-600 border rounded-lg text-sm  flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {someErrorMessages}
        </div>
      }
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

      <button
        className="mx-auto mt-4 flex w-40 items-center justify-center gap-2 rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80"
        type="submit">
        Sign In
        <FaArrowRight className="inline-block" />
      </button>
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
