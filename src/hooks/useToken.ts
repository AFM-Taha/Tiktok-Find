import { baseURL } from '@/components/assets/url';
import { useEffect, useState } from 'react';

const UseToken = (user: any) => {
  // const [user] = useAuthState(auth);
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const displayName = user?.user?.displayName;

    const currentUser = {
      displayName: displayName,
      email: email,
    };


    if (email) {
      fetch(
        `${baseURL}/users/${email}`,
        {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data?.data?.accessToken;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default UseToken;
