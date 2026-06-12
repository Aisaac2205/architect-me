import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-background relative">
            <Header />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};
