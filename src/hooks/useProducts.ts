import { FetchedProducts } from '@/types/products';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get<FetchedProducts>(
          'https://tiktokfind-ecommerce-server.vercel.app/api/v1/products'
        )
        .then((res) => res.data),
  });
}
