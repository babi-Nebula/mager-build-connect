
import React from 'react';
import { LayoutDashboard, Radio, FileBarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <LayoutDashboard size={40} className="text-primary" />,
    title: 'Digital Project Management',
    description: 'Comprehensive digital tools for contractors and engineers to streamline project workflows, track progress, and collaborate efficiently.',
    linkText: 'Explore Project Management',
    linkTo: '/services/project-management',
  },
  {
    icon: <Radio size={40} className="text-primary" />,
    title: 'Real-Time Remote Monitoring',
    description: 'Advanced monitoring solutions for consultants to oversee construction sites remotely with live updates and instant notifications.',
    linkText: 'Learn About Monitoring',
    linkTo: '/services/remote-monitoring',
  },
  {
    icon: <FileBarChart size={40} className="text-primary" />,
    title: 'Direct Digital Reporting',
    description: 'Automated reporting systems delivering real-time project insights and progress updates directly to clients and owners.',
    linkText: 'View Reporting Solutions',
    linkTo: '/services/digital-reporting',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Catering to diverse needs with expertise and precision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col p-8 bg-slate-800/50 backdrop-blur-lg border border-border rounded-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <Button variant="link" className="text-primary hover:text-primary/80 p-0 self-start" asChild>
                <Link to={service.linkTo}> {/* Use Link component */}
                  {service.linkText} &rarr;
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
