
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Modern Urban Residential Complex',
    location: 'Downtown Metropia',
    budget: '$5.2M - $6.5M',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Eco-Friendly Office Park',
    location: 'Green Valley Tech Hub',
    budget: '$12M - $15M',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Regional Infrastructure Upgrade',
    location: 'Tri-County Area',
    budget: '$25M+',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Available Construction Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us in building the future. Explore current opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} animationDelay={`${index * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
