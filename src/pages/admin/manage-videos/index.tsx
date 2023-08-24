import VideoTR from '@/components/adminComponents/manageVideos/VideoTR';
import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';
import { post } from '@/request/post';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const ytUrlRegex =
  /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/shorts\/)([\w-]{11})/;

const schema = z.object({
  url: z.string().regex(ytUrlRegex, 'Enter a valid youtube video/shorts URL'),
});

type FormDataModel = z.infer<typeof schema>;

const VideoManage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataModel>({ resolver: zodResolver(schema) });

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

  const addVideo = (id: string) => {
    post(videoAddUrl, { url: id }, refetch);
  };

  const onSubmit: SubmitHandler<FormDataModel> = (data) => {
    function extractYouTubeVideoId(link: string): string | null {
      const pattern1 =
        /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/shorts\/)([\w-]{11})/;
      const pattern2 = /shorts\/([\w-]{11})/;

      const match1 = link.match(pattern1);
      const match2 = link.match(pattern2);

      if (match1) {
        return match1[1];
      } else if (match2) {
        return match2[1];
      } else {
        return null;
      }
    }
    const videoId = extractYouTubeVideoId(data.url);

    if (videoId) addVideo(videoId);
    reset();
  };

  if (isLoading || dataError) return <Spinner />;

  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl  font-semibold">Manage Videos</h2>
      {/* content here */}

      <div className="mt-20 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex max-h-[150px] max-w-[600px] flex-col items-center justify-center gap-2 rounded-3xl bg-gray-100 px-10 py-3 shadow-lg md:flex-row">
            <input
              {...register('url', { required: true })}
              type="text"
              className="h-10 w-full rounded-xl border-2 border-blue-600 text-gray-800"
              placeholder="for example: https://youtu.be/nm_KIiBMtDs"
            />
            <button
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

      <div className="relative mx-auto mt-20 max-w-[900px] overflow-x-auto shadow-md sm:rounded-lg">
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

export default VideoManage;
