import { ReactNode } from 'react';
import NavBar from '../userComponents/common/NavBar';
import Footer from '../userComponents/common/Footer';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
