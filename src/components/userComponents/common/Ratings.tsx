import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type Props = {
  ratings: number;
};

const Ratings = ({ ratings }: Props) => {
  // one
  if (ratings === 1) {
    return (
      <div className="flex text-blue-600">
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    );
  }
  if (ratings === 2) {
    return (
      <div className="flex text-blue-600">
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    );
  }
  if (ratings === 3) {
    return (
      <div className="flex text-blue-600">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />

        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    );
  }
  if (ratings === 4) {
    return (
      <div className="flex text-blue-600">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />

        <AiOutlineStar />
      </div>
    );
  }
//   if (ratings === 5) {
//     return (
//       <div className="flex text-blue-600">
//         <AiFillStar />
//         <AiFillStar />
//         <AiFillStar />
//         <AiFillStar />
//         <AiFillStar />
//       </div>
//     );
//   }
   return (
     <div className="flex text-blue-600">
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
     </div>
   );
};

export default Ratings;
