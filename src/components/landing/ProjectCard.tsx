
import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  location: string;
  budget: string;
  animationDelay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, location, budget, animationDelay = '0s' }) => {
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-lg border border-border rounded-xl shadow-xl overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
      style={{animationDelay}}
    >
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <MapPin size={16} className="mr-2 text-secondary" /> {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <DollarSign size={16} className="mr-2 text-secondary" /> {budget}
        </div>
        <div className="mt-auto">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Apply as Contractor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
