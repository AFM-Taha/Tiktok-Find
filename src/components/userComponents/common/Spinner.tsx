export default function Spinner() {
  return (
    <div className="grid h-[80vh] place-items-center">
      <div className="flex animate-spin items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
        <div className="h-8 w-8 rounded-full bg-transparent"></div>
        <div className="h-8 w-8 rounded-full bg-blue-400"></div>
      </div>
    </div>
  );
}
