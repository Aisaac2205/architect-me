import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundGlow from '@/components/ui/BackgroundGlow';
import FloatingIcons from '@/components/ui/FloatingIcons';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-background relative">
            <BackgroundGlow />
            <FloatingIcons />
            <Header />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};
