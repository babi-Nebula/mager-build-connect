import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { toast } from "sonner";

interface ProjectRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    text: string;
    image: string;
    index: number;
  } | null;
}

const ProjectRegistrationModal: React.FC<ProjectRegistrationModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Registration submitted:", { ...formData, project: project?.text });
    
    toast.success(`Registration submitted for ${project?.text}!`);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      experience: "",
      message: ""
    });
    
    onClose();
  };

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-gray-900">
              Register for Project
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-gray-600">
            Interested in {project.text}? Fill out the form below to register your interest.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.text}
              className="w-full h-32 sm:h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              {project.text}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-700">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-1"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="experience" className="text-gray-700">
                Experience Level
              </Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (6-10 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700">
                Additional Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="mt-1"
                placeholder="Tell us more about your interest in this project..."
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectRegistrationModal;