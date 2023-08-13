import axios from "axios";
import toast from "react-hot-toast";

type RefetchFunction = () => void;

// Delete Function
export const remove = (url: string | '', refetch: RefetchFunction): void => {
    const sure = window.confirm('Are you want to delete?')

    if (sure) {
        axios
            .delete(url)
            .then((res) => {
                if (res?.status === 200) {
                    refetch();
                    toast.error("Deleted !!");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

};
