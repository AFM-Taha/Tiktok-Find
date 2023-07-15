export default function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div>LOGO</div>
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
        <div>
          <button>Try Thieve Free</button>
        </div>
      </div>
    </div>
  );
}
