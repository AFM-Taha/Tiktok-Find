export default function Login() {
  return (
    <div className="px-16 text-center text-white">
      <h2 className="pt-32 text-5xl font-black sm:text-8xl">
        Welcome, Captain.
      </h2>
      <p className="my-10 text-xl font-bold sm:text-3xl">
        Enter your passkey to gain access to your ship
      </p>
      <form className="mt-32 flex flex-col items-center justify-center gap-2 sm:flex-row">
        <label htmlFor="admin-password" className="sr-only">
          Admin Password
        </label>
        <input
          id="admin-password"
          className="rounded-xl border-0 text-black"
          type="password"
          placeholder="Admin's password"
        />
        <div>
          <button
            className="rounded-xl bg-gradient-to-br from-fuchsia-600  to-cyan-600 px-6 py-2 font-bold"
            type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}
