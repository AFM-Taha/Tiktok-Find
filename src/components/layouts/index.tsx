import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/router';
import UserLayout from './UserLayout';
import AdminLayout from './AdminLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReduxProvider } from '@/redux/ReduxProvider';
import AdminLoginLayout from './AdminLoginLayout';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = router.pathname;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {pathname === '/admin/login' ? (
        <AdminLoginLayout>{children}</AdminLoginLayout>
      ) : pathname.includes('/admin') ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <ReduxProvider>
          <UserLayout>{children}</UserLayout>
        </ReduxProvider>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  );
}
