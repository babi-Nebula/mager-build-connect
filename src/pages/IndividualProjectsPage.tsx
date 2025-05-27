
import React from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IndividualProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 animate-fade-in-up">
            Individual Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            At Mager Construction, we understand that your home is more than just a building; it's a reflection of your personality and aspirations. We specialize in crafting bespoke individual projects, from luxurious custom home builds to intricate renovations and thoughtful additions.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Our dedicated team works hand-in-hand with you, translating your unique vision into a tangible reality. We prioritize quality craftsmanship, transparent communication, and meticulous attention to detail, ensuring your project is completed to the highest standards, on time and within budget.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" asChild>
              <Link to="/#contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndividualProjectsPage;
