import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useFetchData<T>(url: string): UseQueryResult<T> {
    return useQuery<T, Error>({
        queryKey: [url],
        queryFn: async () => {
            try {
                const response: AxiosResponse<T> = await axios.get(url);
                return response.data;
            } catch (error) {
                throw new Error("Failed to fetch data");
            }
        },
    });
}
