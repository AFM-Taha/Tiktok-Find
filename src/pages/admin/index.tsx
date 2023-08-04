import { useEffect } from 'react';
import { useRouter } from 'next/router';
const DashBoard = () => {
  const { push } = useRouter();
  const dash = false;

  useEffect(() => {
    if (!dash) {
      push('/admin/manage-users');
    }
  }, [dash, push]);

//   return;
};

export default DashBoard;
