
import React, { useState } from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Import DialogClose
} from '@/components/ui/dialog';
import ContractorApplicationForm from './ContractorApplicationForm';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  location: string;
  budget: string;
  animationDelay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, location, budget, animationDelay = '0s' }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSubmitSuccess = () => {
    setIsDialogOpen(false); // Close dialog on successful form submission
  };

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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            
            <DialogContent className="sm:max-w-[525px] bg-slate-900 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">Apply for: {title}</DialogTitle>
                <DialogDescription className="text-slate-400">
                  Fill out the form below to submit your application for this project.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <ContractorApplicationForm projectTitle={title} onFormSubmitSuccess={handleFormSubmitSuccess} />
              </div>
              {/* DialogClose can be used if you want an explicit close button inside, but the default X works too */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

