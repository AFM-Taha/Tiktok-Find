import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import Spinner from '@/components/userComponents/common/Spinner';
import UseToken from '@/hooks/useToken';

interface Admin {
  email: string;
  password: string;
}

export default function Login() {
  const [signInWithEmailAndPassword, suser, sloading, serror] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, reset } = useForm<Admin>();
  const router = useRouter();


  let someErrorMessages;
  const getFirebaseErrorMessages = (firebaseMessage: any) => {
    const messages = firebaseMessage?.split("/")[1].split(")")[0]
    someErrorMessages = messages;
  }

  if (serror) {
    if (serror) getFirebaseErrorMessages(serror?.message)
  } else {
    someErrorMessages = null
  }


  // const from = location.state?.from?.pathname || '/';
  // const from = router.query.from || '/';
  const from = (router.query.from);


  const [token] = UseToken(suser);




  if (sloading) {
    return <Spinner />
  }



  if (token) {
    if (from) {
      router.push(from);
    } else {
      router.push("/admin");
    }
    toast.success("Signin Admin Successfully");
  };


  const onSubmit: SubmitHandler<Admin> = async (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password)
      .then(() => {
        reset();
      })
  };
  return (
    <div className="px-16 text-center text-white">
      <h2 className="pt-32 text-5xl font-black sm:text-8xl">
        Welcome, Captain.
      </h2>
      <p className="my-10 text-xl font-bold sm:text-3xl">
        Enter your passkey to gain access to your ship
      </p>
      {
        someErrorMessages &&
        <div className="some-error-message p-4 m-4 w-2/3 md:w-1/3 mx-auto bg-red-100  text-red-600 border rounded-lg text-sm  flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {someErrorMessages}
        </div>
      }
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col w-full mx-auto items-center justify-center gap-2`}>
        <label htmlFor="admin-email" className="sr-only">
          Admin Email
        </label>
        <input
          {...register('email', { required: true })}
          id="admin-email"
          className="rounded-xl w-2/3 md:w-1/3 border-0 text-black"
          type="email"
          placeholder="Admin's Email"
        />
        <label htmlFor="admin-password" className="sr-only">
          Admin Password
        </label>
        <input
          {...register('password', { required: true })}
          id="admin-password"
          className="rounded-xl w-2/3 md:w-1/3 border-0 text-black"
          type="password"
          placeholder="Admin's password"
        />
        <div className='w-full pt-3'>
          <button
            className="gap-3 w-1/3 group rounded-xl bg-gradient-to-br from-fuchsia-600  to-cyan-600 px-8 py-2 font-bold"
            type="submit">
            Enter <FaChevronRight className="-mt-[3px] group-hover:ml-3 duration-300 ease-in-out inline-block" />
          </button>
        </div>
      </form>
    </div>
  );
}
