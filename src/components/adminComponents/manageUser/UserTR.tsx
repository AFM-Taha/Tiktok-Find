import { baseURL } from '@/components/assets/url';
import { remove } from '@/request/delete';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const UserTR = ({ user, refetch }: any) => {
  const { email, displayName, _id, role } = user;

  //   Delete  Url
  const deleteURL = `${baseURL}/users/${_id}`;

  return (
    <>
      {role === 'user' && (
        <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
            {displayName}
          </th>
          <td className="px-6 py-4">{email}</td>

          <td className="px-6 py-4 text-right">
            <button
              className="rounded-md p-1 text-2xl duration-300 hover:bg-red-600 hover:text-gray-50 "
              onClick={() => remove(deleteURL, refetch)}>
              <MdDelete />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default UserTR;
