import axios from "axios";

export const patch = async (url: string, data: any) => {
    try {
        const response = await axios.patch(url, data);

        console.log('Response data:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};