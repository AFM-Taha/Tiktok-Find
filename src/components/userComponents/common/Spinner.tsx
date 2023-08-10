import { PropagateLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="">
      <PropagateLoader color="#00C2FF" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
