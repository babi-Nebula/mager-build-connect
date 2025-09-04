/** @format */

import React from "react";
import CircularGallery from "./CircularGallery";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Modern Urban Residential Complex"
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    text: "Eco-Friendly Office Park"
  },
  {
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Regional Infrastructure Upgrade"
  },
  {
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    text: "Coastal City Bridge Construction"
  },
  {
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    text: "Downtown High-Rise Tower"
  },
  {
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    text: "Sustainable Housing Development"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id='news' className='py-16 md:py-24 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-black'>
            Available Construction Projects
          </h2>
          <p className='mt-4 text-lg text-gray-800'>
            Join us in building the future. Explore current opportunities.
          </p>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            items={projects}
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
