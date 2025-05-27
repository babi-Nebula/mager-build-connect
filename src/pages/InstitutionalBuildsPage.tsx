
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InstitutionalBuildsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 animate-fade-in-up">
            Institutional Builds
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Mager Construction offers specialized construction services for institutional clients, including educational facilities, healthcare centers, office complexes, and community buildings. We bring expertise in creating functional, durable, and inspiring spaces that serve their communities effectively.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Our approach to institutional projects focuses on understanding the unique needs of each organization. We emphasize efficient project management, adherence to stringent quality and safety standards, and the integration of modern technologies to deliver facilities built for longevity and purpose.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" asChild>
              <Link to="/#contact">Plan Your Institutional Project</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstitutionalBuildsPage;
