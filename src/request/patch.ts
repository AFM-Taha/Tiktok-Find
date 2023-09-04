import axios from "axios";
import toast from "react-hot-toast";
type RefetchFunction = () => void;

export const patch = async (url: string, data: any, refetch: RefetchFunction, otherFn?: any) => {
    try {
        const res = await axios.patch(url, data);
        if (res?.status === 200) {
            refetch();
            toast.success("Updated");
            if (otherFn) {
                otherFn()
            }
        }

    } catch (error) {
        console.error('Error:', error);
    }
};