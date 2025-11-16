import React from 'react';
import { Linkedin, Facebook, Instagram, Building, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedBackground from '@/components/landing/AnimatedBackground'; // <-- ADD THIS IMPORT

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

const servicesLinks = [
  { name: 'Residential Construction', href: '#' },
  { name: 'Commercial Buildings', href: '#' },
  { name: 'Infrastructure Projects', href: '#' },
  { name: 'Project Management', href: '#' },
  { name: 'Consulting Services', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
  { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 border-t border-border text-muted-foreground overflow-hidden">

      {/* 🔥 3D Animated Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <AnimatedBackground />
      </div>

      {/* Slight darker overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-primary mb-2">
              <Building size={28} />
              <span>Mager Construction</span>
            </a>
            <p className="text-sm">
              Building trust and excellence in construction management through innovative technology and unwavering commitment to quality.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+251976315798" className="flex items-center hover:text-primary transition-colors">
                <Phone size={16} className="mr-2 flex-shrink-0" /> (+251) 976 315 798
              </a>
              <a href="mailto:henios865@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail size={16} className="mr-2 flex-shrink-0" /> henios865@gmail.com
              </a>
              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Dire Dawa, <br /> Ethiopia</span>
              </p>
            </div>

            <div className="flex space-x-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p className="mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Mager Construction. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
