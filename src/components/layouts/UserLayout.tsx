import { ReactNode } from 'react';
import NavBar from '../userComponents/common/NavBar';
import Footer from '../userComponents/common/Footer';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen px-3 md:px-0">{children}</main>
      <Footer />
    </div>
  );
}
