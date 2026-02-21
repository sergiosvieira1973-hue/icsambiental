import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Layout;
