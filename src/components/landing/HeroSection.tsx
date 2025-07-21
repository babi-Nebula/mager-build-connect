/** @format */

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock } from "lucide-react";
import AnimatedStat from "./AnimatedStat";

// Construction worker hero image
const heroImageUrl = "/lovable-uploads/9d37b7d9-b562-4fc4-b775-b1ed4f5e5555.png"; // Professional construction worker

interface StatDataItem {
  valueStr: string;
  valueNum?: number; // Optional: only for animated stats
  suffix?: string; // Optional: only for animated stats with a suffix
  label: string;
  icon: JSX.Element;
}

const statsData: StatDataItem[] = [
  {
    valueStr: "500+",
    valueNum: 500,
    suffix: "+",
    label: "Projects Completed",
    icon: <CheckCircle className='w-8 h-8 text-blue-400' />,
  },
  {
    valueStr: "98%",
    valueNum: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: <Users className='w-8 h-8 text-blue-400' />,
  },
  {
    valueStr: "24/7",
    label: "Support Available",
    icon: <Clock className='w-8 h-8 text-blue-400' />,
  }, // This will remain static, no valueNum or suffix needed for animation
];

const HeroSection: React.FC = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      {/* Background Image with Gradient Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url('${heroImageUrl}')` }}>
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70'></div>
      </div>

      {/* Animated gradient shapes */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse'></div>
      <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000'></div>

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight'>
          <span className='block text-white animate-fade-in-up'>
            Building Trust
          </span>
        </h1>
        <p
          className='mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 animate-fade-in-up'
          style={{ animationDelay: "0.2s" }}>
          Mager Construction is your partner in creating lasting structures with
          innovation, transparency, and cutting-edge technology.
        </p>
        <div
          className='mt-10 animate-fade-in-up'
          style={{ animationDelay: "0.4s" }}>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold'
            onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Opportunities
          </button>
        </div>

        {/* Stats Section */}
        <div
          className='mt-16 md:mt-24 w-full max-w-4xl animate-fade-in-up'
          style={{ animationDelay: "0.6s" }}>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8'>
            {statsData.map((stat, index) => (
              <div
                key={index}
                className='bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-center flex flex-col items-center'>
                {stat.icon}
                {typeof stat.valueNum === "number" ? (
                  <AnimatedStat
                    targetValue={stat.valueNum}
                    suffix={stat.suffix}
                    className='text-3xl md:text-4xl font-bold text-white mt-2'
                  />
                ) : (
                  <p className='text-3xl md:text-4xl font-bold text-white mt-2'>
                    {stat.valueStr}
                  </p>
                )}
                <p className='text-sm text-gray-200 mt-1'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
