
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  contractorName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  bidAmount: z.coerce.number().positive({ message: "Bid amount must be a positive number." }),
  proposalFile: z.instanceof(FileList).refine(files => files?.length > 0, 'Proposal file is required.')
});

type ContractorFormValues = z.infer<typeof formSchema>;

interface ContractorApplicationFormProps {
  projectTitle: string;
  onFormSubmitSuccess: () => void; // Callback to close dialog
}

const ContractorApplicationForm: React.FC<ContractorApplicationFormProps> = ({ projectTitle, onFormSubmitSuccess }) => {
  const { toast } = useToast();
  const form = useForm<ContractorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contractorName: "",
      email: "",
      phone: "",
      bidAmount: undefined,
      proposalFile: undefined,
    },
  });

  function onSubmit(data: ContractorFormValues) {
    // Mock submission
    console.log('Form submitted:', data);
    toast({
      title: "Application Submitted!",
      description: `Your proposal for "${projectTitle}" has been successfully received. We will review it and get back to you shortly.`,
      variant: "default", // 'default' is less alarming than 'success' if not defined in theme
    });
    form.reset(); // Reset form fields
    onFormSubmitSuccess(); // Call callback to close dialog
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="contractorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contractor Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bidAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bid Amount ($)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="500000" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="proposalFile"
          render={({ field: { onChange, value, ...restField } }) => (
            <FormItem>
              <FormLabel>Proposal Document (PDF, DOCX)</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                  onChange={(e) => onChange(e.target.files)}
                  {...restField} 
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit Application</Button>
      </form>
    </Form>
  );
};

export default ContractorApplicationForm;

