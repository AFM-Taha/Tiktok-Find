import withAdmin from '@/components/Others/WithAdmin';
import VideoTR from '@/components/adminComponents/manageVideos/VideoTR';
import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { post } from '@/request/post';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const ytUrlRegex =
  /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/shorts\/)([\w-]{11})/;

const schema = z.object({
  url: z.string().regex(ytUrlRegex, 'Enter a valid youtube video/shorts URL'),
});

type FormDataModel = z.infer<typeof schema>;

const User = () => {
  // const [videoUrl, setVideoUrl] = useState('');
  const [YTID, setYTID] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });
  const [video, setVideo] = useState<any>({});

  // useEffect(() => {
  //   const pattern = /\/([a-zA-Z0-9_]+)$/;
  //   const match = videoUrl.match(pattern);
  //   if (match) {
  //     setYTID(match[1]);
  //   }
  // }, [videoUrl]);

  //Data fetch
  const apiUrl = `${baseURL}/videos`;
  const {
    data: videos,
    isLoading,
    error: dataError,
    refetch,
  } = useGetData<any>(apiUrl);

  // Add video
  const videoAddUrl = `${baseURL}/videos`;

  const adVideo = () => {
    if (YTID.length > 2) {
      post(videoAddUrl, { url: YTID }, refetch);
    }
  };

  const onSubmit: SubmitHandler<FormDataModel> = (data) => {
    console.log(data.url);

    reset();
  };

  if (isLoading || dataError) return <Spinner />;

  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl  font-semibold">Manage Videos</h2>
      {/* content here */}

      <div className="mt-20 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex h-[150px] w-[600px] items-center justify-center rounded-3xl bg-gray-100 px-10 shadow-lg">
            <input
              // value={videoUrl}
              // onChange={(e) => setVideoUrl(e.target.value)}
              {...register('url', { required: true })}
              type="text"
              className="h-10 w-full rounded-xl border-2 border-blue-600 text-gray-800"
              placeholder="for example: https://youtu.be/nm_KIiBMtDs"
            />
            <button
              // onClick={adVideo}
              type="submit"
              className="ml-1 rounded-xl border-2 border-red-800 px-8 py-1.5 font-medium text-red-800 duration-200 hover:bg-red-800 hover:text-gray-100">
              Add
            </button>
          </div>
        </form>
      </div>
      {errors.url && (
        <p className="text-center text-lg font-bold text-red-500">
          {errors.url.message}
        </p>
      )}

      <div className="relative mx-auto mt-20 w-[900px] overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Videos
              </th>

              <th scope="col" className="px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {videos?.map((v: any, i: number) => {
              return <VideoTR refetch={refetch} video={v} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAdmin(User);
