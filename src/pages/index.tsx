import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <Link
        className="text-center hover:underline mt-60 block bg-gradient-to-r from-[#CA16E7] to-[#FE4754] bg-clip-text text-transparent text-6xl p-2 font-bold"
        href="/login">
        Click to go to the login page
      </Link>
    </div>
  );
}
