
import React from 'react';
import { Button } from '@/components/ui/button';

// Placeholder image URL - user can replace this
const heroImageUrl = '/lovable-uploads/photo-1493397212122-2b85dda8106b.jpeg'; // A building with wavy lines

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90"></div>
      </div>
      
      {/* Animated gradient shapes (optional decorative elements) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary animate-fade-in-up">
            Building Trust,
          </span>
          <span className="block text-foreground mt-2 md:mt-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            One Project at a Time.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Mager Construction is your partner in creating lasting structures with innovation, transparency, and cutting-edge technology.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
            <a href="#news">Explore Opportunities</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
