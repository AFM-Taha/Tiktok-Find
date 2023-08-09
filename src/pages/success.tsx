import { BsCheck2Circle } from 'react-icons/bs';

export default function Success() {
  return (
    <div className="mb-32 h-[50vh] pt-64 text-center text-9xl font-bold text-white">
      <div className="inline-block">
        <BsCheck2Circle color="green" />
      </div>
      <p className="text-3xl font-bold sm:text-5xl lg:text-7xl">
        Your Order Was Placed Successfully
      </p>
    </div>
  );
}
