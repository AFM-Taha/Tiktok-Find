import { ReactNode } from 'react';
import AdminSidebar from '../adminComponents/AdminSidebar';
import withAdmin from '../Others/WithAdmin';


export default withAdmin(function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen ">
      <AdminSidebar>
        {children}
      </AdminSidebar>
    </div>
  );
})