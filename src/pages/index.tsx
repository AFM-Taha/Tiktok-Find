import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <Link
        className="mt-60 inline-block bg-gradient-to-r from-[#CA16E7] to-[#FE4754] bg-clip-text p-2 text-center text-6xl font-bold text-transparent"
        href="/login">
        Click to go to the login page
      </Link>
    </div>
  );
}
