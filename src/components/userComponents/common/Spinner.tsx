import { PropagateLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="habib-spinner">
      <PropagateLoader color="#4C7FE1" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
