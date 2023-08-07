import { useEffect, useState } from 'react';


const UseAdmin = (user: any) => {
    const [admin, setAdmin] = useState(false);


    useEffect(() => {
        const email = user?.user?.email;

        fetch(`http://localhost:5000/api/v1/users/isAdmin/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                const admin = data?.role;
                // console.log(admin);
                setAdmin(admin);
            })

    }, [user]);


    return [admin];
};

export default UseAdmin;