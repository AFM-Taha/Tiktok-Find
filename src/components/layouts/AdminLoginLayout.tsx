import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function AdminLoginLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-fuchsia-600 via-green-400 to-sky-500">
      {children}
    </div>
  );
}
