/** @format */

import React from "react";
import { ShieldCheck, Cpu, Users } from "lucide-react";

const valueProps = [
  {
    icon: <ShieldCheck size={48} className='text-blue-400' />,
    title: "Transparency",
    description:
      "Clear communication and open processes from start to finish, ensuring you are always informed.",
  },
  {
    icon: <Cpu size={48} className='text-blue-400' />,
    title: "Tech-Driven",
    description:
      "Leveraging the latest construction technology for efficiency, precision, and superior quality.",
  },
  {
    icon: <Users size={48} className='text-blue-400' />,
    title: "Collaboration",
    description:
      "Working closely with clients, architects, and contractors to achieve shared goals and exceptional outcomes.",
  },
];

const AboutUsSection: React.FC = () => {
  return (
    <section id='about' className='py-16 md:py-24 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>
            About Mager Construction
          </h2>
          <p className='mt-4 text-lg text-gray-300 max-w-3xl mx-auto'>
            We are dedicated to transforming the construction industry through
            innovation, integrity, and an unwavering commitment to quality. Our
            mission is to deliver projects that not only meet but exceed
            expectations, fostering long-term relationships built on trust and
            mutual success.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className='text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300 animate-fade-in-up'
              style={{ animationDelay: `${index * 0.15}s` }}>
              <div className='flex justify-center mb-4'>{prop.icon}</div>
              <h3 className='text-xl font-semibold text-white mb-2'>
                {prop.title}
              </h3>
              <p className='text-gray-200 text-sm'>
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
