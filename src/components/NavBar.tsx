export default function NavBar() {
  return (
    <div className="mx-8 my-4 flex items-center justify-between">
      <div className="text-xl font-black tracking-widest">LOGO</div>
      <div className="flex items-center gap-6 text-sm font-medium">
        <div className="flex gap-6">
          <div>
            <button>Extension</button>
          </div>
          <div>
            <button>Swipes</button>
          </div>
          <div>
            <button>Tools</button>
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </div>
        <div>
          <button className="rounded-xl bg-gradient-to-r from-[#283be5] to-[#0093FF] p-2 px-4 text-white">
            Try Thieve Free
          </button>
        </div>
      </div>
    </div>
  );
}
