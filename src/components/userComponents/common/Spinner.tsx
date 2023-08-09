import { GridLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <GridLoader color="#00C2FF" />
    </div>
  );
}
