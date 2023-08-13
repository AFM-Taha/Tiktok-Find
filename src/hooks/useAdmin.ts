import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const UseAdmin = () => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {

        if (email) {
            fetch(`https://tiktokfind-ecommerce-server.vercel.app/api/v1/users/isAdmin/${email}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(() => {
                    // const admin = data.role === true;
                    // console.log(admin);
                    setAdmin(true);
                    setAdminLoading(false);
                })
        }
    }, [email]);



    return [admin, adminLoading];
};

export default UseAdmin;