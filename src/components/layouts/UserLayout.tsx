import { ReactNode } from 'react';
import NavBar from '../userComponents/common/NavBar';
import Footer from '../userComponents/common/Footer';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
