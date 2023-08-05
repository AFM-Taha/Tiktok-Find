import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { MdLockReset } from 'react-icons/md';

const schema = z.object({
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi, 'Enter a valid email'),
});

type FormDataModel = z.infer<typeof schema>;

export default function ResetPassWord() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<FormDataModel> = (data) => console.log(data);
  return (
    <form className="mb-64" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-16 mt-32 text-center">
        <h2 className="inline-block bg-gradient-to-r from-[#46A0E3] to-[#5845DF] bg-clip-text p-2 text-5xl font-bold text-transparent md:text-7xl">
          Enter you email
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        <div>
          <div>
            <input
              {...register('email')}
              className="mt-4 w-72 rounded-2xl border-0 bg-[#EFF6FB] px-3 py-2 sm:w-96"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <button
            className="mx-auto mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1469F3] px-4 py-2 font-medium text-white hover:opacity-80"
            type="submit">
            Reset password
            <MdLockReset size={24} className="inline-block" />
          </button>
        </div>
      </div>
      {errors.email && (
        <p className="mt-8 pl-2 text-center text-lg text-red-300">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
