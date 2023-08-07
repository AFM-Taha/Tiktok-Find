import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useGetData<T>(url: string) {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      try {
        const response = await axios.get<T>(url);
        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    },
  });
}
