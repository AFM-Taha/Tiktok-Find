import { GridLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center'>
      <GridLoader color="#00C2FF" />
    </div>
  );
}  
