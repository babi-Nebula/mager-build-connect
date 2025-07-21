/** @format */

import React from "react";
import { Home, Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const services = [
  {
    icon: <Home size={40} className='text-blue-400' />,
    title: "Individual Projects",
    description:
      "Expert home renovations and custom builds, tailored to your personal vision and lifestyle.",
    linkText: "Explore Home Solutions",
    linkTo: "/services/individual-projects", // Add link path
  },
  {
    icon: <Building2 size={40} className='text-blue-400' />,
    title: "Institutional Builds",
    description:
      "Specialized construction for schools, offices, and commercial spaces, focusing on functionality and durability.",
    linkText: "View Institutional Services",
    linkTo: "/services/institutional-builds", // Add link path
  },
  {
    icon: <Landmark size={40} className='text-blue-400' />,
    title: "Government Contracts",
    description:
      "Reliable infrastructure development and public works projects, delivered on time and within budget.",
    linkText: "Learn About Public Works",
    linkTo: "/services/government-contracts", // Add link path
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id='services'
      className='py-16 md:py-24 bg-background/70 backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>
            Our Services
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Catering to diverse needs with expertise and precision.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='flex flex-col p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up'
              style={{ animationDelay: `${index * 0.15}s` }}>
              <div className='mb-6'>{service.icon}</div>
              <h3 className='text-2xl font-semibold text-white mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-200 mb-6 flex-grow'>
                {service.description}
              </p>
              <Button
                variant='link'
                className='text-blue-400 hover:text-blue-300 p-0 self-start'
                asChild>
                <Link to={service.linkTo}>
                  {" "}
                  {/* Use Link component */}
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
