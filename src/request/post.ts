import axios from 'axios';
import toast from 'react-hot-toast';
type RefetchFunction = () => void;

export const post = async (
  url: string,
  data: any,
  refetch: RefetchFunction
) => {
  try {
    const res = await axios.post(url, data);
    if (res?.status === 200) {
      refetch();
      toast.success('Added');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
