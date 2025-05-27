
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GovernmentContractsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 animate-fade-in-up">
            Government Contracts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Mager Construction is a trusted partner for government agencies, delivering high-quality public works and infrastructure projects. We have a proven track record of executing complex contracts with precision, adhering to all regulatory requirements and delivering exceptional value to taxpayers.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Our team is experienced in navigating the intricacies of government contracting, from initial bidding to final project handover. We are committed to transparency, accountability, and delivering projects that enhance public infrastructure and services, on schedule and within budget.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" asChild>
              <Link to="/#contact">Inquire About Public Works</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GovernmentContractsPage;
