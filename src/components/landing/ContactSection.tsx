
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <form className="space-y-6 p-8 bg-slate-800/50 backdrop-blur-lg border border-border rounded-xl shadow-xl animate-fade-in-up">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-1 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-1 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={5} className="mt-1 bg-input text-foreground placeholder:text-muted-foreground" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
          <div className="space-y-6 p-8 bg-slate-800/50 backdrop-blur-lg border border-border rounded-xl shadow-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Mager Construction HQ <br />
              123 BuildWell St, Suite 404 <br />
              Constructville, CS 56789
            </p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:info@magerconstruction.com" className="text-primary hover:underline">info@magerconstruction.com</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a>
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              Google Maps Embed Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
