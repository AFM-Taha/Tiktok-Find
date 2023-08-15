import { baseURL } from '@/components/assets/url';
import { remove } from '@/request/delete';
import { MdDelete } from 'react-icons/md';

const VideoTR = ({ video, refetch }: any) => {
  const { _id,url } = video;

  //   Delete  Url
  const deleteURL = `${baseURL}/videos/${_id}`;

  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
        <iframe
          className="z-50 h-[100px] w-[200px] rounded"
          src={`https://www.youtube.com/embed/${url}?autoplay=0&mute=1&controls=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
        />
      </th>

      <td className="px-6 py-4 text-right">
        <button
          className="rounded-md p-1 text-2xl duration-300 hover:bg-red-600 hover:text-gray-50 "
          onClick={() => remove(deleteURL, refetch)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default VideoTR;
