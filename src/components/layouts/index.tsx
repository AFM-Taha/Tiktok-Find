import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useRouter } from 'next/router';
import UserLayout from './UserLayout';
import AdminLayout from './AdminLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = router.pathname;

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {pathname.includes('admin') ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
