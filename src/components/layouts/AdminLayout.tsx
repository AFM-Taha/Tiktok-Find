import { ReactNode } from 'react';


export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
   <div className="min-h-screen ">
      <h1 className="text-3xl text-center md:-mr-48 py-5">Admin Panel</h1>
        {children}
    </div>
  );
}
