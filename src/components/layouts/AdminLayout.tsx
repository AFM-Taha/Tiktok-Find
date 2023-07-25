import { ReactNode } from 'react';
import AdminSidebar from '../adminComponents/AdminSidebar';


export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen ">
      <AdminSidebar>

      {children}
      </AdminSidebar>
    </div>
  );
}
