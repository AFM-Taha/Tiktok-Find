export default function Spinner() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex animate-spin items-center justify-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-transparent"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
}
