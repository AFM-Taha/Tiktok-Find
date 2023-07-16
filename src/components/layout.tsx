import { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
