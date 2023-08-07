import withAdmin from '@/components/Others/WithAdmin';
import UserTR from '@/components/adminComponents/manageUser/UserTR';
import { baseURL } from '@/components/assets/url';
import Spinner from '@/components/userComponents/common/Spinner';
import { useGetData } from '@/request/getData';

const User = () => {
  //Data fetch
  const apiUrl = `${baseURL}/users`;
  const { data: user, isLoading, error,refetch } = useGetData<any>(apiUrl);

  if (isLoading || error) return <Spinner />;

  return (
    <div className="text-gray-100">
      <h2 className="text-center text-3xl  font-semibold">Manage Users</h2>
      {/* content here */}

      <div className="relative mt-20 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                 name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
               
              <th scope="col" className="px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.map((u: any, i: number) => {
              return <UserTR refetch={refetch} user={u} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAdmin(User);
