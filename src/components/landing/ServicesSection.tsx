import React, { useState } from 'react';
import { LayoutDashboard, Radio, FileBarChart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const services = [
  {
    icon: <LayoutDashboard size={48} className="text-primary" />,
    title: 'Digital Project Management',
    subtitle: 'For Contractors & Engineers',
    description: 'Comprehensive digital tools to streamline project workflows, track progress, and collaborate efficiently in real-time.',
    linkText: 'Explore Project Management',
    options: [
      'Task scheduling and assignment',
      'Real-time progress tracking',
      'Team collaboration tools',
      'Budget and resource management',
      'Document management system',
      'Mobile access for field teams'
    ]
  },
  {
    icon: <Radio size={48} className="text-primary" />,
    title: 'Real-Time Remote Monitoring',
    subtitle: 'For Consultants',
    description: 'Advanced monitoring solutions to oversee construction sites remotely with live updates and instant notifications.',
    linkText: 'Learn About Monitoring',
    options: [
      'Live site surveillance cameras',
      'IoT sensor integration',
      'Automated alert system',
      'Remote inspection capabilities',
      'Safety compliance monitoring',
      'Environmental condition tracking'
    ]
  },
  {
    icon: <FileBarChart size={48} className="text-primary" />,
    title: 'Direct Digital Reporting',
    subtitle: 'To Clients/Owners',
    description: 'Automated reporting systems delivering real-time project insights and progress updates directly to stakeholders.',
    linkText: 'View Reporting Solutions',
    options: [
      'Customizable report templates',
      'Automated daily/weekly reports',
      'Visual progress dashboards',
      'Financial tracking and forecasts',
      'Photo and video documentation',
      'Client portal access'
    ]
  },
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Our Services
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Cutting-edge digital solutions for modern construction management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col p-6 sm:p-8 bg-card/50 backdrop-blur-lg border border-border rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-primary font-medium mb-3 sm:mb-4">
                {service.subtitle}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <AlertDialog open={selectedService === index} onOpenChange={(open) => setSelectedService(open ? index : null)}>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary/80 p-0 self-start text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300"
                    onClick={() => setSelectedService(index)}
                  >
                    {service.linkText} <span className="ml-1">&rarr;</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <AlertDialogHeader>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <AlertDialogTitle className="text-2xl">{service.title}</AlertDialogTitle>
                    <AlertDialogDescription className="text-base text-primary font-medium mt-2">
                      {service.subtitle}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <h4 className="font-semibold text-foreground mb-4">Key Features & Options:</h4>
                    <ul className="space-y-3">
                      {service.options.map((option, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction>Get Started</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
