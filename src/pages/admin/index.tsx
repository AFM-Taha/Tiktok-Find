import { useEffect } from 'react';
import { useRouter } from 'next/router';
const DashBoard = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('/admin/manage-users');
  }, [push]);

  //   return;
};

export default DashBoard;
