import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withAdmin from '@/components/Others/WithAdmin';
const DashBoard = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('/admin/manage-users');
  }, [push]);

  //   return;
};

export default withAdmin(DashBoard);
