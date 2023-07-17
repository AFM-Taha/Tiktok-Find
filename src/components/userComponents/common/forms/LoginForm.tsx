import Link from 'next/link';
import { FaArrowRight, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
  return (
    <form>
      <div className="mb-4 flex justify-evenly">
        <button className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FcGoogle size={24} />
        </button>
        {/* </div>
      <div> */}
        <button className="rounded-xl bg-[#EFF6FB] px-6 py-2 hover:opacity-60">
          <FaFacebook size={24} color="#1877EA" />
        </button>
      </div>
      <p className="mb-4 text-center text-[#00000033]">OR</p>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
          className="my-2 w-full rounded-2xl bg-[#EFF6FB] px-3 py-4"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input
          className="my-2 w-full rounded-2xl bg-[#EFF6FB] px-3 py-4"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mx-auto mt-4 flex w-40 items-center justify-center rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80">
        <button className="mr-2" type="submit">
          Sign In
        </button>
        <FaArrowRight />
      </div>
      <Link href="/reset-password">
        <button className="mx-auto mt-3 block font-medium text-[#5082D8] hover:underline">
          Forgot Password
        </button>
      </Link>
    </form>
  );
}
